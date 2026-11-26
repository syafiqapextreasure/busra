const products = {
  'aluminium-doors': {
    title: ['Aluminium Doors', 'Pintu Aluminium'],
    lead: ['Pintu lipat dan gelangsar mengikut susun atur ruang anda.', 'Folding and sliding doors for the layout of your space.'],
    category: 'aluminium',
    options: [
      ['Pintu Lipat', 'Folding Doors', 'Bukaan luas untuk ruang yang lebih fleksibel.', 'A wide opening for a more flexible space.'],
      ['Pintu Gelangsar', 'Sliding Doors', 'Laluan yang ringkas dan menjimatkan ruang.', 'A streamlined opening that saves space.'],
      ['Rekaan Mengikut Ruang', 'Made for Your Space', 'Susun atur pilihan mengikut keperluan anda.', 'A layout suited to your needs.'],
    ],
    checks: [
      ['Saiz bukaan', 'Opening size', 'Tentukan ukuran bukaan yang sesuai dengan ruang.', 'Consider the dimensions of the available opening.'],
      ['Ruang pergerakan panel', 'Panel movement', 'Pastikan ruang yang cukup untuk lipatan atau gelangsar.', 'Allow enough room to fold or slide panels.'],
      ['Pilihan kemasan bingkai', 'Frame finish', 'Pilih kemasan yang sepadan dengan ruang anda.', 'Choose a finish that suits your space.'],
      ['Keperluan kaca dan akses', 'Glazing and access', 'Semak penggunaan ruang dan laluan yang diperlukan.', 'Consider how the space is used and accessed.'],
    ],
    faq: [
      ['Apakah beza pintu lipat dan gelangsar?', 'How do folding and sliding doors differ?', 'Panel pintu lipat bertindan di sisi bukaan. Panel gelangsar bergerak di sepanjang landasan.', 'Folding panels stack to the side of the opening. Sliding panels travel along a track.'],
      ['Apakah maklumat untuk sebut harga?', 'What information is needed for a quote?', 'Kongsi anggaran saiz bukaan, lokasi, jenis pintu dan gambar ruang jika ada.', 'Share approximate opening dimensions, the location, your preferred door type and a photo if available.'],
    ],
    related: ['aluminium-windows', 'shopfront-glass'],
  },
  'aluminium-windows': {
    title: ['Aluminium Windows', 'Tingkap Aluminium'],
    lead: ['Pilihan tingkap untuk cahaya, pengudaraan dan gaya ruang anda.', 'Window options for light, ventilation and the style of your space.'],
    category: 'aluminium',
    options: [
      ['Tingkap Casement', 'Casement Windows', 'Bukaan berengsel yang fleksibel.', 'A flexible hinged opening.'],
      ['Tingkap Gelangsar', 'Sliding Windows', 'Panel meluncur untuk menjimatkan ruang.', 'Sliding panels that save space.'],
      ['Bingkai Mengikut Ruang', 'Made-to-Measure Frames', 'Ukuran dan susunan mengikut ruang.', 'Dimensions and layouts suited to your space.'],
    ],
    checks: [
      ['Saiz dan kedudukan bukaan', 'Opening size and position', 'Pastikan ukuran memenuhi keperluan ruang.', 'Allow for the dimensions and position of the opening.'],
      ['Aliran udara', 'Ventilation', 'Pertimbangkan keperluan pengudaraan ruang.', 'Consider how much ventilation the room needs.'],
      ['Akses penggunaan', 'Ease of use', 'Tentukan kedudukan pemegang dan ruang bukaan.', 'Check handle position and operating clearance.'],
      ['Kemasan bingkai', 'Frame finish', 'Selaraskan dengan kemasan ruang anda.', 'Coordinate with the finishes in your room.'],
    ],
    faq: [
      ['Bagaimana memilih jenis bukaan tingkap?', 'How do I choose a window opening?', 'Pertimbangkan pengudaraan, ruang untuk membuka panel dan cara tingkap akan digunakan.', 'Consider ventilation, room for the panel to open and how you will use the window.'],
      ['Bolehkah saya berkongsi ukuran awal?', 'Can I share initial measurements?', 'Ya. Kongsi lebar dan tinggi bukaan serta gambar jika ada untuk semakan awal.', 'Yes. Share the opening width and height and any photos for an initial review.'],
    ],
    related: ['aluminium-doors', 'glass-mirrors'],
  },
  'shower-screens': {
    title: ['Shower Screens', 'Skrin Mandian'],
    lead: ['Susun ruang mandi dengan pilihan kaca mengikut ruang tersedia.', 'Define your shower area with glass options suited to the available space.'],
    category: 'glass',
    options: [
      ['Panel Tetap', 'Fixed Panel', 'Pembahagi ruang mandi yang ringkas.', 'A simple divider for the shower area.'],
      ['Pintu Berengsel', 'Hinged Door', 'Akses bukaan yang mudah dan praktikal.', 'An easy, practical opening.'],
      ['Susun Atur Sudut', 'Corner Layout', 'Pilihan susun atur mengikut ruang.', 'A layout suited to the available corner.'],
    ],
    checks: [
      ['Saiz kawasan mandi', 'Shower area size', 'Tentukan keluasan dan bentuk kawasan mandi.', 'Measure the size and shape of the shower area.'],
      ['Ruang pintu dibuka', 'Door clearance', 'Pastikan ruang cukup untuk membuka panel.', 'Allow clearance for the door to open.'],
      ['Kedudukan aksesori', 'Fixture position', 'Semak paip, pili dan aksesori di dalam ruang mandi.', 'Check the position of pipes, taps and shower fittings.'],
      ['Pilihan kaca dan bingkai', 'Glass and frame options', 'Pilih kemasan yang sesuai dengan bilik mandi.', 'Consider finishes that suit the bathroom.'],
    ],
    note: ['Pilihan tertakluk kepada semakan ruang.', 'Options depend on the space assessment.'],
    faq: [
      ['Apakah ukuran yang perlu dikongsi?', 'What measurements should I share?', 'Kongsi lebar, kedalaman dan tinggi ruang mandi, serta gambar jika ada.', 'Share the shower width, depth and height and photos if available.'],
      ['Bagaimana memilih susun atur skrin?', 'How do I choose a screen layout?', 'Susun atur bergantung pada bentuk ruang, kedudukan aksesori dan laluan masuk.', 'The layout depends on the shape of the space, fixture positions and access.'],
    ],
    related: ['glass-mirrors', 'aluminium-windows'],
  },
  'shopfront-glass': {
    title: ['Shopfront Glass', 'Kaca Kedai'],
    lead: ['Fasad kaca dan pintu aluminium untuk ruang perniagaan anda.', 'Glass facades and aluminium doors for your business premises.'],
    category: 'glass',
    options: [
      ['Fasad Kaca', 'Glass Facade', 'Paparan hadapan yang moden untuk premis anda.', 'A clean, modern frontage for your premises.'],
      ['Pintu Kaca', 'Glass Doors', 'Akses pelanggan yang selesa dan praktikal.', 'Convenient access for customers.'],
      ['Susun Atur Kedai', 'Shopfront Layout', 'Gabungan panel kaca dan pintu mengikut keperluan.', 'A combination of glass panels and doors to suit the space.'],
    ],
    checks: [
      ['Lebar muka kedai', 'Frontage width', 'Ukur keluasan bukaan hadapan.', 'Check the width of the front opening.'],
      ['Aliran keluar masuk', 'Entry and exit', 'Pertimbangkan laluan pelanggan dan kakitangan.', 'Consider customer and staff access.'],
      ['Penggunaan premis', 'How the premises are used', 'Semak susun atur untuk aktiviti harian.', 'Tie the layout to day-to-day use.'],
      ['Akses pemasangan', 'Installation access', 'Kenal pasti laluan dan keadaan tapak.', 'Identify access routes and site conditions.'],
    ],
    note: ['Kesesuaian pilihan disemak mengikut lokasi.', 'Suitability depends on the site.'],
    faq: [
      ['Apakah maklumat premis yang diperlukan?', 'What information about the premises is needed?', 'Kongsi lokasi, ukuran awal bukaan, kegunaan premis dan gambar hadapan jika ada.', 'Share the location, approximate opening size, how the premises are used and any frontage photos.'],
      ['Bolehkah reka bentuk disesuaikan?', 'Can the design be adapted?', 'Susunan panel dan pintu boleh dibincangkan berdasarkan bukaan dan akses premis.', 'Panel and door layouts can be discussed based on the opening and access needs.'],
    ],
    related: ['wall-glazing', 'aluminium-doors'],
  },
  'wall-glazing': {
    title: ['Wall Glazing', 'Wall Glazing'],
    lead: ['Penyelesaian dinding kaca mengikut reka bentuk dan keperluan bangunan.', 'Glazed wall options suited to the design and needs of the building.'],
    category: 'glass',
    options: [
      ['Dinding Kaca', 'Glazed Walls', 'Panel fasad untuk ruang bangunan.', 'Facade panels for building spaces.'],
      ['Susunan Panel', 'Panel Layout', 'Komposisi panel dan bukaan mengikut ruang.', 'Panel and opening arrangements that suit the space.'],
      ['Bingkai Aluminium', 'Aluminium Frames', 'Pilihan kemasan bingkai yang sesuai.', 'Frame finish options for your project.'],
    ],
    checks: [
      ['Keadaan struktur dan bukaan', 'Structure and openings', 'Semak keadaan bangunan dan bukaan.', 'Review building and opening conditions.'],
      ['Ketinggian dan akses', 'Height and access', 'Pertimbangkan keadaan capaian di tapak.', 'Take site access into account.'],
      ['Reka bentuk panel', 'Panel design', 'Tentukan susunan panel dan kesan visual.', 'Consider panel arrangement and appearance.'],
      ['Keperluan teknikal projek', 'Technical requirements', 'Sediakan pelan, ukuran dan maklumat berkaitan jika ada.', 'Gather relevant drawings, dimensions and details if available.'],
    ],
    note: ['Penilaian teknikal diperlukan sebelum cadangan akhir.', 'A technical assessment is needed before a final proposal.'],
    faq: [
      ['Apakah maklumat teknikal yang perlu disediakan?', 'What technical information is needed?', 'Kongsi pelan, gambar, ukuran bukaan dan maklumat struktur yang tersedia.', 'Share available drawings, photos, opening dimensions and structural information.'],
      ['Bagaimana skop kerja ditentukan?', 'How is the scope of work determined?', 'Skop dibincangkan selepas semakan keadaan bangunan, akses dan keperluan teknikal.', 'The scope follows a review of building conditions, access and technical requirements.'],
    ],
    related: ['shopfront-glass', 'construction'],
  },
  'glass-mirrors': {
    title: ['Glass & Mirrors', 'Kaca & Cermin'],
    lead: ['Pilihan kaca dan cermin mengikut ukuran dan fungsi ruang.', 'Glass and mirror options sized for the way you use your space.'],
    category: 'glass',
    options: [
      ['Cermin Dinding', 'Wall Mirrors', 'Cermin yang sesuai untuk ruang dalaman.', 'Mirrors suited to interior spaces.'],
      ['Panel Kaca', 'Glass Panels', 'Panel kaca mengikut fungsi ruang.', 'Glass panels to suit the use of the room.'],
      ['Ukuran Tersuai', 'Custom Dimensions', 'Cermin dan panel kaca mengikut dimensi dan bentuk ruang.', 'Mirrors and glass panels sized for your space.'],
    ],
    checks: [
      ['Lokasi pemasangan', 'Installation location', 'Kenal pasti ruang dan permukaan pemasangan.', 'Identify the installation area and surface.'],
      ['Ukuran', 'Dimensions', 'Kongsi lebar dan tinggi yang diperlukan.', 'Share the required width and height.'],
      ['Jenis permukaan', 'Surface type', 'Semak bahan dinding atau permukaan sokongan.', 'Check the wall material or supporting surface.'],
      ['Kemasan tepi dan kaedah pemasangan', 'Edge finish and fitting', 'Bincangkan pilihan yang sesuai dengan kegunaan ruang.', 'Consider options suited to the way the space is used.'],
    ],
    note: ['Pilihan disemak mengikut penggunaan.', 'Options depend on how the product will be used.'],
    faq: [
      ['Bolehkah cermin dibuat mengikut ukuran?', 'Can mirrors be made to size?', 'Kongsi ukuran dan lokasi pemasangan supaya pilihan boleh disemak.', 'Share the dimensions and installation location so we can review the options.'],
      ['Apakah gambar yang membantu sebut harga?', 'What photos help with a quote?', 'Gambar permukaan pemasangan dan pandangan luas ruang membantu kami memahami keperluan.', 'Photos of the installation surface and the wider room help us understand your needs.'],
    ],
    related: ['shower-screens', 'shopfront-glass'],
  },
  'aluminium-cabinets': {
    title: ['Aluminium Cabinets', 'Kabinet Aluminium'],
    lead: ['Susun atur kabinet untuk keperluan ruang dapur anda.', 'Cabinet layouts to suit the way you use your kitchen.'],
    category: 'aluminium',
    options: [
      ['Kabinet Bawah', 'Base Cabinets', 'Ruang penyimpanan untuk peralatan dan keperluan dapur.', 'Storage for kitchen equipment and essentials.'],
      ['Kabinet Dinding', 'Wall Cabinets', 'Susunan menegak untuk memanfaatkan ruang.', 'Vertical storage that makes use of wall space.'],
      ['Susun Atur Dapur', 'Kitchen Layout', 'Pilihan susun atur kabinet mengikut bentuk dapur.', 'Cabinet layouts suited to your kitchen.'],
    ],
    checks: [
      ['Panjang dinding', 'Wall length', 'Ukur bahagian dinding yang tersedia.', 'Measure the available wall space.'],
      ['Kedudukan sinki dan peralatan', 'Sink and appliance positions', 'Kongsi kedudukan sambungan dan peralatan utama.', 'Share the positions of connections and key appliances.'],
      ['Keperluan penyimpanan', 'Storage needs', 'Pertimbangkan barang kegunaan harian dan cara capaian.', 'Consider everyday items and how you access them.'],
      ['Kemasan dan aksesori', 'Finishes and accessories', 'Bincangkan kemasan dan aksesori yang sesuai.', 'Discuss finishes and accessories for your layout.'],
    ],
    note: ['Pilihan tertakluk kepada pengesahan.', 'Options are subject to confirmation.'],
    faq: [
      ['Apakah ukuran dapur yang diperlukan?', 'What kitchen measurements are needed?', 'Kongsi panjang dinding, tinggi ruang, kedudukan pintu, sinki dan peralatan jika diketahui.', 'Share wall length, room height and door, sink and appliance positions where known.'],
      ['Bolehkah susun atur disesuaikan?', 'Can the layout be adapted?', 'Pilihan susun atur boleh dibincangkan berdasarkan ukuran ruang dan keperluan penyimpanan.', 'We can discuss layouts based on the kitchen dimensions and storage needs.'],
    ],
    related: ['glass-mirrors', 'aluminium-windows'],
  },
  construction: {
    title: ['Construction Services', 'Perkhidmatan Pembinaan'],
    shortTitle: ['Construction', 'Pembinaan'],
    lead: ['Bincangkan skop kerja dan keperluan tapak anda.', 'Discuss the scope of work and the needs of your site.'],
    category: 'construction',
    options: [
      ['Keperluan Kerja', 'Work Requirements', 'Kongsi jenis kerja yang dirancang, termasuk ruang dan hasil yang diinginkan.', 'Share the proposed work, the space and the outcome you want.', 'layers'],
      ['Keadaan Tapak', 'Site Conditions', 'Maklumkan keadaan sedia ada dan akses untuk pertimbangan.', 'Tell us about the existing site and access conditions.', 'pin'],
      ['Jadual & Akses', 'Schedule & Access', 'Beritahu jangka masa pilihan dan akses ke tapak projek.', 'Share the preferred timeframe and how the site can be accessed.', 'calendar'],
    ],
    checks: [
      ['Lokasi projek', 'Project location', 'Nyatakan kawasan atau poskod.', 'Provide the area or postcode.'],
      ['Jenis premis', 'Premises type', 'Contohnya kediaman, kedai atau ruang komersial.', 'For example, a home, shop or commercial space.'],
      ['Ringkasan kerja', 'Work summary', 'Terangkan skop kerja yang diperlukan.', 'Describe the work you need.'],
      ['Gambar atau pelan', 'Photos or drawings', 'Kongsi gambar sedia ada atau pelan jika ada.', 'Share existing photos or drawings if available.'],
      ['Jangka masa pilihan', 'Preferred timeframe', 'Maklumkan anggaran tempoh pelaksanaan yang diinginkan.', 'Let us know the timeframe you have in mind.'],
    ],
    faq: [
      ['Bagaimana skop kerja disahkan?', 'How is the scope confirmed?', 'Skop, kesesuaian dan keperluan projek disemak sebelum sebut harga disediakan.', 'Scope, suitability and project requirements are reviewed before a quote is prepared.'],
      ['Bolehkah saya berkongsi pelan atau gambar?', 'Can I share drawings or photos?', 'Ya. Lampirkan gambar rujukan pada borang atau maklumkan bahawa anda mempunyai pelan.', 'Yes. Attach reference photos to the form or let us know you have drawings.'],
    ],
    related: ['aluminium-doors', 'wall-glazing'],
  },
};
const media = {
  'aluminium-doors': 'doors', 'aluminium-windows': 'windows', 'shower-screens': 'shower',
  'shopfront-glass': 'shopfront', 'wall-glazing': 'glazing', 'glass-mirrors': 'mirrors',
  'aluminium-cabinets': 'cabinets', construction: 'construction',
};
const pick = (c, [ms, en]) => c.t(ms, en);
const name = (c, key) => (products[key].shortTitle ?? products[key].title)[c.lang === 'ms' ? 1 : 0];
const location = 'Seri Kembangan, Selangor';
const phone = '019-727 5253';
const tel = 'tel:+60197275253';
const address = 'D-G-08, Pangsapuri Putra Raya, Jalan PP29, Taman Pinggiran Putra, Seksyen 2, 43300 Seri Kembangan, Selangor Darul Ehsan.';
const quoteLabel = c => c.t('Minta Sebut Harga', 'Request a Quote');
const waLabel = c => c.t('WhatsApp Kami', 'WhatsApp Us');
const homeLabel = c => c.t('Utama', 'Home');
const serviceLabel = c => c.t('Perkhidmatan', 'Services');
const projectLabel = c => c.t('Projek', 'Projects');
const privacyLabel = c => c.t('Notis Privasi', 'Privacy Notice');
const serviceQuote = (c, key) => key ? c.quote + '?service=' + key : c.quote;
const icon = (c, id) => c.icon(id);
const btn = (c, href, text, style = '', symbol = '') => `<a class="in-button ${style}" href="${href}">${text}${symbol ? icon(c, symbol) : ''}</a>`;
const whatsapp = (c, style = 'in-outline') => `<a class="in-button ${style}" href="${c.wa}">${icon(c, 'whatsapp')}${waLabel(c)}</a>`;
const quoteButton = (c, key) => btn(c, serviceQuote(c, key), quoteLabel(c), '', 'arrow');
const actions = (c, key, dark = false) => `<div class="in-actions">${quoteButton(c, key)}${whatsapp(c, dark ? 'in-outline in-outline-light' : 'in-outline')}</div>`;
const info = c => `<div class="in-info"><span>${icon(c, 'pin')}${location}</span><a href="${tel}">${icon(c, 'phone')}${phone}</a></div>`;
const figure = (c, file, alt, cls = '') => `<figure class="${cls}">${c.img(file, alt)}</figure>`;
const crumb = (c, label, parent) => `<nav class="in-crumb" aria-label="${c.t('Laluan navigasi', 'Breadcrumb')}" ><ol><li><a href="${c.url('home')}">${homeLabel(c)}</a></li>${parent ? `<li><a href="${c.url(parent[0])}">${parent[1]}</a></li>` : ''}<li aria-current="page">${label}</li></ol></nav>`;
const heading = text => `<h2 class="in-heading">${text}</h2>`;
const hero = (c, { title, lead, file = 'home-hero', alt = title, parent, label = title, eyebrow, body, key, showActions = true, showInfo = true, badge, style = '' }) => `<section class="in-hero ${style}"><div class="in-wrap in-hero-grid"><div class="in-hero-copy">${crumb(c, label, parent)}${eyebrow ? `<p class="in-eyebrow">${eyebrow}</p>` : ''}<h1${eyebrow ? '' : ' class="in-accent-title"'}>${title}</h1><p class="in-lead" data-edit="intro">${lead}</p>${body ? `<p data-edit="intro-detail">${body}</p>` : ''}${badge ? `<p class="in-badge">${badge}</p>` : ''}${showActions ? actions(c, key) : ''}${showInfo ? info(c) : ''}</div>${style==='in-compact-hero' ? `<div class="in-compact-media">${c.img(file,alt,'in-hero-photo')}</div>` : c.img(file,alt,'in-hero-photo')}</div></section>`;
const overviewAlt = c => c.t('Pintu dan tingkap aluminium hitam menghadap halaman hijau', 'Black aluminium doors and windows looking out to a leafy courtyard');
const stepsContent = [
  ['Kongsi Keperluan', 'Share Your Needs', 'Beritahu kami jenis produk dan keperluan ruang anda.', 'Tell us what you need and how you use the space.', 'clipboard'],
  ['Semakan & Sebut Harga', 'Review & Quote', 'Kami semak keperluan dan pilihan sebelum menyediakan sebut harga.', 'We review your requirements and options before preparing a quote.', 'document'],
  ['Pemasangan', 'Installation', 'Rancang pemasangan mengikut skop yang dipersetujui.', 'Plan installation around the agreed scope.', 'tools'],
];
const constructionSteps = [
  ['Kongsi Skop', 'Share Your Scope', 'Beritahu kami keperluan kerja dan keadaan tapak.', 'Tell us what work you need and about the site.', 'clipboard'],
  ['Semakan Keperluan', 'Review Requirements', 'Skop awal, akses dan keadaan tapak disemak.', 'We review the initial scope, access and site conditions.', 'document'],
  ['Cadangan & Sebut Harga', 'Proposal & Quote', 'Kami bincangkan cadangan mengikut skop projek.', 'We discuss a proposal based on the project scope.', 'tools'],
];
const process = (c, construction = false) => `<section class="in-band in-process"><div class="in-wrap">
  <h2>${construction ? c.t('Dari idea ke pelaksanaan', 'From idea to delivery') : c.t('Dari idea ke pemasangan', 'From idea to installation')}</h2>
  <ol>${(construction ? constructionSteps : stepsContent).map(([ms, en, bodyMs, bodyEn, symbol], i) => `<li>
    <span class="in-step-icon">${icon(c, symbol)}</span><div><h3><span class="in-step-number">0${i+1}</span> ${c.t(ms,en)}</h3><p>${c.t(bodyMs,bodyEn)}</p></div>
  </li>`).join('')}</ol></div></section>`;
