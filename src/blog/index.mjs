import fs from 'node:fs';
import {diagram} from './diagrams.mjs';

export const articles = ['interiors','openings','checks'].flatMap(group =>
  JSON.parse(fs.readFileSync(new URL('./'+group+'.json', import.meta.url),'utf8')));
const sources = {
  hypro:['Hypro Renovation','https://hyproreno.com/office-partition/'],
  rollers:['ClickBina','https://clickbina.com/guides/sliding-door-roller-replacement-malaysia/'],
  windows:['Reliance Home','https://reliancehome.com/aluminium-windows/aluminium-casement-window-supplier-malaysia-reliance-home/'],
  soliq:['Soliq','https://soliq.com.my/services/'], showers:['Reliance Home','https://reliancehome.com/shower-screen/'],
  cabinet:['My Reno Service','https://myrenoservice.com/renovation-pricing-study-kl-selangor/'],
  aiklian:['Aik Lian','https://www.aiklian.com.my/'], glass:['KL Servis Rumah','https://www.klservisrumah.my/services/glass-aluminium']
};
export const blogRoutes = {blog:['blog','blog']};
export const articleByKey = new Map();
const reverse = pair => [pair[1],pair[0]];
const esc = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
function photo(id, alt, sizes, eager=false) {
  const base='/media/'+id;
  let set;
  if(id.startsWith('blog/')) {
    set=base+'-small.webp 560w, '+base+'.webp 1600w';
  } else {
    set=base+'-480.webp 480w, '+base+'-960.webp 960w, '+base+'.webp 1536w';
  }
  return '<img data-site-photo src="'+base+'.webp" srcset="'+set+'" sizes="'+sizes+'" alt="'+esc(alt)+'" decoding="async" '+(eager?'fetchpriority="high"':'loading="lazy"')+'>';
}
function card(c,a,lead) {
  const title=c.t(...a.title);
  return `<a class="journal-card" href="${c.url('article-'+a.id)}"><div>${photo(a.hero,'',lead?'(max-width:600px) 92vw, 30vw':'(max-width:600px) 92vw, (max-width:900px) 44vw, 23vw')}</div><h3>${esc(title)}</h3></a>`;
}
function listing(c) {
  const [feature,...rest]=articles, {t,icon,url}=c;
  return `<div class="journal-index"><h1>${t('Sebelum &amp; Selepas','Before &amp; After')}</h1>
    <div class="journal-feature"><div class="journal-compare" data-compare>
      ${photo(feature.hero,t(...feature.alt),'94vw',true)}
      <div class="compare-before">${photo('blog/office-before',t('Pejabat kosong sebelum kemasan','Unfinished office shell'),'94vw',true)}</div>
      <span class="compare-tag before-tag">${t('Sebelum','Before')}</span><span class="compare-tag after-tag">${t('Selepas','After')}</span>
      <span class="compare-line" aria-hidden="true"><b>‹ ›</b></span>
      <input class="compare-input" hidden type="range" min="0" max="100" value="50" aria-label="${t('Bahagian imej sebelum ubah suai','Portion of the before image')}">
    </div><div class="feature-caption"><h2>${t(...feature.title)}</h2><a class="btn" href="${url('article-office')}">${t('Lihat cerita','Read the story')} ${icon('arrow')}</a></div></div>
    <section class="journal-latest"><h2>${t('Artikel terkini','Latest articles')}</h2><div class="lead-stories">${rest.slice(0,3).map(a=>card(c,a,true)).join('')}</div><div class="more-stories">${rest.slice(3).map(a=>card(c,a,false)).join('')}</div></section></div>`;
}
function detail(c,a) {
  const {t,url,icon,origin}=c;
  const title=t(...a.title), page=url('article-'+a.id), source=sources[a.source];
  const labels={construction:t('Pembinaan','Construction'),'aluminium-doors':t('Pintu aluminium','Aluminium doors'),'aluminium-windows':t('Tingkap aluminium','Aluminium windows'),'aluminium-cabinets':t('Kabinet aluminium','Aluminium cabinets'),'shower-screens':t('Skrin mandian','Shower screens'),'shopfront-glass':t('Kaca kedai','Shopfront glass'),'glass-mirrors':t('Kaca dan cermin','Glass and mirrors')};
  return `<article class="journal-story"><header class="story-heading"><nav class="journal-crumb" aria-label="${t('Jejak halaman','Breadcrumb')}"><a href="${url('home')}">${t('Utama','Home')}</a><span>/</span><a href="${url('blog')}">Blog</a><span>/</span><span>${t(...a.topic)}</span></nav>
  <h1>${esc(title)}</h1><div class="story-byline"><span><img src="/media/brand-mark.svg" alt="">${t('Pasukan BUSRA','BUSRA team')}</span><a data-share href="https://wa.me/?text=${encodeURIComponent(title)}%20${origin+page}">${icon('share-2')}${t('Kongsi','Share')}</a></div></header>
  <div class="story-hero">${photo(a.hero,t(...a.alt),'(min-width:1600px) 1520px, 98vw',true)}</div>
  <div class="story-body"><section><h2>${t(...a.head)}</h2><p class="story-answer">${t(...a.summary)}</p><p>${t(...a.body)}</p></section>
  <div class="story-photos">${a.figures.map(([id,ms,en])=>`<figure>${photo(id,t(ms,en),'(max-width:600px) 92vw, 43vw')}<figcaption>${t(ms,en)}</figcaption></figure>`).join('')}</div>
  <figure class="guide-graphic"><figcaption>${t(...a.diagram)}</figcaption>${diagram(a.id)}<ol>${a.steps.map(([symbol,ms,en,msText,enText])=>`<li>${icon(symbol)}<strong>${t(ms,en)}</strong><span>${t(msText,enText)}</span></li>`).join('')}</ol></figure>
  <section><h2>${t(...a.endHead)}</h2><p>${t(...a.end)}</p></section><p class="story-reference">${t('Bacaan lanjut','Further reading')} · <a href="${source[1]}">${source[0]}</a></p><div class="story-actions"><a href="${c.quote}?service=${a.service}">${t('Bincangkan projek anda','Discuss your project')} ${icon('arrow')}</a><a href="${url(a.service)}">${labels[a.service]}</a></div></div></article>`;
}
export const blogPages = {blog:{
  title:['Aluminium & Glass Blog','Blog Aluminium & Kaca'],
  description:['Practical guides to aluminium doors, windows, glass and renovation for homes and offices in the Klang Valley.','Panduan pintu dan tingkap aluminium, kaca dan ubah suai untuk rumah serta pejabat di Lembah Klang.'],
  render:listing
}};
for(const a of articles){
  const key='article-'+a.id;
  articleByKey.set(key,a);
  blogRoutes[key]=a.slug.map(slug=>'blog/'+slug);
  blogPages[key]={title:reverse(a.title),description:reverse(a.summary),render:c=>detail(c,a)};
}
