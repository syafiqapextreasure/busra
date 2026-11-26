import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import app from '../worker/index.mjs';
import {notifyStaff} from '../worker/quotes.mjs';
import {authorized} from '../worker/admin.mjs';

function fixture() {
  const db=new DatabaseSync(':memory:');
  db.exec(readFileSync(new URL('../migrations/0001_quotes.sql',import.meta.url),'utf8'));
  db.exec(readFileSync(new URL('../migrations/0002_daily_counts.sql',import.meta.url),'utf8'));
  function stmt(sql,args=[]) {
    const prepared=db.prepare(sql);
    return {
      bind(...values){return stmt(sql,values)},
      async run(){return {meta:prepared.run(...args)}},
      async first(){return prepared.get(...args)},
      async all(){return {results:prepared.all(...args)}}
    };
  }
  const objects=new Map(),tasks=[];
  const env={DB:{prepare:stmt},PHOTOS:{put:async(k,v)=>objects.set(k,await new Response(v).arrayBuffer()),delete:async(keys)=>keys.forEach(k=>objects.delete(k)),get:async(k)=>objects.has(k)?{body:objects.get(k)}:null}};
  const fetch=(path,init={})=>app.fetch(new Request('https://busra.test'+path,init),env,{waitUntil:p=>tasks.push(p)});
  const submit=form=>fetch('/api/quotes',{method:'POST',body:form});
  return {env,objects,db,tasks,submit,fetch};
}
function sample() {
  const f=new FormData();
  for (const [k,v] of Object.entries({requestId:crypto.randomUUID(),name:'Site tester',phone:'019 555 1122',service:'doors',area:'43300',description:'Sliding door for a patio'})) f.set(k,v);
  return f;
}
function photo(form,bytes=[137,80,78,71,13,10,26,10,0,0,0,13]) {
  form.append('photos',new File([Uint8Array.from(bytes)],'sample.png',{type:'image/png'}));
}
test('accepts a quote once on replay and returns the committed reference',async()=>{
  const h=fixture(),form=sample(); photo(form);
  const first=await h.submit(form),second=await h.submit(form);
  assert.equal(first.status,201);assert.equal(second.status,200);
  assert.deepEqual(await second.json(),await first.json());
  assert.equal(h.objects.size,1);assert.equal(h.db.prepare('SELECT count(*) n FROM quotes').get().n,1);
  assert.equal(h.db.prepare("SELECT total FROM daily_metrics WHERE event='quote'").get().total,1);
});
test('two concurrent retries save one quote and remove duplicate uploads',async()=>{
  const h=fixture(),form=sample();photo(form);
  const responses=await Promise.all([h.submit(form),h.submit(form)]);
  assert.deepEqual(await responses[0].json(),await responses[1].json());
  assert.equal(h.objects.size,1);
});
test('invalid fields and unsupported uploads return field errors',async()=>{
  const h=fixture(),f=sample(); f.set('phone','1');f.delete('area');photo(f,[1,1,1,1,1,1,1,1,1,1,1,1]);
  const r=await h.submit(f);assert.equal(r.status,400);
  assert.deepEqual(Object.keys((await r.json()).fields).sort(),['area','phone','photos']);
  assert.equal(h.objects.size,0);
});
test('attachment failure never returns confirmation and rolls back completed uploads',async()=>{
  const h=fixture(),f=sample();photo(f);photo(f);
  const write=h.env.PHOTOS.put;let n=0;
  h.env.PHOTOS.put=async(...args)=>{if(n++===1)throw new Error('storage offline');await write(...args)};
  assert.equal((await h.submit(f)).status,503);
  assert.equal(h.objects.size,0);assert.equal(h.db.prepare('SELECT count(*) n FROM quotes').get().n,0);
});
test('staff access, safe detail output, protected downloads and status transitions',async()=>{
  const h=fixture(),f=sample();f.set('name','Tom & Co <shop>');photo(f);
  const {reference}=await (await h.submit(f)).json();
  h.env.ADMIN_PASSWORD='staff-test-secret-only-12345';
  const headers={authorization:'Basic '+btoa('busra:'+h.env.ADMIN_PASSWORD)};
  assert.equal((await h.fetch('/admin/quotes/'+reference)).status,401);
  assert.equal((await h.fetch('/admin/quotes/'+reference+'/files/0')).status,401);
  assert.match(await (await h.fetch('/admin/quotes/'+reference,{headers})).text(),/Tom &amp; Co &lt;shop&gt;/);
  assert.equal((await h.fetch('/admin/quotes/'+reference+'/files/0',{headers})).status,200);
  const change={method:'POST',headers,body:new URLSearchParams({status:'Quoted'})};
  assert.equal((await h.fetch('/admin/quotes/'+reference,change)).status,403);
  change.headers={...headers,origin:'https://busra.test'};
  assert.equal((await h.fetch('/admin/quotes/'+reference,change)).status,303);
  assert.equal(h.db.prepare('SELECT status FROM quotes').get().status,'Quoted');
});
test('notification retry delivers only reference after receiver recovers',async()=>{
  const h=fixture(),form=sample();const {reference}=await (await h.submit(form)).json();
  const previous=globalThis.fetch;let attempts=0;
  h.env.STAFF_NOTIFICATION_URL='https://staff.example/queue';
  globalThis.fetch=async(_,init)=>{assert.deepEqual(JSON.parse(init.body),{event:'quote.received',reference});return new Response(null,{status:++attempts===1?503:204})};
  try{
    await notifyStaff(h.env,reference);
    assert.equal(h.db.prepare('SELECT notified FROM quotes').get().notified,0);
    h.db.exec('UPDATE quotes SET lease_until=0');
    await notifyStaff(h.env,reference);await notifyStaff(h.env,reference);
    assert.equal(h.db.prepare('SELECT notified FROM quotes').get().notified,1);
    assert.equal(attempts,2);
  } finally {globalThis.fetch=previous}
});
test('origin and rate limits reject before storage writes',async()=>{
  const h=fixture();h.env.QUOTE_LIMIT={limit:async()=>({success:false})};
  assert.equal((await h.submit(sample())).status,429);
  assert.equal((await h.fetch('/api/quotes',{method:'POST',headers:{origin:'https://other.test'},body:sample()})).status,403);
  assert.equal(await authorized(new Request('https://busra.test/admin'),{}),false);
});
test('draft edits stay private until published',async()=>{
  const h=fixture();
  h.env.ADMIN_PASSWORD='staff-test-secret-only-12345';h.env.ASSETS={fetch:async()=>new Response('<h1>Original</h1>',{headers:{'content-type':'text/html'}})};
  const headers={authorization:'Basic '+btoa('busra:'+h.env.ADMIN_PASSWORD),origin:'https://busra.test'};
  const save=(value,action)=>h.fetch('/admin/content',{method:'POST',headers,body:new URLSearchParams({path:'/ms/',field:'heading',value,action})});
  assert.equal((await save('Draft title','draft')).status,303);
  assert.equal(h.db.prepare('SELECT published FROM page_edits').get().published,null);
  assert.equal((await save('Reviewed title','publish')).status,303);
  await save('Second draft','draft');
  assert.equal(h.db.prepare('SELECT published FROM page_edits').get().published,'Reviewed title');
});
test('contact clicks aggregate by event and language and reject personal data',async()=>{
  const h=fixture();
  const send=data=>h.fetch('/api/contact-click',{method:'POST',headers:{origin:'https://busra.test'},body:JSON.stringify(data)});
  assert.equal((await send({event:'phone',lang:'en'})).status,204);
  assert.equal((await send({event:'phone',lang:'en'})).status,204);
  assert.equal((await send({event:'whatsapp',lang:'ms'})).status,204);
  assert.equal((await send({event:'phone',lang:'en',name:'Private'})).status,400);
  assert.equal((await send({event:'quote',lang:'en'})).status,400);
  assert.deepEqual(h.db.prepare('SELECT event,lang,total FROM daily_metrics ORDER BY event').all().map(row=>({...row})),[{event:'phone',lang:'en',total:2},{event:'whatsapp',lang:'ms',total:1}]);
  assert.equal((await h.fetch('/admin/metrics')).status,401);
});
