export const json = (body, status = 200, extra = {}) => Response.json(body, {status, headers: {
  'cache-control':'no-store', 'x-content-type-options':'nosniff', ...extra
}});
export const fieldLimits = {name:120, phone:32, service:150, area:180, description:4500, email:254, property:160, dimensions:180, timeframe:180, lang:5};
const maxFile = 5 * 1024 * 1024;
const maxBody = maxFile * 5 + 65536;
const sessionId = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;

export function validateFields(form) {
  const data = {}, fields = {};
  for (const [key, limit] of Object.entries(fieldLimits)) {
    const value = form.get(key);
    data[key] = typeof value === 'string' ? value.trim() : '';
    if (data[key].length > limit) fields[key] = 'too_long';
  }
  for (const key of ['name','phone','service','area','description']) {
    if (!data[key]) fields[key] = 'required';
  }
  if (!/^[+0-9 ()-]+$/.test(data.phone) || !/^\d{7,15}$/.test(data.phone.replace(/\D/g,''))) fields.phone = 'invalid_phone';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fields.email = 'invalid_email';
  return {data,fields};
}

export async function imageType(file) {
  if (!file || typeof file.slice !== 'function' || file.size < 12 || file.size > maxFile) return null;
  const bytes = new Uint8Array(await file.slice(0,12).arrayBuffer());
  const prefix = (...values) => values.every((n,i) => bytes[i] === n);
  if (prefix(255,216,255)) return 'jpg';
  if (prefix(137,80,78,71,13,10,26,10)) return 'png';
  if (prefix(82,73,70,70) && String.fromCharCode(...bytes.slice(8,12)) === 'WEBP') return 'webp';
  return null;
}

async function readForm(request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.startsWith('multipart/form-data')) throw new Error('unsupported');
  const length = Number(request.headers.get('content-length'));
  if (length > maxBody) throw new Error('too_large');
  if (length > 0 && request.headers.get('CF-Connecting-IP')) return request.formData();
  if (!request.body) throw new Error('invalid');
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  for (;;) {
    const part = await reader.read();
    if (part.done) break;
    size += part.value.byteLength;
    if (size > maxBody) { await reader.cancel(); throw new Error('too_large'); }
    chunks.push(part.value);
  }
  return new Response(new Blob(chunks), {headers:{'content-type':contentType}}).formData();
}

export async function notifyStaff(env, reference) {
  if (!env.STAFF_NOTIFICATION_URL) return;
  const now = Math.floor(Date.now()/1000);
  const lock = await env.DB.prepare('UPDATE quotes SET lease_until=? WHERE reference=? AND notified=0 AND lease_until<=?').bind(now+120,reference,now).run();
  if (!lock.meta.changes) return;
  try {
    const target = new URL(env.STAFF_NOTIFICATION_URL);
    if (target.protocol !== 'https:') throw new Error('https_required');
    const response = await fetch(target,{method:'POST',redirect:'error',
      headers:{'content-type':'application/json','idempotency-key':reference},
      body:JSON.stringify({event:'quote.received',reference}),signal:AbortSignal.timeout(8000)});
    if (!response.ok) throw new Error('notification_declined');
    await env.DB.prepare('UPDATE quotes SET notified=1,lease_until=0 WHERE reference=?').bind(reference).run();
  } catch {
    console.warn('Quotation staff notification deferred',reference);
  }
}

export async function retryNotifications(env) {
  if (!env.DB || !env.STAFF_NOTIFICATION_URL) return;
  const due = await env.DB.prepare('SELECT reference FROM quotes WHERE notified=0 AND lease_until<=? ORDER BY created LIMIT 25').bind(Math.floor(Date.now()/1000)).all();
  for (const row of due.results) await notifyStaff(env,row.reference);
}

async function removeUploads(storage, keys) {
  await Promise.all(keys.map(async key => {
    try {
      await storage.delete(key);
    } catch (error) {
      // KV can temporarily rate-limit a delete immediately after the initial write.
      if (!/429|rate.limit|too many requests/i.test(String(error))) throw error;
      await new Promise(resolve => setTimeout(resolve, 1200));
      await storage.delete(key);
    }
  }));
}

export async function submitQuote(request,env,ctx) {
  if (request.method !== 'POST') return json({error:'method'},405,{allow:'POST'});
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return json({error:'origin'},403);
  if (!env.DB) return json({error:'unavailable'},503);
  if (env.QUOTE_LIMIT && !(await env.QUOTE_LIMIT.limit({key:request.headers.get('CF-Connecting-IP') || 'local'})).success) return json({error:'too_many_requests'},429,{'retry-after':'60'});
  let form;
  try { form = await readForm(request); }
  catch (err) { return json({error:err.message==='too_large'?'too_large':'invalid_form'},err.message==='too_large'?413:400); }
  const id = form.get('requestId');
  if (form.get('website') || !sessionId.test(id || '')) return json({error:'invalid_form'},400);
  const {data,fields} = validateFields(form);
  const photos = form.getAll('photos').filter(f=>!(typeof f==='object' && f.size===0 && !f.name));
  const types = photos.length <= 5 ? await Promise.all(photos.map(imageType)) : [];
  if (photos.length>5 || types.some(t=>!t)) fields.photos='invalid_photos';
  if (Object.keys(fields).length) return json({error:'validation',fields},400);
  if (photos.length && !env.PHOTOS) return json({error:'uploads_unavailable'},503);
  const lookup = () => env.DB.prepare('SELECT reference FROM quotes WHERE request_id=?').bind(id).first();
  const existing = await lookup();
  if (existing) return json({reference:existing.reference});
  const uuid = crypto.randomUUID();
  const reference = 'BSS-'+new Date().getUTCFullYear()+'-'+uuid.slice(0,8).toUpperCase();
  const files = [];
  try {
    for (let i=0;i<photos.length;i++) {
      const key=uuid+'/'+(i+1)+'.'+types[i];
      await env.PHOTOS.put(key,await photos[i].arrayBuffer());
      files.push(key);
    }
  } catch {
    await removeUploads(env.PHOTOS,files);
    return json({error:'uploads_unavailable'},503);
  }
  try {
    await env.DB.prepare('INSERT INTO quotes (reference,request_id,payload,files) VALUES (?,?,?,?)').bind(reference,id,JSON.stringify(data),JSON.stringify(files)).run();
  } catch {
    // A concurrent retry may already have committed. Keep files when commit outcome cannot be checked.
    const winner=await lookup();
    if (winner?.reference!==reference) await removeUploads(env.PHOTOS,files);
    if (winner) return json({reference:winner.reference});
    return json({error:'unavailable'},503);
  }
  ctx.waitUntil(notifyStaff(env,reference));
  return json({reference},201);
}
