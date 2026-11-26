const services = [
  ['aluminium-doors','Pintu Aluminium','Aluminium Doors'],
  ['aluminium-windows','Tingkap Aluminium','Aluminium Windows'],
  ['shower-screens','Skrin Mandian','Shower Screens'],
  ['shopfront-glass','Kaca Kedai','Shopfront Glass'],
  ['glass-mirrors','Kaca & Cermin','Glass & Mirrors'],
  ['aluminium-cabinets','Kabinet Aluminium','Aluminium Cabinets']
];
export function home({t,url,img,icon,wa,quote}){
  const button = (href,label,secondary=false) => `<a class="btn ${secondary?'outline':''}" href="${href}">${secondary?icon('whatsapp'):''}${label}${secondary?'':icon('arrow')}</a>`;
  const ask=t('Minta Sebut Harga','Request a Quote'), chat=t('WhatsApp Kami','WhatsApp Us');
  const benefits=[
    t('Rekaan mengikut ruang','Designed for your space'),
    t('Kemasan yang teliti','Attention to finish'),
    t('Pilihan kediaman & kedai','For homes & shops')
  ];
  const steps=[
    [t('Kongsi Keperluan','Share your requirements'),t('Beritahu kami jenis produk dan keperluan ruang anda.','Tell us about the product and the space you have in mind.')],
    [t('Semakan & Sebut Harga','Review & quotation'),t('Kami semak keperluan dan berikan sebut harga yang sesuai.','We review your requirements and prepare a quotation.')],
    [t('Pemasangan','Installation'),t('Kerja pemasangan mengikut skop yang dipersetujui.','Installation follows the agreed scope of work.')]
  ];
  return `<section class="home-hero"><div class="hero-copy"><p class="eyebrow">${t('Pakar Aluminium & Kaca','Aluminium & Glass Specialists')}</p><h1 data-edit="home-title">${t('Aluminium & Kaca<br>Untuk Ruang Anda.','Aluminium & Glass<br>For Your Space.')}</h1><p class="lead" data-edit="home-intro">${t('Pintu, tingkap dan kaca mengikut keperluan ruang anda.','Doors, windows and glazing to suit your space.')}</p><div class="actions">${button(quote,ask)}${button(wa,chat,true)}</div><div class="local"><a href="${url('contact')}">${icon('pin')}Seri Kembangan, Selangor</a><a href="tel:+60197275253">${icon('phone')}019-727 5253</a></div></div><div class="hero-visual">${img('home-hero',t('Pintu kaca gelangsar menghadap halaman','Sliding glass doors overlooking a courtyard'),'main-photo')}<div class="inset">${img('home-inset',t('Perincian bingkai aluminium','Aluminium frame detail'))}</div></div></section>
  <div class="benefits">${benefits.map((s,i)=>`<div>${icon(['layers','settings','house'][i])}<b>${s}</b></div>`).join('')}</div>
  <section class="wrap home-services"><h2 class="lined">${t('Perkhidmatan Kami','Our Services')}</h2><div class="home-grid">${services.map(([k,ms,en],i)=>`<a class="home-card" href="${url(k)}"><div>${img('home-card-'+(i+1),t(ms,en))}</div><h3>${t(ms,en)}${icon('arrow')}</h3></a>`).join('')}</div><a class="all-services" href="${url('services')}">${t('Lihat semua perkhidmatan','View all services')} →</a></section>
  <section class="process"><h2>${t('Dari idea ke pemasangan','From idea to installation')}</h2><div class="steps wrap">${steps.map(([head,desc],i)=>`<div>${icon(['clipboard-list','calculator','wrench'][i])}<div><h3>0${i+1} ${head}</h3><p>${desc}</p></div></div>`).join('')}</div></section>
  <section class="wrap home-quote"><div><h2 class="lined">${t('Ingin Minta<br>Sebut Harga?','Looking for<br>a quote?')}</h2><p>${t('Cover kawasan Lembah Klang dan sekitarnya. Kongsi lokasi dan keperluan projek anda untuk sebut harga.','We serve the Klang Valley and surrounding areas. Send your project location and requirements for a quote.')}</p>${button(wa,chat,true)}<div class="contact-lines"><a href="tel:+60197275253">${icon('phone')}019-727 5253</a><a href="${url('contact')}">${icon('pin')}Seri Kembangan, Selangor</a></div></div>
  <form data-quote method="post" action="/api/quotes" enctype="multipart/form-data"><div class="form-row"><label>${t('Nama Penuh','Full name')} *<input required name="name" autocomplete="name" maxlength="100"></label><label>${t('No. Telefon','Phone number')} *<input required type="tel" name="phone" autocomplete="tel" maxlength="30"></label></div><div class="form-row"><label>${t('Jenis Perkhidmatan','Service')} *<select required name="service"><option value="">${t('Pilih perkhidmatan','Select service')}</option>${[...services,['wall-glazing','Wall Glazing','Wall Glazing'],['construction','Pembinaan','Construction'],['other','Belum pasti','Not sure']].map(([k,m,e])=>`<option value="${k}">${t(m,e)}</option>`).join('')}</select></label><label>${t('Kawasan / Poskod','Area / postcode')} *<input name="area" required maxlength="160"></label></div><label>${t('Butiran Ringkas','Project description')} *<textarea required name="description" rows="3" maxlength="4500"></textarea></label><small><a href="${url('privacy')}">${t('Notis Privasi','Privacy Notice')}</a></small><button class="btn" type="submit">${ask} ${icon('arrow')}</button></form></section>`;
}