const faqItems = (c, items, open = []) => items.map(([qMs,qEn,aMs,aEn], index) => `<details class="in-question"${open.includes(index) ? ' open' : ''}><summary>${c.t(qMs,qEn)}<span class="in-question-mark" aria-hidden="true"></span></summary><p>${c.t(aMs,aEn)}</p></details>`).join('');
const card = (c, { title, image, alt = title, copy, href, label, category, group, className = '' }) => {
  const content = `${c.img(image, alt, 'in-card-photo')}<div class="in-card-copy"><h3>${title}</h3>${category ? `<span class="in-card-category">${icon(c, 'tag')}${category}</span>` : ''}${copy ? `<p>${copy}</p>` : ''}${href ? `<span class="in-card-link">${label ?? ''}${icon(c, 'arrow')}</span>` : ''}</div>`;
  return `<article class="in-card ${className}"${group ? ` data-filter-item="${group}"` : ''}>${href ? `<a href="${href}">${content}</a>` : content}</article>`;
};
const serviceCard = (c, key, full = false) => card(c, {
  title: name(c, key), image: media[key] + '-hero', alt: '', href: c.url(key),
  copy: full ? pick(c, products[key].lead) : '', group: full ? products[key].category : '',
});
const cta = (c, title, description, { key, dark = false, centered = false, includeWa = true } = {}) => `<section class="${dark ? 'in-band' : ''}"><div class="in-wrap in-cta${centered ? ' in-centered' : ''}"><div>${heading(title)}${description ? `<p>${description}</p>` : ''}</div>${includeWa ? actions(c,key,dark) : quoteButton(c,key)}</div></section>`;
const iconCards = (c, items) => `<div class="in-grid in-grid-three">${items.map(([ms,en,bodyMs,bodyEn,symbol]) => `<article class="in-card in-icon-card">${icon(c,symbol)}<h3>${c.t(ms,en)}</h3><p>${c.t(bodyMs,bodyEn)}</p></article>`).join('')}</div>`;
const chips = (c, items) => `<div class="in-chips" role="group" aria-label="${c.t('Tapis mengikut kategori', 'Filter by category')}">${items.map(([value,ms,en],i) => `<button type="button" aria-pressed="${i === 0}" data-filter="${value}">${c.t(ms,en)}</button>`).join('')}</div>`;
const productPage = (c,key) => {
  const product = products[key];
  const title = c.lang === 'ms' ? product.title[1] : product.title[0];
  const slug = media[key];
  const construction = key === 'construction';
  return `<div class="inner-page in-product">
  ${hero(c, { title, lead: pick(c,product.lead), file: slug + '-hero', alt: name(c,key), parent: ['services',serviceLabel(c)], label: name(c,key), eyebrow: c.t('Perkhidmatan Kami', 'Our Services'), key })}
  <section class="in-wrap in-section">
    ${heading(construction ? c.t('Semakan skop projek', 'Reviewing the project scope') : c.t('Pilihan untuk ruang anda', 'Options for your space'))}
    ${construction ? iconCards(c,product.options) : `<div class="in-grid in-grid-three in-product-options">${product.options.map(([ms,en,bodyMs,bodyEn],i) => card(c,{ title:c.t(ms,en),image:slug + '-option-' + (i+1),alt:'',copy:c.t(bodyMs,bodyEn) })).join('')}</div>`}
  </section>
  <section class="in-wrap in-section in-consider in-grid in-grid-two">
    <div>${heading(construction ? c.t('Maklumat untuk pertanyaan', 'Information to share') : c.t('Apa yang perlu dipertimbangkan', 'What to consider'))}
    <ul class="in-checks">${product.checks.map(([ms,en,bodyMs,bodyEn]) => `<li>${icon(c,'check')} <span><strong>${c.t(ms,en)}</strong><span class="in-dash"> — </span>${c.t(bodyMs,bodyEn)}</span></li>`).join('')}</ul>
    ${product.note ? `<p class="in-note">${pick(c,product.note)}</p>` : ''}</div>
    ${figure(c,slug + '-detail',c.t('Perincian pilihan untuk ' + name(c,key), name(c,key) + ' detail'))}
  </section>
  ${process(c, construction)}
  <section class="in-wrap in-section in-faq-inline">${heading(c.t('Soalan Lazim', 'Frequently Asked Questions'))}<div>${faqItems(c,product.faq,construction ? [0] : [])}</div></section>
  <section class="in-wrap in-section in-related">${heading(c.t('Perkhidmatan berkaitan', 'Related services'))}
    <div class="in-grid in-grid-three">${product.related.map(item => serviceCard(c,item)).join('')}<aside class="in-related-aside"><h3>${c.t('Ingin Minta Sebut Harga?', 'Looking for a Quote?')}</h3><p>${c.t('Hubungi kami untuk membincangkan keperluan ruang anda.', 'Tell us what you need for your space.')}</p>${actions(c,key)}</aside></div>
  </section></div>`;
};
const servicesPage = c => `<div class="inner-page">
  ${hero(c, { title:c.t('Perkhidmatan Kami','Our Services'), label:serviceLabel(c),lead:c.t('Perkhidmatan aluminium, kaca dan pembinaan untuk rumah dan premis di Lembah Klang dan sekitarnya.','Aluminium, glass and construction services for homes and businesses across the Klang Valley and surrounding areas.'),file:'services-hero',alt:overviewAlt(c) })}
  <section class="in-wrap in-section" data-filter-group>
    ${chips(c,[['all','Semua','All'],['aluminium','Aluminium','Aluminium'],['glass','Kaca','Glass'],['construction','Pembinaan','Construction']])}
    <div class="in-grid in-grid-three in-service-directory">${Object.keys(products).map(key => serviceCard(c,key,true)).join('')}</div>
  </section>
  ${process(c)}
  ${cta(c,c.t('Belum pasti pilihan yang sesuai?', 'Unsure which option fits?'),c.t('Kongsi jenis ruang dan keperluan anda.','Share the type of space and what you need.'))}
  </div>`;
