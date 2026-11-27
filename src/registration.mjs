const number = '0120170706-SL190147';

function mark(t) {
  return `<figure class="cidb-mark"><img src="/media/cidb-contractor-${t('ms','en')}.webp" width="267" height="167" alt="${t('Kontraktor berdaftar CIDB Malaysia','CIDB Malaysia registered contractor')}"><figcaption>${number}</figcaption></figure>`;
}

export function registrationSummary({t,url}) {
  return `<div class="registration-summary">${mark(t)}<div><strong>${t('Kontraktor CIDB G2','CIDB G2 contractor')}</strong>
    <a href="${url('about')}#pendaftaran">${t('Sijil SPKK &amp; STB','SPKK &amp; STB certificates')}</a>
    <a href="${url('about')}#mof">${t('Pertanyaan MOF','MOF enquiries')}</a></div></div>`;
}

export function registrationDetails({t,url}) {
  return `<section id="pendaftaran" class="registration-details"><div class="in-wrap in-section">
    <header>${mark(t)}<div><h2>${t('Pendaftaran & kelayakan','Registration & qualifications')}</h2>
      <p>${t('BUSRA berdaftar dengan CIDB sebagai kontraktor Gred G2 sejak 6 Julai 2017. Tempoh sah pendaftaran yang tertera pada profil syarikat berakhir pada 31 Mac 2029.', 'BUSRA has been registered with CIDB as a Grade G2 contractor since 6 July 2017. The company profile lists the registration as valid through 31 March 2029.')}</p></div></header>
    <dl><div><dt>SPKK</dt><dd>${t('Sijil Perolehan Kerja Kerajaan untuk perolehan kerja pembinaan kerajaan.', 'Government Works Procurement Certificate for government construction tenders.')}</dd></div>
      <div><dt>STB</dt><dd>${t('Sijil Taraf Bumiputera bagi kontraktor kerja.', 'Bumiputera Status Certificate for works contractors.')}</dd></div>
      <div id="mof"><dt>MOF</dt><dd>${t('Untuk urusan pembekalan atau perkhidmatan dengan Kementerian Kewangan Malaysia, ', 'For Ministry of Finance Malaysia supply or service procurement enquiries, ')}<a href="${url('contact')}">${t('hubungi BUSRA bagi menyemak butiran pendaftaran dan kod bidang.', 'contact BUSRA to confirm registration details and field codes.')}</a></dd></div></dl>
    </div></section>`;
}
