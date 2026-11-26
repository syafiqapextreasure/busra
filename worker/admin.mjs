const escape = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const statuses = ['New','Contacted','Quoted','Won','Closed'];
const refPattern = /^BSS-\d{4}-[A-F0-9]{8}$/;
const safePath = /^\/(?:ms|en)\/(?:[a-z0-9-]+\/)*$/;
const safeField = /^[a-z][a-z0-9-]{0,60}$/;
const headers = {
  'cache-control':'no-store', 'x-robots-tag':'noindex, nofollow', 'x-content-type-options':'nosniff',
  'referrer-policy':'no-referrer',
  'content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'"
};
const html=(title,body,status=200)=>new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)} | BUSRA staff</title>
<style>*{box-sizing:border-box}body{margin:0;background:#f5f8f7;color:#0b2e45;font:1.12rem/1.55 system-ui,sans-serif}header,main{max-width:70rem;margin:auto;padding:1.5rem}header{border-bottom:1px solid #abc4b7}a{color:#075f35}article,form{background:white;padding:1rem;border:1px solid #cbdad5;border-radius:.5rem;margin:1rem 0}form form{border:0}input,select,textarea,button{font:inherit;padding:.5rem;max-width:100%}button{background:#096b37;color:white;border:0;border-radius:.3rem;cursor:pointer}label{display:block;margin:.6rem 0}textarea{width:100%}dt{font-weight:bold}dd{margin:0 0 .65rem;white-space:pre-wrap;overflow-wrap:anywhere}small{color:#485851}</style><header><strong>BUSRA staff</strong> &nbsp; <a href="/admin">Enquiries</a> &nbsp; <a href="/admin/content">Page content</a></header><main><h1>${escape(title)}</h1>${body}</main></html>`,{status,headers:{...headers,'content-type':'text/html; charset=utf-8'}});
const redirect=path=>new Response(null,{status:303,headers:{...headers,location:path}});
const fieldValue=(form,key)=>String(form.get(key)||'').trim();

export async function authorized(request,env) {
  if (!env.ADMIN_PASSWORD || env.ADMIN_PASSWORD.length < 20) return false;
  const received=request.headers.get('authorization')||'';
  if (!received.startsWith('Basic ')) return false;
  let candidate;
  try { candidate=atob(received.slice(6)); } catch {return false;}
  const encoder=new TextEncoder();
  const [a,b]=await Promise.all([candidate,'busra:'+env.ADMIN_PASSWORD].map(s=>crypto.subtle.digest('SHA-256',encoder.encode(s))));
  const actual=new Uint8Array(a),expected=new Uint8Array(b);
  let diff=0;for(let i=0;i<actual.length;i++) diff|=actual[i]^expected[i];
  return diff===0;
}

async function listQuotes(env,url) {
  const page = Math.max(0,Number.parseInt(url.searchParams.get('page')||'0',10)||0);
  const data=await env.DB.prepare('SELECT reference,status,created,notified FROM quotes ORDER BY created DESC,reference DESC LIMIT 41 OFFSET ?').bind(page*40).all();
  const links=data.results.slice(0,40).map(r=>`<article><a href="/admin/quotes/${escape(r.reference)}"><strong>${escape(r.reference)}</strong></a> · ${escape(r.status)}<br><small>${escape(r.created)} UTC · Staff alert ${r.notified?'delivered':'pending'}</small></article>`).join('');
  return html('Project enquiries','<p><a href="/admin/metrics">View daily contact counts</a></p>'+(links||'<p>Enquiries will appear here once received.</p>')+(page?'<a href="?page='+(page-1)+'">Previous</a> ':'')+(data.results.length>40?'<a href="?page='+(page+1)+'">Next</a>':''));
}

async function quoteDetail(request,env,ref,index) {
  if (!refPattern.test(ref)) return html('Enquiry not found','',404);
  const row=await env.DB.prepare('SELECT * FROM quotes WHERE reference=?').bind(ref).first();
  if (!row) return html('Enquiry not found','',404);
  const files=JSON.parse(row.files);
  if (index!==undefined) {
    if (request.method!=='GET' || !/^\d+$/.test(index) || !files[Number(index)]) return html('Attachment not found','',404);
    const key=files[Number(index)], object=await env.PHOTOS.get(key);
    if (!object) return html('Attachment not found','',404);
    return new Response(object.body,{headers:{...headers,'content-type':'application/octet-stream','content-disposition':'attachment; filename="'+ref+'-'+(Number(index)+1)+'.'+key.split('.').pop()+'"'}});
  }
  if (request.method==='POST') {
    const form=await request.formData();
    const status=fieldValue(form,'status');
    if (!statuses.includes(status)) return html('Choose an enquiry status','',400);
    await env.DB.prepare('UPDATE quotes SET status=? WHERE reference=?').bind(status,ref).run();
    return redirect('/admin/quotes/'+ref);
  }
  const data=JSON.parse(row.payload);
  const fields=Object.entries(data).filter(([,v])=>v).map(([k,v])=>'<dt>'+escape(k)+'</dt><dd>'+escape(v)+'</dd>').join('');
  return html(ref,`<small>${escape(row.created)} UTC</small><article><dl>${fields}</dl>${files.map((_,i)=>'<a href="/admin/quotes/'+ref+'/files/'+i+'">Download photo '+(i+1)+'</a> ').join('')}</article><form method="post"><label>Status <select name="status">${statuses.map(s=>'<option '+(s===row.status?'selected':'')+'>'+s+'</option>').join('')}</select></label><button>Update status</button></form>`);
}

async function pageEditor(request,env,url) {
  if (request.method==='POST') {
    const form=await request.formData();
    const path=fieldValue(form,'path'), field=fieldValue(form,'field'), value=fieldValue(form,'value');
    if (!safePath.test(path)||!safeField.test(field)) return html('Check the page path and field','',400);
    if (form.get('action')==='restore') {
      await env.DB.prepare('DELETE FROM page_edits WHERE path=? AND field=?').bind(path,field).run();
      return redirect('/admin/content?path='+encodeURIComponent(path)+'&field='+encodeURIComponent(field));
    }
    if (!value || value.length>3000) return html('Enter replacement text up to 3,000 characters','',400);
    const probe=await env.ASSETS.fetch(new Request(new URL(path,url)));
    if (!probe.ok || !(probe.headers.get('content-type')||'').includes('text/html')) return html('Page not found','',404);
    const text=await probe.text();
    if (!['heading','title','description'].includes(field) && !text.includes('data-edit="'+field+'"')) return html('This page does not contain that field','',400);
    const published=form.get('action')==='publish'?value:null;
    await env.DB.prepare('INSERT INTO page_edits(path,field,draft,published) VALUES(?,?,?,?) ON CONFLICT(path,field) DO UPDATE SET draft=excluded.draft,published=COALESCE(excluded.published,page_edits.published)').bind(path,field,value,published).run();
    return redirect('/admin/content?path='+encodeURIComponent(path));
  }
  const path=url.searchParams.get('path')||'/ms/';
  if (!safePath.test(path)) return html('Invalid page path','',400);
  const actual=await env.ASSETS.fetch(new Request(new URL(path,url)));
  const source=actual.ok ? await actual.text() : '';
  const keys=[...new Set(['heading','title','description',...Array.from(source.matchAll(/data-edit="([a-z][a-z0-9-]*)"/g),m=>m[1])])];
  const data=await env.DB.prepare('SELECT * FROM page_edits WHERE path=? ORDER BY field').bind(path).all();
  const selected=url.searchParams.get('field')||'heading';
  const record=data.results.find(r=>r.field===selected);
  return html('Edit page text',`<form method="get"><label>Page path <input name="path" value="${escape(path)}" required></label><label>Field <select name="field">${keys.map(k=>'<option '+(k===selected?'selected':'')+'>'+escape(k)+'</option>').join('')}</select></label><button>Open field</button></form>
  <p><a href="${escape(path)}">Published page</a> · <a href="/admin/preview?path=${encodeURIComponent(path)}">Preview drafts</a></p>
  <form method="post"><h2>${escape(selected)}</h2><input type="hidden" name="path" value="${escape(path)}"><input type="hidden" name="field" value="${escape(selected)}"><label>Replacement text<textarea rows="5" required maxlength="3000" name="value">${escape(record?.draft||'')}</textarea></label><button name="action" value="draft">Save draft</button> <button name="action" value="publish">Publish text</button></form>
  ${record?'<form method="post"><input type="hidden" name="path" value="'+escape(path)+'"><input type="hidden" name="field" value="'+escape(selected)+'"><button name="action" value="restore">Restore original '+escape(selected)+'</button></form>':''}
  <h2>Saved changes</h2>${data.results.map(r=>'<article><strong>'+escape(r.field)+'</strong><p>'+escape(r.draft)+'</p><small>'+(r.draft===r.published?'Published':'Draft')+'</small></article>').join('')}`);
}

export async function admin(request,env,render) {
  if (!await authorized(request,env)) return new Response('Staff authentication required',{status:401,headers:{...headers,'www-authenticate':'Basic realm="BUSRA staff", charset="UTF-8"'}});
  if (!env.DB) return html('Enquiry storage is unavailable','',503);
  const url=new URL(request.url), path=url.pathname.replace(/\/$/,'');
  if (request.method==='POST' && request.headers.get('origin')!==url.origin) return html('Invalid form origin','',403);
  if (!['GET','POST'].includes(request.method)) return html('Method unavailable','',405);
  if (path==='/admin' && request.method==='GET') return listQuotes(env,url);
  if (path==='/admin/metrics' && request.method==='GET') {
    const {results}=await env.DB.prepare("SELECT day,lang,SUM(CASE WHEN event='phone' THEN total ELSE 0 END) AS phone,SUM(CASE WHEN event='whatsapp' THEN total ELSE 0 END) AS whatsapp,SUM(CASE WHEN event='quote' THEN total ELSE 0 END) AS quote FROM daily_metrics WHERE day>=date('now','+8 hours','-29 days') GROUP BY day,lang ORDER BY day DESC,lang").all();
    const rows=results.map(r=>'<tr><td>'+escape(r.day)+'</td><td>'+escape(r.lang)+'</td><td>'+r.phone+'</td><td>'+r.whatsapp+'</td><td>'+r.quote+'</td></tr>').join('');
    return html('Daily contact counts','<p>Last 30 days in Malaysia time. Phone and WhatsApp counts measure clicks. Accepted quotes count successfully stored enquiries.</p><table cellpadding="8"><thead><tr><th>Day</th><th>Language</th><th>Phone</th><th>WhatsApp</th><th>Quotes</th></tr></thead><tbody>'+rows+'</tbody></table>');
  }
  if (path==='/admin/content') return pageEditor(request,env,url);
  if (path==='/admin/preview' && request.method==='GET') {
    const preview=url.searchParams.get('path');
    if (!safePath.test(preview||'')) return html('Invalid page path','',400);
    const response=await render(new Request(new URL(preview,url)),env,true);
    const out=new Response(response.body,response);
    out.headers.set('cache-control','no-store'); out.headers.set('x-robots-tag','noindex');
    return out;
  }
  const match=path.match(/^\/admin\/quotes\/([^/]+)(?:\/files\/(\d+))?$/);
  if (match) return quoteDetail(request,env,match[1],match[2]);
  return html('Page not found','',404);
}