const workTypes = [
  ['Kediaman','Homes','Pintu, tingkap, skrin mandian, kaca dan kabinet untuk ruang kediaman.','Doors, windows, shower screens, glass and cabinets for home spaces.','home'],
  ['Ruang Niaga','Commercial Spaces','Fasad kaca, pintu aluminium dan panel kaca untuk ruang perniagaan.','Glass facades, aluminium doors and glass panels for business premises.','store'],
  ['Kerja Mengikut Keperluan','Work Around Your Needs','Pilihan dan skop kerja dibincangkan mengikut ruang serta kegunaannya.','We discuss options and scope based on your space and how you use it.','settings'],
];
const approach = [
  ['Fahami keperluan','Understand your needs','Kami semak tujuan projek dan jenis ruang anda.','We review what you need and where it will be used.'],
  ['Semak ruang & pilihan','Review the space & options','Kami bincangkan pilihan yang sesuai dengan bukaan dan kegunaan ruang.','We discuss options for the opening and how you use the space.'],
  ['Sediakan sebut harga','Prepare a quote','Sebut harga disediakan berdasarkan skop yang disemak.','The quote reflects the scope we have reviewed.'],
  ['Rancang pemasangan','Plan installation','Jadual dan keperluan pemasangan disahkan bersama anda.','We confirm scheduling and installation requirements with you.'],
];
const aboutPage = c => `<div class="inner-page in-about">
  ${hero(c,{title:c.t('Tentang BUSRA','About BUSRA'),label:c.t('Tentang Kami','About Us'),lead:c.t('Aluminium, kaca dan pembinaan untuk ruang anda.','Aluminium, glass and construction for your space.'),body:c.t('BUSRA Solution &amp; Services menawarkan penyelesaian aluminium dan kaca di Seri Kembangan, Selangor.','BUSRA Solution &amp; Services offers aluminium and glass solutions in Seri Kembangan, Selangor.'),file:'about-hero',alt:overviewAlt(c)})}
  <section class="in-wrap in-section">${heading(c.t('Apa yang kami lakukan','What we do'))}${iconCards(c,workTypes)}</section>
  <section class="in-wrap in-section in-grid in-grid-two in-approach">
    <div>${heading(c.t('Pendekatan kerja kami','How we work'))}<p>${c.t('Kami mulakan dengan memahami keperluan anda, menyemak pilihan yang sesuai dan merancang kerja mengikut skop projek.','We start by understanding your needs, reviewing your options and planning the work around the project scope.')}</p>
      ${figure(c,'about-windows',c.t('Tingkap aluminium hitam yang terbuka','An open black aluminium window'))}</div>
    <ol class="in-number-list">${approach.map(([ms,en,bodyMs,bodyEn],i) => `<li><span>0${i+1}</span><div><h3>${c.t(ms,en)}</h3><p>${c.t(bodyMs,bodyEn)}</p></div></li>`).join('')}</ol>
  </section>
  <section class="in-band"><div class="in-wrap in-credential">${icon(c,'document')}<div><h2>${c.t('Pendaftaran & Kelayakan','Registration & Qualifications')}</h2><p>${c.t('Maklumat pendaftaran boleh diminta semasa pertanyaan.','You can request registration information when you enquire.')}</p></div>${btn(c,c.url('contact'),c.t('Hubungi Kami','Contact Us'),'', 'arrow')}</div></section>
  <section class="in-tint"><div class="in-wrap in-section in-grid in-grid-two in-location"><div>${heading(c.t('Berpusat di Seri Kembangan','Based in Seri Kembangan'))}<p>${c.t('BUSRA Solution &amp; Services berpusat di Seri Kembangan, Selangor. Kami menyediakan perkhidmatan aluminium, kaca dan pembinaan di seluruh Lembah Klang dan kawasan sekitarnya.','BUSRA Solution &amp; Services is based in Seri Kembangan, Selangor. We provide aluminium, glass and construction services across the Klang Valley and surrounding areas.')}</p>${whatsapp(c)}${info(c)}</div>${figure(c,'about-shopfront',c.t('Fasad kaca dengan pintu aluminium','Glass frontage with aluminium doors'))}</div></section>
  ${cta(c,c.t('Bincangkan keperluan ruang anda.','Let’s discuss what you need for your space.'),'',{ centered:true })}
  </div>`;

