import './experience.js';
import './inner.js';
const ms=document.documentElement.lang==='ms';
const t=(m,e)=>ms?m:e;
const toggle=document.querySelector('.mobile-toggle');
const nav=document.getElementById('mainnav');
function setMenu(open){toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);}
toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);toggle.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.top')&&nav.classList.contains('open'))setMenu(false)});
function continueToWhatsApp(form, data, files, reference, service) {
 const chat = new URL(form.dataset.whatsapp);
 const description = Array.from(String(data.get('description') || '').trim());
 const summary = description.length > 500 ? description.slice(0,500).join('')+'…' : description.join('');
 const lines = [
  t('Salam BUSRA, saya ingin meminta sebut harga.','Hello BUSRA, I would like a quotation.'),
  t('Rujukan','Reference')+' · '+reference,
  String(data.get('name')), service, String(data.get('area')), summary
 ].filter(Boolean);
 if(files.length) lines.push(t('Gambar dalam permintaan','Photos saved with enquiry')+' · '+files.length);
 const text = lines.join('\n');
 chat.searchParams.set('text', text);

 const panel = document.createElement('section');
 panel.className='quote-receipt';
 const heading = document.createElement('h2');
 heading.tabIndex=-1;
 heading.textContent=t('Permintaan telah diterima','Enquiry received');
 const receipt = document.createElement('p');
 receipt.textContent=t('Rujukan','Reference')+' · '+reference;
 const instructions = document.createElement('p');
 const link = document.createElement('a');
 link.className='btn';
 link.href=chat.href;
 link.textContent=t('Buka WhatsApp BUSRA','Open BUSRA WhatsApp');
 panel.append(heading,receipt,instructions,link);
 form.replaceWith(panel);
 heading.focus();
 const shareData={files,text};
 if(files.length && navigator.share && navigator.canShare?.(shareData)) {
  instructions.textContent=t('Untuk berkongsi gambar, pilih WhatsApp dan kenalan BUSRA (019-727 5253). Anda juga boleh buka chat BUSRA terus untuk menghantar ringkasan.','To share your photos, choose WhatsApp and select BUSRA (019-727 5253). You can also open the BUSRA chat directly to send your summary.');
  const share=document.createElement('button');
  share.className='btn';
  share.type='button';
  share.textContent=t('Kongsi gambar','Share photos');
  link.before(share);
  share.addEventListener('click',async()=>{
   try { await navigator.share(shareData); }
   catch(error) {
    if(error.name!=='AbortError') instructions.textContent=t('Buka chat BUSRA dan lampirkan gambar menggunakan ikon lampiran.','Open the BUSRA chat and add photos using the attachment button.');
   }
  });
  return;
 }
 instructions.textContent=t('Tekan Hantar dalam WhatsApp untuk menghantar mesej.','Tap Send in WhatsApp to send your message.');
 location.assign(chat.href);
}
document.querySelectorAll('form[data-quote]').forEach(form=>{
 const status=form.querySelector('[data-quote-status]')||document.createElement('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');if(!status.isConnected)form.append(status);
 const trap=document.createElement('input');trap.name='website';trap.tabIndex=-1;trap.autocomplete='off';trap.hidden=true;form.append(trap);
 let requestId=crypto.randomUUID(),pending=false;
 form.addEventListener('input',e=>{e.target.setCustomValidity?.('');if(!pending)requestId=crypto.randomUUID()});
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(pending)return;
  const button=form.querySelector('[type=submit],button:not([type])');
  const data=new FormData(form);
  const files=data.getAll('photos').filter(f=>f.size);
  const service=form.querySelector('select[name=service]')?.selectedOptions[0]?.textContent || '';
  if(files.length>5||files.some(f=>f.size>5242880||!['image/jpeg','image/png','image/webp'].includes(f.type))){status.textContent=t('Pilih sehingga 5 gambar JPG, PNG atau WebP, maksimum 5 MB setiap satu.','Choose up to 5 JPG, PNG or WebP images, 5 MB each.');return;}
  pending=true;button.disabled=true;data.set('lang',ms?'ms':'en');data.set('requestId',requestId);status.textContent=t('Sedang menghantar…','Sending…');
  try{
   const res=await fetch('/api/quotes',{method:'POST',body:data});const result=await res.json();
   if(!res.ok){
    if(result.fields){const field=form.elements.namedItem(Object.keys(result.fields)[0]);field?.setCustomValidity(t('Sila semak maklumat ini.','Please check this field.'));field?.reportValidity();}
    throw Error(res.status===429?t('Terlalu banyak percubaan. Cuba lagi kemudian.','Too many attempts. Please try again later.'):t('Permintaan belum diterima. Semak butiran dan cuba lagi atau hubungi 019-727 5253.','Your request was not accepted. Check the details and try again or call 019-727 5253.'));
   }
   if(!/^BSS-\d{4}-[A-F0-9]{8}$/.test(result.reference))throw Error('Invalid response');
   try{sessionStorage.setItem('busra-latest-reference',result.reference)}catch{}
   continueToWhatsApp(form,data,files,result.reference,service);
  }catch(err){status.textContent=err.message?.includes('019-')||err.message?.includes('attempts')||err.message?.includes('percubaan')?err.message:t('Gagal menghubungi pelayan. Butiran anda dikekalkan. Cuba lagi atau hubungi 019-727 5253.','Connection failed. Your details are still here. Retry or call 019-727 5253.');}
  finally{pending=false;button.disabled=false}
 });
});


const serviceMenu=document.querySelector('.service-nav');
if(serviceMenu){
 const summary=serviceMenu.querySelector('summary');
 document.addEventListener('click',event=>{
  if(!serviceMenu.contains(event.target)) serviceMenu.open=false;
 });
 serviceMenu.addEventListener('focusout',event=>{
  if(event.relatedTarget && !serviceMenu.contains(event.relatedTarget)) serviceMenu.open=false;
 });
 serviceMenu.addEventListener('keydown',event=>{
  if(event.key==='Escape' && serviceMenu.open){
   event.stopPropagation();
   serviceMenu.open=false;
   summary.focus();
  }
 });
}
document.addEventListener('click',e=>{
 const link=e.target.closest('a[href]');if(!link)return;
 const event=link.protocol==='tel:'?'phone':link.hostname==='wa.me'?'whatsapp':null;
 if(event)fetch('/api/contact-click',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({event,lang:ms?'ms':'en'}),keepalive:true}).catch(()=>{});
});

