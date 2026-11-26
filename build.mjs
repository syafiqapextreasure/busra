import fs from 'node:fs';
import path from 'node:path';
import {home} from './src/home.mjs';
import {pages} from './src/pages.mjs';
const routes = {
 home:['',''],about:['tentang-kami','about'],services:['perkhidmatan','services'],
 'aluminium-doors':['perkhidmatan/pintu-aluminium','services/aluminium-doors'],
 'aluminium-windows':['perkhidmatan/tingkap-aluminium','services/aluminium-windows'],
 'shower-screens':['perkhidmatan/skrin-mandian','services/shower-screens'],
 'shopfront-glass':['perkhidmatan/kaca-kedai','services/shopfront-glass'],
 'wall-glazing':['perkhidmatan/wall-glazing','services/wall-glazing'],
 'glass-mirrors':['perkhidmatan/kaca-cermin','services/glass-mirrors'],
 'aluminium-cabinets':['perkhidmatan/kabinet-aluminium','services/aluminium-kitchen-cabinets'],
 construction:['perkhidmatan/pembinaan','services/construction'],projects:['projek','projects'],
 'project-detail':['projek/contoh-pintu-lipat','projects/folding-door-design'],
 faq:['soalan-lazim','faq'],contact:['hubungi-kami','contact'],
 'request-quote':['minta-sebut-harga','request-a-quote'],
 'quote-confirmation':['minta-sebut-harga/terima-kasih','request-a-quote/thank-you'],privacy:['notis-privasi','privacy']
};
const origin = (process.env.SITE_URL || 'https://busra.invalid').replace(/\/$/,'');
const esc=s=>String(s).replace(/&(?!(?:amp|lt|gt|quot);)/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const urlFor=(key,lang)=>{if(!routes[key]) throw Error('Unknown route '+key);const p=routes[key][lang==='ms'?0:1];return '/'+lang+'/'+(p?p+'/':'')};
const write=(file,data)=>{const dest=path.join('public',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,data)};
const iconNames={phone:'phone',pin:'map-pin',arrow:'arrow-right',chevron:'chevron-down',tools:'wrench',tag:'tag',settings:'settings',document:'file-text',layers:'layers',home:'house',shop:'store',check:'circle-check',clock:'clock',clipboard:'clipboard-list',quote:'calculator',calculator:'calculator',menu:'menu',close:'x',image:'image',calendar:'calendar-days',location:'map-pin',business:'store',building:'building-2',mail:'mail',upload:'image-up',chat:'message-circle',measure:'ruler',tool:'wrench',user:'user',list:'list',file:'file-text',design:'layers',briefcase:'briefcase-business',site:'construction',work:'hard-hat',grid:'layout-grid',store:'store',inspect:'search',shield:'shield-check',size:'ruler'};
const cache=new Map();
function icon(id){
 if(cache.has(id))return cache.get(id);
 let svg;
 if(id==='whatsapp') svg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 21l1.2-4a9 9 0 1 1 3.3 3z"/><path d="M8 7c-2 3 3 9 7 10 2 0 3-2 2-3l-2-1-1 1c-1.7-.7-3-2-4-4l1-1-1-2z"/></svg>';
 else {let file='node_modules/lucide-static/icons/'+(iconNames[id]||id)+'.svg'; if(!fs.existsSync(file)) file='node_modules/lucide-static/icons/circle-dot.svg';svg=fs.readFileSync(file,'utf8').replace(/^[\s\S]*?<svg/,'<svg');}
 svg=svg.replace(/\s+class="[^"]*"/,'').replace(/<svg\b/,'<svg class="glyph" aria-hidden="true" focusable="false"');
 cache.set(id,svg);return svg;
}
function img(id,alt='',cls=''){
 const base='/media/'+esc(id);
 const lead=id.endsWith('-hero');
 const sizes=cls==='in-gallery-main'||id==='project-detail-hero'?'94vw':lead?'(max-width: 880px) 100vw, 56vw':'auto, (max-width: 880px) 92vw, 40vw';
 return `<img src="${base}.webp" srcset="${base}-480.webp 480w, ${base}-960.webp 960w, ${base}.webp 1536w" sizes="${sizes}" alt="${esc(alt)}" class="${esc(cls)}" decoding="async" ${lead?'fetchpriority="high"':'loading="lazy"'}>`;
}
const wa='https://wa.me/60197275253';
for(const lang of ['ms','en']){
 const t=(ms,en)=>lang==='ms'?ms:en,url=k=>urlFor(k,lang),quote=url('request-quote'),ctx={lang,t,url,img,icon,wa,quote};
 for(const key of Object.keys(routes)){
  const item=pages[key],other=lang==='ms'?'en':'ms';
  const pt=key==='home'?t('Pakar Aluminium & Kaca','Aluminium & Glass Specialists'):item.title[lang==='ms'?1:0];
  const desc=key==='home'?t('Pintu aluminium, tingkap, skrin mandian dan kaca kedai di Seri Kembangan. Kongsi ukuran dan lokasi projek untuk sebut harga BUSRA.','Explore aluminium doors, windows, shower screens and shopfront glass in Seri Kembangan. Send your dimensions and location for a BUSRA quotation.'):item.description[lang==='ms'?1:0];
  const title=pt+' | BUSRA'+(key==='home'||routes[key][0].startsWith('perkhidmatan')?' · Seri Kembangan':'');
  const servicesActive=key==='services'||routes[key][0].startsWith('perkhidmatan/');
  const serviceIcons=['door-open','panels-top-left','shower-head','store','building-2','square','layout-panel-top','hard-hat'];
  const serviceItems=Object.keys(routes).filter(k=>routes[k][0].startsWith('perkhidmatan/')).map((k,i)=>
    `<a href="${url(k)}"${k===key?' aria-current="page"':''}><span class="service-symbol">${icon(serviceIcons[i])}</span>${pages[k].title[lang==='ms'?1:0]}</a>`).join('');
  const serviceMenu=`<details class="service-nav"><summary class="${servicesActive?'current':''}">${t('Perkhidmatan','Services')}<span class="disclosure-icon">${icon('chevron')}</span></summary><div class="service-options"><a class="directory-link" href="${url('services')}">${t('Semua perkhidmatan','All services')}${icon('arrow')}</a><div class="service-list">${serviceItems}</div></div></details>`;
  const links=(footer=false)=>[['home',t('Utama','Home')],['about',t('Tentang Kami','About Us')],['services',t('Perkhidmatan','Services')],['contact',t('Hubungi Kami','Contact Us')]].map(([k,label])=>{
    if(k==='services'&&!footer) return serviceMenu;
    return `<a class="${key===k?'current':''}" href="${url(k)}"${key===k?' aria-current="page"':''}>${label}</a>`;
  }).join('');
  const brand=`<a class="brand" href="${url('home')}" aria-label="BUSRA · ${t('Utama','Home')}"><img src="/media/busra-logo.svg" alt="BUSRA Solution &amp; Services"></a>`;
  const header=`<header class="top">${brand}<button class="mobile-toggle" aria-expanded="false" aria-controls="mainnav" aria-label="${t('Buka menu','Open menu')}">${icon('menu')}</button><nav id="mainnav" aria-label="${t('Navigasi utama','Main menu')}">${links()}</nav><div class="head-end"><div class="langs"><a href="${urlFor(key,'ms')}" lang="ms" ${lang==='ms'?'aria-current="true"':''}>BM</a> | <a href="${urlFor(key,'en')}" lang="en" ${lang==='en'?'aria-current="true"':''}>EN</a></div><a class="btn" href="${quote}">${t('Minta Sebut Harga','Request a Quote')}</a></div></header>`;
  const footer=`<footer class="bottom">${brand}<div class="footer-grid"><a href="tel:+60197275253">${icon('phone')}019-727 5253</a><a href="${url('contact')}">${icon('pin')}Seri Kembangan, Selangor</a><nav>${links(true)}</nav><div class="utility"><a href="${url('projects')}">${t('Projek','Projects')}</a> · <a href="${url('faq')}">${t('Soalan Lazim','FAQ')}</a> · <a href="${url('privacy')}">${t('Notis Privasi','Privacy Notice')}</a></div></div></footer>`;
  const schema={'@context':'https://schema.org','@type':'HomeAndConstructionBusiness','@id':origin+'/#busra',name:'BUSRA Solution & Services',url:origin+'/ms/',telephone:'+60197275253',image:origin+'/media/home-hero.webp',address:{'@type':'PostalAddress',streetAddress:'D-G-08, Pangsapuri Putra Raya, Jalan PP29, Taman Pinggiran Putra, Seksyen 2',postalCode:'43300',addressLocality:'Seri Kembangan',addressRegion:'Selangor',addressCountry:'MY'}};
  const crumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:t('Utama','Home'),item:origin+url('home')},{'@type':'ListItem',position:2,name:pt,item:origin+url(key)}]};
  const dataGraph=[schema];
  if(key!=='home')dataGraph.push(crumbSchema);
  if(routes[key][0].startsWith('perkhidmatan/'))dataGraph.push({'@context':'https://schema.org','@type':'Service',name:pt,description:desc,url:origin+url(key),provider:{'@id':origin+'/#busra'},areaServed:'Seri Kembangan'});
  const loader=`<dialog class="page-loader" aria-labelledby="loader-title"><div class="loader-panel">
    <div class="loader-emblem"><img src="/media/brand-mark.svg" alt="BUSRA" width="66" height="66"></div>
    <div class="loader-status"><span id="loader-title" tabindex="-1" autofocus>${t('Memuatkan gambar','Loading images')}</span><span data-percent aria-hidden="true">0%</span></div>
    <progress value="0" max="100" aria-labelledby="loader-title"></progress>
    <button type="button" data-skip-loader>${t('Terus ke laman','Continue to page')}</button>
  </div></dialog>`;
  const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${origin+url(key)}">${['ms','en','x-default'].map(l=>`<link rel="alternate" hreflang="${l}" href="${origin+urlFor(key,l==='en'?'en':'ms')}">`).join('')}<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${origin}/media/home-hero.webp"><meta name="theme-color" content="#062a42">${key==='quote-confirmation'?'<meta name="robots" content="noindex,follow">':''}<link rel="icon" href="/media/brand-mark.svg"><link rel="stylesheet" href="/site.css"><link rel="preload" as="font" type="font/woff2" crossorigin href="/inter.woff2"><script type="application/ld+json">${JSON.stringify(dataGraph)}</script><script type="module" src="/app.js"></script></head><body data-confirm="${url('quote-confirmation')}"><a class="skip" href="#main">${t('Langkau ke kandungan','Skip to content')}</a>${header}<main id="main">${key==='home'?home(ctx):item.render(ctx)}</main>${footer}${loader}</body></html>`;
  write(url(key).slice(1)+'index.html',html);
 }
}
write('site.css',['src/site.css','src/inner.css','src/experience.css'].map(f=>fs.readFileSync(f,'utf8')).join('\n'));
for(const f of ['app.js','inner.js','experience.js'])fs.copyFileSync('src/'+f,'public/'+f);
fs.copyFileSync('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2','public/inter.woff2');
write('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(routes).filter(k=>k!=='quote-confirmation').flatMap(k=>['ms','en'].map(l=>'<url><loc>'+origin+urlFor(k,l)+'</loc></url>')).join('')+'</urlset>');
write('robots.txt','User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nSitemap: '+origin+'/sitemap.xml\n');
write('index.html','<!doctype html><html lang="ms"><meta charset="utf-8"><title>BUSRA</title><meta http-equiv="refresh" content="0;url=/ms/"><a href="/ms/">BUSRA Solution &amp; Services</a></html>');
write('404.html','<!doctype html><html lang="ms"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404 · BUSRA</title><link rel="stylesheet" href="/site.css"><main class="wrap"><h1>Halaman tidak ditemui</h1><p>Page not found.</p><a class="btn" href="/ms/">Kembali ke Utama</a></main></html>');
console.log('Built '+Object.keys(routes).length+' pages in Malay and English.');

