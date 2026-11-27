import {collections} from './works-data.mjs';

const asset = (id, small = false) => '/media/works/' + String(id).padStart(3, '0') + (small ? '-small' : '') + '.webp';

function collection(c, group) {
  const title = c.t(...group.title);
  const captions = new Map(group.photos.flatMap(([ms, en, ids]) => ids.map(id => [id, c.t(ms, en)])));
  const photo = id => {
    const caption = captions.get(id);
    return `<a class="works-photo" href="${asset(id)}" data-work-photo data-caption="${caption}" aria-label="${caption} · ${c.t('Foto','Photo')} ${id}"><img data-site-photo src="${asset(id,true)}" alt="${caption}" loading="lazy" decoding="async"></a>`;
  };
  const rest = [...captions.keys()].filter(id => !group.covers.includes(id));
  return `<section class="works-group" id="${group.id}" aria-labelledby="title-${group.id}">
    <header><h2 id="title-${group.id}">${title}</h2><p>${c.t(...group.description)}</p></header>
    <div class="works-grid">${group.covers.map(photo).join('')}</div>
    <details class="works-extra"><summary><span class="works-see">${c.t('Lihat semua','View all')} ${captions.size} ${c.t('foto','photos')}</span><span class="works-less">${c.t('Paparkan lebih sedikit','Show fewer photos')}</span>${c.icon('chevron')}</summary><div class="works-grid">${rest.map(photo).join('')}</div></details>
  </section>`;
}

export const worksPage = {
  title: ['Site Works', 'Kerja di Tapak'],
  description: ['See BUSRA’s site photographs of aluminium doors, windows, glazing, balustrades and other installations. Browse real work by trade.', 'Lihat foto kerja BUSRA di tapak termasuk pintu dan tingkap aluminium, pemasangan kaca, balustrad dan kerja lain mengikut kategori.'],
  render(c) {
    const {t,icon} = c;
    const feature = (id, name, priority) => `<a class="works-photo works-feature" href="${asset(id)}" data-work-photo data-caption="${name}" aria-label="${name}"><img data-site-photo src="${asset(id)}" alt="${name}" decoding="async" ${priority ? 'fetchpriority="high"' : ''}></a>`;
    return `<article class="works wrap" data-works>
      <header class="works-intro"><h1>${t('Kerja di Tapak','Site Works')}</h1><p>${t('Terokai kerja BUSRA melalui foto dari bengkel dan tapak pemasangan. Pilih kategori untuk melihat bingkai, sambungan dan kemasan dari dekat.', 'Explore BUSRA’s work through photographs from the workshop and installation sites. Choose a trade to see the frames, fittings and finishes up close.')}</p></header>
      <div class="works-pair">${feature(146,t('Sudut paviliun dengan dinding kaca berbingkai','Corner of a pavilion with framed glass walls'),true)}${feature(164,t('Susur tangga dengan panel kaca','Stair railing with glass panels'),false)}</div>
      <nav class="works-categories" aria-label="${t('Kategori kerja','Work categories')}"><a href="#collections" data-works-filter="all">${t('Semua','All')}</a>${collections.map(g=>`<a href="#${g.id}" data-works-filter="${g.id}">${t(...g.title)}</a>`).join('')}</nav>
      <div id="collections">${collections.map(g=>collection(c,g)).join('')}</div>
      <dialog class="works-viewer" aria-label="${t('Paparan foto tapak','Site photo viewer')}"><form method="dialog"><button class="works-close" aria-label="${t('Tutup foto','Close photo')}" autofocus>${icon('close')}</button></form><img alt=""><div class="works-tools"><button type="button" data-step="-1" aria-label="${t('Foto sebelumnya','Previous photo')}">${icon('arrow-left')}</button><p aria-live="polite"></p><button type="button" data-step="1" aria-label="${t('Foto seterusnya','Next photo')}">${icon('arrow')}</button></div></dialog>
    </article>`;
  }
};
