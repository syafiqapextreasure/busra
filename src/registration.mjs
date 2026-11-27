const registrationNumber = '0120170706-SL190147';
const logo = '<img class="cidb-logo" src="/media/cidb-malaysia.webp" width="585" height="164" alt="CIDB Malaysia">';

export function registrationSummary({t,url}) {
  return `<div class="registration-summary">
    <div class="reg-logo-panel">${logo}</div>
    <div class="reg-summary-copy"><strong>${t('Kontraktor CIDB G2','CIDB G2 contractor')}</strong>
      <span class="reg-number">${registrationNumber}</span>
      <div class="reg-short-list"><a href="${url('about')}#pendaftaran">${t('Sijil SPKK &amp; STB','SPKK &amp; STB certificates')}</a><span>MOF</span></div>
    </div>
  </div>`;
}

export function registrationDetails({t,icon}) {
  const records = [
    ['file-text','SPKK',t('Sijil Perolehan Kerja Kerajaan','Government Works Procurement Certificate')],
    ['shield','STB',t('Sijil Taraf Bumiputera bagi kontraktor kerja','Bumiputera Status Certificate for works contractors')],
    ['landmark','MOF',t('Kementerian Kewangan Malaysia','Ministry of Finance Malaysia')]
  ];
  return `<section id="pendaftaran" class="registration-details" aria-labelledby="registration-title">
    <div class="in-wrap">
      <h2 id="registration-title">${t('Pendaftaran &amp; kelayakan','Registration &amp; qualifications')}</h2>
      <div class="registration-layout">
        <div class="reg-record"><div class="reg-record-head">${logo}<strong>${t('Gred G2','Grade G2')}</strong></div>
          <dl class="reg-facts">
            <div><dt>${t('No. pendaftaran CIDB','CIDB registration number')}</dt><dd>${registrationNumber}</dd></div>
            <div><dt>${t('Berdaftar sejak','Registered since')}</dt><dd>${t('6 Julai 2017','6 July 2017')}</dd></div>
            <div><dt>${t('Sah sehingga','Valid through')}</dt><dd>${t('31 Mac 2029','31 March 2029')}</dd></div>
          </dl>
        </div>
        <dl class="reg-definitions">${records.map(([symbol,short,full]) => `<div${short==='MOF'?' id="mof"':''}><dt><span class="reg-icon">${icon(symbol)}</span>${short}</dt><dd>${full}</dd></div>`).join('')}</dl>
      </div>
    </div>
  </section>`;
}
