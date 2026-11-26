import {json} from './quotes.mjs';

// Accept only the two event dimensions. Never persist request headers, paths or request bodies.
export async function recordClick(request,env) {
  if (request.method!=='POST') return json({error:'method'},405,{allow:'POST'});
  if (request.headers.get('origin')!==new URL(request.url).origin) return json({error:'origin'},403);
  if (!env.DB) return json({error:'unavailable'},503);
  const size=Number(request.headers.get('content-length'));
  if (size>256) return json({error:'invalid_event'},400);
  if (env.CLICK_LIMIT && !(await env.CLICK_LIMIT.limit({key:request.headers.get('CF-Connecting-IP')||'local'})).success) return json({error:'too_many_requests'},429);
  const reader=request.body?.getReader();
  if (!reader) return json({error:'invalid_event'},400);
  let text='',length=0;
  const decoder=new TextDecoder();
  for (;;) {
    const part=await reader.read();
    if (part.done) break;
    length+=part.value.byteLength;
    if (length>256) {await reader.cancel();return json({error:'invalid_event'},400)}
    text+=decoder.decode(part.value,{stream:true});
  }
  let event;
  try{event=JSON.parse(text+decoder.decode())}catch{return json({error:'invalid_event'},400)}
  if (!event || !['phone','whatsapp'].includes(event.event) || !['ms','en'].includes(event.lang) || Object.keys(event).length!==2) return json({error:'invalid_event'},400);
  await env.DB.prepare("INSERT INTO daily_metrics(day,event,lang,total) VALUES(date('now','+8 hours'),?,?,1) ON CONFLICT(day,event,lang) DO UPDATE SET total=total+1").bind(event.event,event.lang).run();
  return new Response(null,{status:204,headers:{'cache-control':'no-store'}});
}