const projects = [
  ['Pintu Lipat untuk Kediaman','Folding Doors for a Home','Pintu lipat aluminium untuk menghubungkan ruang dalam dengan halaman.','Aluminium folding doors that connect an interior with a courtyard.','doors','residential aluminium','project-detail'],
  ['Tingkap Casement','Casement Windows','Tingkap aluminium untuk ruang kediaman yang terang dan berudara.','Aluminium windows for a bright, ventilated residential space.','windows','residential aluminium','aluminium-windows'],
  ['Fasad Kaca Kedai','Glass Shopfront','Fasad kaca dengan bingkai gelap untuk ruang perniagaan moden.','Glass frontage with dark frames for a modern commercial space.','shopfront','commercial glass','shopfront-glass'],
  ['Skrin Mandian','Shower Screen','Pemisah kaca untuk menyusun kawasan mandi dengan kemas.','A glass screen that defines the shower area.','shower','residential glass','shower-screens'],
  ['Dinding Kaca','Glazed Wall','Panel kaca untuk membahagikan ruang dalaman dengan kemas.','Glass panels that define interior spaces.','mirrors','commercial glass','wall-glazing'],
  ['Kabinet Dapur Aluminium','Aluminium Kitchen Cabinets','Kabinet dapur untuk penyimpanan dengan susun atur yang praktikal.','Kitchen cabinets with a practical layout for storage.','cabinets','residential aluminium','aluminium-cabinets'],
];
const projectsPage = c => `<div class="inner-page in-projects">
  ${hero(c,{ title:c.t('Projek &amp; Inspirasi','Projects &amp; Inspiration'), label:projectLabel(c),lead:c.t('Terokai pilihan rekaan aluminium dan kaca untuk ruang anda.','Explore aluminium and glass design ideas for your space.'),file:'projects-hero',alt:name(c,'aluminium-doors'),showActions:false,showInfo:false,badge:c.t('Contoh paparan','Design examples') })}
  <section class="in-wrap in-section" data-filter-group>
    ${chips(c,[['all','Semua','All'],['residential','Kediaman','Residential'],['commercial','Komersial','Commercial'],['aluminium','Aluminium','Aluminium'],['glass','Kaca','Glass']])}
    <div class="in-grid in-grid-two in-project-directory">${projects.map(([ms,en,bodyMs,bodyEn,file,group,key]) => card(c, {
      title:c.t(ms,en),image:'project-' + file,alt:'',copy:c.t(bodyMs,bodyEn),group,href:c.url(key),
      label:key === 'project-detail' ? c.t('Lihat Butiran','View Details') : c.t('Lihat Perkhidmatan','View Service'),
      category:group.startsWith('residential') ? c.t('Kediaman','Residential') : c.t('Komersial','Commercial'),
    })).join('')}</div>
  </section>
  ${cta(c,c.t('Ada rekaan yang anda suka?','See a design you like?'),c.t('Rujuk contoh rekaan ini semasa membuat pertanyaan untuk mendapatkan pilihan yang sesuai dengan ruang anda.','Reference a design when you enquire so we can discuss options for your space.'),{ includeWa:false })}
  </div>`;
const projectDetailPage = c => {
  const title = c.t('Pintu Lipat Aluminium','Aluminium Folding Doors');
  const gallery = [
    ['project-detail-hero','Pintu lipat aluminium hitam terbuka ke halaman','Black aluminium folding doors opening onto a courtyard'],
    ['project-detail-1','Perincian sambungan bingkai dan landasan','Detail of the frame joint and track'],
    ['project-detail-2','Panel pintu yang dilipat','Folded door panels'],
    ['project-detail-3','Pandangan pintu dari dalam ruang','Interior view of the folding doors'],
  ];
  return `<div class="inner-page in-project-detail">
  <section class="in-wrap in-section">
    ${crumb(c,title,['projects',projectLabel(c)])}<p class="in-eyebrow">${c.t('Projek Contoh Rekaan','Project Design Example')}</p><h1>${title}</h1>
    <p class="in-badge">${c.t('Contoh paparan projek','Project design example')}</p><p class="in-lead">${c.t('Idea bukaan luas yang menghubungkan ruang dalaman dan halaman.','A wide opening that connects the interior and the courtyard.')}</p>
    <figure class="in-gallery" data-gallery>
      <a class="in-gallery-open" href="/media/${gallery[0][0]}.webp" data-gallery-open>${c.img(gallery[0][0],pick(c,gallery[0].slice(1)),'in-gallery-main')}</a>
      <div class="in-grid in-grid-three in-gallery-thumbs">${gallery.slice(1).map(([file,ms,en]) => `<a href="/media/${file}.webp" data-gallery-photo>${c.img(file,c.t(ms,en))}</a>`).join('')}</div>
    </figure>
    <dialog class="in-lightbox" data-gallery-dialog aria-label="${c.t('Gambar rekaan projek','Project design photo')}">
      <form method="dialog"><button type="submit" aria-label="${c.t('Tutup gambar','Close photo')}">${icon(c,'close')}</button></form>
      ${c.img(gallery[0][0],'')}
    </dialog>
  </section>
  <section class="in-wrap in-section in-grid in-grid-two in-design">
    <div>${heading(c.t('Keperluan Reka Bentuk','Design Requirements'))}<p>${c.t('Rekaan bukaan yang lebih luas bagi menghubungkan ruang dalaman dengan halaman, sambil memudahkan pergerakan antara kedua-dua ruang.','A wider opening links the interior with the courtyard and makes moving between the spaces easier.')}</p>
      ${heading(c.t('Cadangan Penyelesaian','Design Proposal'))}<p>${c.t('Pintu lipat aluminium dengan panel berkaca boleh dilipat ke tepi untuk membuka laluan. Bingkai gelap menyerlahkan garisan bukaan dan membenarkan cahaya masuk.','Glazed aluminium panels fold to one side to open the passage. The dark frames define the opening while the glass lets daylight in.')}</p></div>
    <aside class="in-summary">${heading(c.t('Butiran Rekaan','Design Details'))}
      <dl>
        <div><dt>${c.t('Jenis ruang','Space type')}</dt><dd>${c.t('Kediaman','Residential')}</dd></div>
        <div><dt>${serviceLabel(c)}</dt><dd><a href="${c.url('aluminium-doors')}">${name(c,'aluminium-doors')}</a></dd></div>
        <div><dt>${c.t('Pilihan','Option')}</dt><dd>${c.t('Pintu Lipat','Folding Doors')}</dd></div>
        <div><dt>${c.t('Kemasan visual','Visual finish')}</dt><dd>${c.t('Bingkai gelap','Dark frames')}</dd></div>
      </dl><span class="in-badge">${c.t('Contoh rekaan','Design example')}</span>
    </aside>
  </section>
  ${cta(c,c.t('Mahukan pilihan seperti ini?','Looking for an option like this?'),'',{ key:'aluminium-doors',dark:true,centered:true })}
  <section class="in-wrap in-section in-related">${heading(c.t('Perkhidmatan berkaitan','Related services'))}<div class="in-grid in-grid-two">${serviceCard(c,'aluminium-windows')}${serviceCard(c,'glass-mirrors')}</div>
  <a class="in-back" href="${c.url('projects')}">← ${c.t('Kembali ke Projek','Back to Projects')}</a></section>
  </div>`;
};
const faqGroups = [
  ['services','Perkhidmatan','Services','layers',[
    ['Apakah kawasan perkhidmatan BUSRA?','Which areas does BUSRA serve?','BUSRA meliputi Lembah Klang dan kawasan sekitarnya. Kami berpusat di Seri Kembangan, Selangor.','BUSRA serves the Klang Valley and surrounding areas from its base in Seri Kembangan, Selangor.'],
  ]],
  ['quotes','Sebut Harga','Quotes','document',[
    ['Apakah maklumat untuk meminta sebut harga?','What information do I need to request a quote?','Kongsi jenis perkhidmatan, lokasi, ringkasan keperluan dan gambar jika ada.','Share the service you need, project location, a summary and photos if available.'],
    ['Bolehkah rekaan dibuat mengikut ukuran?','Can designs be made to measure?','Pilihan boleh dibincangkan berdasarkan ukuran, bentuk dan kegunaan ruang anda.','We can discuss options based on the dimensions, shape and use of the space.'],
  ]],
  ['installation','Pemasangan','Installation','tools',[
    ['Bagaimana ukuran dan keadaan tapak disemak?','How are dimensions and site conditions reviewed?','Kongsi ukuran awal dan gambar. Kami akan membincangkan kaedah semakan yang sesuai untuk projek.','Share initial measurements and photos. We will discuss a suitable way to review the site.'],
    ['Bilakah jadual pemasangan ditentukan?','When is installation scheduled?','Jadual dibincangkan selepas skop, keperluan tapak dan ketersediaan disemak.','We discuss scheduling after reviewing the scope, site requirements and availability.'],
    ['Bagaimana terma bayaran disahkan?','How are payment terms confirmed?','Semak terma yang dinyatakan dalam sebut harga atau dokumen kerja sebelum bersetuju.','Review the terms on your quote or work documents before accepting.'],
    ['Apakah terma waranti yang ditawarkan?','What warranty terms are offered?','Terma yang terpakai perlu disahkan dalam sebut harga atau dokumen kerja.','Confirm any applicable terms in the quote or work documents.'],
  ]],
  ['care','Penjagaan','Care','settings',[
    ['Bagaimana menjaga aluminium dan kaca?','How do I care for aluminium and glass?','Gunakan kain lembut dan produk pembersih yang sesuai dengan kemasan. Tanya cara penjagaan khusus bagi produk anda.','Use a soft cloth and a cleaner suitable for the finish. Ask for care instructions for your product.'],
  ]],
];
export function faqSchema(t) {
  return {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity:faqGroups.flatMap(([, , , , items]) => items.map(([ms,en,answerMs,answerEn]) => ({
      '@type':'Question', name:t(ms,en),
      acceptedAnswer:{'@type':'Answer', text:t(answerMs,answerEn)}
    })))
  };
}
const faqPage = c => `<div class="inner-page in-faq">
  ${hero(c,{title:c.t('Soalan Lazim','Frequently Asked Questions'),lead:c.t('Maklumat awal sebelum anda berbincang tentang projek.','What to know before discussing your project.'),file:'faq-hero',alt:c.t('Tingkap aluminium dengan tanaman di tepi tingkap','Aluminium windows with plants beside them'),eyebrow:c.t('Soalan Lazim','FAQs')})}
  <section class="in-wrap in-section in-index-layout">
    <nav class="in-index" aria-label="${c.t('Kategori soalan','FAQ categories')}">${faqGroups.map(([id,ms,en,symbol]) => `<a href="#faq-${id}">${icon(c,symbol)}${c.t(ms,en)}${icon(c,'arrow')}</a>`).join('')}</nav>
    <div>${faqGroups.map(([id,ms,en,,items]) => `<section id="faq-${id}" class="in-faq-group" aria-label="${c.t(ms,en)}">${faqItems(c,items,id === 'services' || id === 'quotes' ? [0] : id === 'installation' ? [3] : [])}</section>`).join('')}</div>
  </section>
  <section class="in-band in-faq-help"><div class="in-wrap in-centered"><h2>${c.t('Masih ada pertanyaan?','Still have a question?')}</h2><p>${c.t('Hubungi kami untuk mendapatkan maklumat lanjut tentang perkhidmatan kami.','Contact us to learn more about our services.')}</p><div class="in-actions">${whatsapp(c)}${btn(c,tel,phone,'in-outline in-outline-light','phone')}</div></div></section></div>`;
const field = (label, control, cls = '') => `<label class="in-field ${cls}"><span>${label}</span>${control}</label>`;
const optional = (c, ms, en) => c.t(ms + ' (pilihan)', en + ' (optional)');
const submit = (c, label) => `<p data-quote-status role="status"></p><button class="in-button in-submit" type="submit">${label}${icon(c,'arrow')}</button>`;
const contactPage = c => {
  const title = c.t('Hubungi Kami','Contact Us');
  // Google recognises the complex as a place; adding the unit number removes its pin.
  const mapPlace = encodeURIComponent('Pangsapuri Putra Raya, Seri Kembangan, Selangor');
  const mapQuery = 'https://www.google.com/maps/search/?api=1&amp;query=' + mapPlace;
  return `<div class="inner-page in-contact">
  ${hero(c,{title,lead:c.t('Kongsi keperluan aluminium, kaca atau pembinaan anda.','Share your aluminium, glass or construction requirements.'),style:'in-compact-hero',file:'contact-hero',alt:c.t('Bangunan dua tingkat dengan fasad kaca','Two-storey building with a glass frontage'),showInfo:false})}
  <section class="in-wrap in-section in-contact-options in-grid in-grid-three" aria-label="${title}">
    <article class="in-card">${icon(c,'phone')}<h2>${c.t('Telefon','Phone')}</h2><p><strong>${phone}</strong></p>${btn(c,tel,c.t('Hubungi Sekarang','Call Now'),'', 'arrow')}</article>
    <article class="in-card">${icon(c,'whatsapp')}<h2>WhatsApp</h2><p>${c.t('Bincangkan keperluan anda.','Discuss what you need.')}</p>${whatsapp(c)}</article>
    <article class="in-card">${icon(c,'pin')}<h2>${c.t('Lokasi','Location')}</h2><p>${location}</p></article>
  </section>
  <section class="in-wrap in-section in-grid in-grid-two in-address">
    <div>${heading(c.t('Alamat Kami','Our Address'))}<address>${icon(c,'pin')}${address}</address><p>${c.t('Hubungi kami sebelum merancang kunjungan.','Contact us before planning a visit.')}</p>${btn(c,mapQuery,c.t('Buka di Google Maps','Open in Google Maps'),'', 'arrow')}</div>
    <figure><iframe class="in-google-map" title="${c.t('Peta Google untuk Pangsapuri Putra Raya','Google map of Pangsapuri Putra Raya')}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${mapPlace}&amp;t=m&amp;z=17&amp;hl=${c.lang}&amp;output=embed"></iframe><figcaption>${c.t('Pin menunjukkan kompleks Pangsapuri Putra Raya. Unit BUSRA ialah D-G-08.','The pin marks the Pangsapuri Putra Raya complex. BUSRA is in unit D-G-08.')}</figcaption></figure>
  </section>
  <section class="in-wrap in-section in-coverage">${heading(c.t('Kawasan Perkhidmatan','Service Areas'))}<p>${c.t('Kami meliputi Lembah Klang dan kawasan sekitarnya. Beritahu kami kawasan atau poskod projek anda semasa meminta sebut harga.','We serve the Klang Valley and surrounding areas. Include your project area or postcode when requesting a quote.')}</p></section>
  <section class="in-wrap in-section in-grid in-grid-two in-contact-form">
    ${figure(c,'home-hero',overviewAlt(c))}
    <div class="in-tint">${heading(c.t('Ceritakan projek anda','Tell us about your project'))}
    <form data-quote method="post" action="/api/quotes" enctype="multipart/form-data">
      <input name="service" type="hidden" value="other">
      ${field(c.t('Nama Penuh','Full Name') + ' *','<input name="name" autocomplete="name" maxlength="120" required>')}
      ${field(c.t('No. Telefon','Phone Number') + ' *','<input type="tel" name="phone" autocomplete="tel" maxlength="40" required>')}
      ${field(c.t('Lokasi Projek','Project Location') + ' *','<input name="area" maxlength="160" required>')}
      ${field(c.t('Ringkasan Keperluan','Project Summary') + ' *','<textarea name="description" rows="3" maxlength="3000" required></textarea>')}
      ${submit(c,quoteLabel(c))}
      <p class="in-small">${c.t('Maklumat anda digunakan untuk mengurus pertanyaan ini. Baca','We use your information to manage this enquiry. Read the')} <a href="${c.url('privacy')}">${privacyLabel(c)}</a>.</p>
    </form></div>
  </section>
  <p class="in-wrap in-visit">${icon(c,'calendar')}${c.t('Untuk urusan lawatan, sahkan masa terlebih dahulu.','Please arrange a time with us before visiting.')}</p></div>`;
};
const quoteSteps = [
  ['Semakan maklumat','Review information','Kami akan meneliti butiran keperluan yang anda berikan.','We review the project details you share.','clipboard'],
  ['Perbincangan keperluan','Discuss requirements','Kami boleh menghubungi anda untuk membincangkan butiran lanjut.','We may contact you to discuss the details.','phone'],
  ['Cadangan & sebut harga','Proposal & quote','Kami bincangkan cadangan berdasarkan skop yang disemak.','We discuss options based on the scope we review.','layers'],
];
const stepList = (c, items) => `<ol class="in-icon-list">${items.map(([ms,en,bodyMs,bodyEn,symbol]) => `<li>${icon(c,symbol)}<div><h3>${c.t(ms,en)}</h3><p>${c.t(bodyMs,bodyEn)}</p></div></li>`).join('')}</ol>`;
const select = (name, placeholder, options, required = false) => `<select name="${name}"${required ? ' required' : ''}><option value="">${placeholder}</option>${options.map(([value,label]) => `<option value="${value}">${label}</option>`).join('')}</select>`;
const quotePage = c => {
  const {t} = c;
  const label = quoteLabel(c);
  return `<div class="inner-page in-quote">
    ${hero(c,{title:label,lead:t('Kongsi keperluan anda supaya kami dapat membuat semakan awal.','Share what you need so we can make an initial review.'),body:t('Medan bertanda * diperlukan.','Fields marked * are required.'),style:'in-compact-hero',file:'quote-hero',alt:t('Peralatan bengkel di atas bingkai aluminium','Workshop tools on an aluminium frame'),eyebrow:label,showActions:false,showInfo:false})}
    <div class="in-wrap in-section in-quote-layout">
      <form data-quote method="post" action="/api/quotes" enctype="multipart/form-data">
        <fieldset><legend>${heading(t('Maklumat Anda','Your Details'))}</legend><div class="in-fields">
          ${field(t('Nama Penuh','Full Name') + ' *','<input name="name" autocomplete="name" maxlength="120" required>')}
          ${field(t('No. Telefon','Phone Number') + ' *','<input type="tel" name="phone" autocomplete="tel" maxlength="40" required>')}
          ${field(optional(c,'E-mel','Email'),'<input type="email" name="email" autocomplete="email" maxlength="180">','in-field-wide')}
        </div></fieldset>
        <fieldset><legend>${heading(t('Butiran Projek','Project Details'))}</legend><div class="in-fields">
          <div>${field(t('Jenis Perkhidmatan','Service Type') + ' *',select('service',t('Pilih perkhidmatan','Choose a service'),[...Object.keys(products).map(key => [key,name(c,key)]),['other',t('Belum Pasti','Not Sure Yet')]],true))}<p class="in-small">${t('Anda boleh pilih Belum Pasti.','You can choose Not Sure Yet.')}</p></div>
          ${field(t('Kawasan / Poskod','Area / Postcode') + ' *','<input name="area" maxlength="160" required>')}
          ${field(optional(c,'Jenis Premis','Premises Type'),select('property',t('Pilih jenis premis','Choose premises type'),[['residential',t('Kediaman','Residential')],['commercial',t('Komersial','Commercial')],['other',t('Lain-lain','Other')]]))}
          ${field(optional(c,'Anggaran Ukuran','Approximate Dimensions'),`<input name="dimensions" maxlength="250" placeholder="${t('Cth. 3 m × 2.1 m','E.g. 3 m × 2.1 m')}">`)}
          ${field(optional(c,'Jangka Masa Pilihan','Preferred Timeframe'),`<input name="timeframe" maxlength="250" placeholder="${t('Cth. bulan hadapan','E.g. next month')}">`)}
          ${field(t('Ringkasan Keperluan','Project Summary') + ' *',`<textarea name="description" rows="5" maxlength="3000" placeholder="${t('Terangkan produk, jenis ruang atau kerja yang diperlukan.','Describe the product, space or work you need.')}" required></textarea>`,'in-field-wide')}
        </div></fieldset>
        <fieldset><legend>${heading(optional(c,'Gambar Rujukan','Reference Photos'))}</legend>
          <div class="in-upload">
            ${icon(c,'image')}<p>${t('Muat naik gambar rujukan projek anda','Upload reference photos for your project')}</p>
            <input class="in-photo-input" name="photos" id="quote-photos" type="file" accept="image/jpeg,image/png,image/webp" multiple aria-describedby="photo-limit photo-selection">
            <label for="quote-photos" class="in-button in-outline">${t('Pilih Gambar','Choose Photos')}</label>
            <p class="in-small" id="photo-limit">${t('Maksimum 5 fail · JPG, PNG, WebP · 5 MB setiap fail','Up to 5 files · JPG, PNG, WebP · 5 MB per file')}</p>
            <p class="in-small" id="photo-selection" aria-live="polite"></p>
          </div>
        </fieldset>
        <p class="in-small">${t('Maklumat anda digunakan untuk mengurus pertanyaan ini.','We use your information to manage this enquiry.')} <a href="${c.url('privacy')}">${t('Baca Notis Privasi','Read the Privacy Notice')}</a></p>
        ${submit(c,t('Hantar Permintaan','Send Request'))}
      </form>
      <aside class="in-tint in-quote-aside">
        ${heading(t('Apa yang berlaku seterusnya?','What happens next?'))}
        ${stepList(c,quoteSteps)}
        ${heading(t('Lebih mudah melalui WhatsApp?','Prefer WhatsApp?'))}
        <p>${t('Anda juga boleh hubungi kami melalui WhatsApp untuk berbincang.','You can also contact us on WhatsApp to discuss your project.')}</p>
        ${whatsapp(c)}${info(c)}
      </aside>
    </div></div>`;
};
const confirmationSteps = [
  ['Semakan maklumat projek','Review project information','Kami akan menyemak maklumat dan keperluan projek anda.','We review the information and requirements you shared.','clipboard'],
  ['Hubungan untuk butiran lanjut','Follow up for details','Kami boleh menghubungi anda untuk membincangkan butiran projek dengan lebih lengkap.','We may contact you to discuss your project in more detail.','phone'],
  ['Perbincangan cadangan dan sebut harga','Discuss options and a quote','Kami bincangkan cadangan berdasarkan keperluan anda.','We discuss options based on your requirements.','layers'],
];
const confirmationPage = c => {
  const {t} = c;
  return `<div class="inner-page in-confirmation">
    <section class="in-wrap in-section">${crumb(c,t('Pengesahan','Confirmation'),['request-quote',quoteLabel(c)])}
    <div class="in-success in-centered" data-quote-confirmation data-success-title="${t('Permintaan Anda Telah Diterima','Your Request Has Been Received')}">
      <div class="in-success-seal" data-confirmed hidden>${icon(c,'check')}</div>
      <h1 class="in-heading" data-confirmation-title>${t('Pengesahan Permintaan','Request Confirmation')}</h1>
      <p data-confirmed hidden>${t('Terima kasih kerana menghubungi BUSRA Solution &amp; Services.','Thank you for contacting BUSRA Solution &amp; Services.')}</p>
      <div class="in-reference in-tint" data-confirmed hidden><strong>${t('Nombor rujukan','Reference number')}: <span data-quote-reference></span></strong><p>${t('Simpan nombor ini untuk rujukan anda.','Keep this number for your records.')}</p></div>
      <div class="in-confirm-next" data-confirmed hidden>${heading(t('Langkah Seterusnya','Next Steps'))}${stepList(c,confirmationSteps)}</div>
      <p data-unconfirmed>${t('Nombor rujukan akan dipaparkan di sini selepas permintaan berjaya dihantar.','Your reference number will appear here after a successful submission.')}</p>
      <div data-unconfirmed>${quoteButton(c)}</div>
      <div class="in-actions" data-confirmed hidden>${btn(c,c.url('home'),t('Kembali ke Utama','Back to Home'),'', 'arrow')}${whatsapp(c)}</div>
      <a class="in-success-phone" href="${tel}">${icon(c,'phone')}${phone}</a>
    </div></section>
    <section class="in-wrap in-section in-grid in-grid-two in-confirm-links" aria-label="${t('Teroka BUSRA','Explore BUSRA')}">
      <a class="in-card" href="${c.url('services')}" >${heading(t('Lihat Perkhidmatan','Explore Services'))}<p>${t('Terokai rangkaian aluminium, kaca dan pembinaan kami.','Explore aluminium, glass and construction services across the Klang Valley and surrounding areas.')}</p>${figure(c,'about-hero',overviewAlt(c))}${icon(c,'arrow')}</a>
      <a class="in-card" href="${c.url('projects')}" >${heading(t('Terokai Inspirasi','Explore Inspiration'))}<p>${t('Lihat contoh rekaan untuk merancang ruang anda.','Browse examples while planning your space.')}</p>${figure(c,'shopfront-hero',name(c,'shopfront-glass'))}${icon(c,'arrow')}</a>
    </section></div>`;
};
const privacySections = [
  ['information','Maklumat yang Dikongsi','Information You Share','Nama, nombor telefon, e-mel jika diberikan, lokasi projek, ringkasan keperluan dan gambar yang dimuat naik.','Your name, phone number, email if provided, project location, project summary and any uploaded photos.'],
  ['purpose','Tujuan Penggunaan','How We Use Information','Maklumat digunakan untuk mengurus pertanyaan, memahami keperluan projek dan menyediakan komunikasi berkaitan sebut harga.','We use the information to manage enquiries, understand project requirements and communicate about quotes.'],
  ['access','Akses kepada Maklumat','Access to Information','Kakitangan BUSRA yang diberi akses boleh menyemak pertanyaan dan memuat turun gambar. Laman menggunakan pangkalan data Cloudflare D1 dan storan peribadi Cloudflare Workers KV. Pemberitahuan kakitangan, jika diaktifkan, mengandungi nombor rujukan pertanyaan sahaja.','Authorised BUSRA staff can review enquiries and download photos. This website uses Cloudflare D1 and private Cloudflare Workers KV storage. Staff alerts, when enabled, contain only the enquiry reference.'],
  ['retention','Tempoh Penyimpanan','Retention','Tempoh simpanan dan kaedah pemadaman akan dinyatakan selepas dasar syarikat disahkan.','The notice will set out retention periods and deletion methods after the company confirms its policy.'],
  ['choices','Pilihan Anda','Your Choices','Hubungi kami untuk pertanyaan atau pembetulan maklumat yang telah dikongsi.','Contact us with questions or to correct information you shared.'],
  ['contact','Hubungi BUSRA','Contact BUSRA'],
  ['technology','Analitik & Teknologi Laman','Analytics & Website Technology','Laman menyimpan jumlah harian klik telefon, klik WhatsApp dan permintaan sebut harga yang diterima mengikut bahasa. Kiraan ini dikumpulkan oleh laman dan tidak menyimpan identiti pelawat. Halaman Hubungi Kami memuatkan peta daripada Google yang menerima permintaan pelayar anda. Google Maps dan WhatsApp menggunakan notis privasi masing-masing.','This website records daily totals for phone clicks, WhatsApp clicks and accepted quote requests by language. The website collects these totals without storing visitor identities in the counts. The contact page loads a map from Google, which receives your browser request. Google Maps and WhatsApp each have their own privacy notice.'],
];
const privacyPage = c => {
  const {t} = c;
  return `<div class="inner-page in-privacy"><div class="in-wrap">
    ${crumb(c,privacyLabel(c))}<h1 class="in-accent-title">${privacyLabel(c)}</h1>
    <p class="in-badge" data-edit="privacy-status">${t('Draf untuk semakan','Draft for review')}</p>
    <p data-edit="intro">${t('Notis ini menerangkan penggunaan maklumat yang dikongsi melalui pertanyaan laman web.','This notice explains how we use information shared through website enquiries.')}</p>
    <div class="in-section in-index-layout">
      <nav class="in-index in-contents" aria-labelledby="privacy-contents"><h2 id="privacy-contents" class="in-heading">${t('Kandungan','Contents')}</h2>
      <ol>${privacySections.slice(0,6).map(([id,ms,en]) => `<li><a href="#privacy-${id}">${t(ms,en)}</a></li>`).join('')}</ol><a href="#privacy-technology">${t('Analitik & Teknologi Laman','Analytics & Website Technology')}</a></nav>
      <article class="in-privacy-article">${privacySections.map(([id,ms,en,bodyMs,bodyEn],i) => `<section id="privacy-${id}" class="${i === 6 ? 'in-privacy-last' : 'in-card'}">${heading((i < 6 ? (i+1) + '. ' : '') + t(ms,en))}${id === 'contact' ? `<address><span>${icon(c,'document')} BUSRA Solution &amp; Services</span><a href="${tel}">${icon(c,'phone')} ${phone}</a><span>${icon(c,'pin')} ${location}</span></address>` : `<p data-edit="privacy-${id}">${t(bodyMs,bodyEn)}</p>`}</section>`).join('')}</article>
    </div></div></div>`;
};
export const pages = {
  about:{title:['About BUSRA','Tentang BUSRA'],description:['Learn about BUSRA Solution & Services in Seri Kembangan.','Kenali BUSRA Solution & Services di Seri Kembangan.'],render:aboutPage},
  services:{title:['Our Services','Perkhidmatan Kami'],description:['Explore aluminium, glass and construction services across the Klang Valley and surrounding areas.','Terokai perkhidmatan aluminium, kaca dan pembinaan di Lembah Klang dan sekitarnya.'],render:servicesPage},
  ...Object.fromEntries(Object.entries(products).map(([key,item]) => [key,{title:item.title,description:[...item.lead].reverse(),render:c => productPage(c,key)}])),
  projects:{title:['Projects & Inspiration','Projek & Inspirasi'],description:['Explore design examples for aluminium and glass.','Terokai contoh rekaan aluminium dan kaca.'],render:projectsPage},
  'project-detail':{title:['Aluminium Folding Doors','Pintu Lipat Aluminium'],description:['An aluminium folding door design example.','Contoh rekaan pintu lipat aluminium.'],render:projectDetailPage},
  faq:{title:['Frequently Asked Questions','Soalan Lazim'],description:['Answers about services, quotes, installation and care.','Jawapan tentang perkhidmatan, sebut harga, pemasangan dan penjagaan.'],render:faqPage},
  contact:{title:['Contact Us','Hubungi Kami'],description:['Contact BUSRA in Seri Kembangan for projects in the Klang Valley and surrounding areas.','Hubungi BUSRA di Seri Kembangan untuk projek di Lembah Klang dan kawasan sekitarnya.'],render:contactPage},
  'request-quote':{title:['Request a Quote','Minta Sebut Harga'],description:['Share your project details with BUSRA.','Kongsi butiran projek anda dengan BUSRA.'],render:quotePage},
  'quote-confirmation':{title:['Request Confirmation','Pengesahan Permintaan'],description:['Confirmation and next steps for a BUSRA enquiry.','Pengesahan dan langkah seterusnya untuk pertanyaan BUSRA.'],render:confirmationPage},
  privacy:{title:['Privacy Notice','Notis Privasi'],description:['Learn how website enquiry information is used.','Ketahui penggunaan maklumat pertanyaan laman web.'],render:privacyPage},
};


