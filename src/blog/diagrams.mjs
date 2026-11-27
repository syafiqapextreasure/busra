// Front elevations and plan views accompany the adjacent text in each language.
const art = {
  office: '<rect x="12" y="12" width="264" height="78"/><path d="M90 12v48H12m160-48v48h104M42 12v7m10-7v7m165-7v7m10-7v7"/><g class="flow"><path d="M25 75h204m-11-7 12 7-12 7"/></g>',
  track: '<path d="M12 66h264M12 76h264M28 53V18h196v35H28z"/><circle cx="55" cy="55" r="11"/><circle cx="199" cy="55" r="11"/><g class="flow"><path d="m126 65 5-7 5 7m-10-26h47m-9-6 10 6-10 6"/></g>',
  partition: '<rect x="18" y="19" width="236" height="63"/><path d="M76 19v63m60-63v63m56-63v63"/><path class="flow" d="M196 81V28h48v53m-9-29v9M18 9h236m-236-4v8m236-8v8"/>',
  'kitchen-window':'<rect x="12" y="20" width="72" height="62"/><rect x="108" y="20" width="72" height="62"/><rect x="204" y="20" width="72" height="62"/><g class="flow"><path d="m15 22 49 12v34L15 80zm96 4h31v49h-31zm35 22h23m-8-6 9 6-9 6m46 25 11-51 10 47 11-50"/></g>',
  patio:'<path d="M15 31h105m43 0h110M15 72h105m43 0h110"/><g class="flow"><path d="m18 32 10 32 10-32 10 32 10-32M165 37h49m-49 8h49m16 11h32m-9-6 10 6-10 6"/></g>',
  bath:'<path d="M18 14h101v73H18zM161 14h101v73H161z"/><g class="flow"><path d="M20 64h48v21m0-42a42 42 0 0 1 42 42m-42-42v42M165 64h49m-28 8h50m8-26h-34m8-6-9 6 9 6"/></g>',
  cabinet:'<path d="M18 51h248v35H18zm0-35h154v28H18zM78 52v33m64-33v33m61-33v33M68 16v28m54-28v28"/><g class="flow"><path d="M18 7h154M18 94h248"/></g><g class="units"><text x="195" y="35">5 ft</text><text x="211" y="78">8 ft</text></g>',
  facade:'<rect x="18" y="22" width="249" height="61"/><path d="M18 38h249m-159 0v45m65-45v45"/><g class="flow"><path d="M118 82V44h45v38m-10-19v8M18 12h250m-250-5v10m250-10v10M279 22v60"/></g>',
  mirror:'<rect x="73" y="12" width="136" height="54" rx="4"/><path d="M45 78h192m-157 0q20 29 67 11 6-3 12-11m-41 0V65q0-8 9-8"/><g class="flow"><path d="M55 15v47m-5-40 5-8 5 8m-5 41 5-7m-5 7-5-7m168-18h33m-7-5 8 5-8 5"/></g>',
  leak:'<rect x="37" y="11" width="204" height="74"/><path d="M44 18h93v58H44zm100 0h89v58h-89zM30 91h220"/><g class="flow"><path d="M64 35q-10 13 0 14 10-1 0-14zm30 8q-8 11 0 12 8-1 0-12zm80 33h32l9 8m-4-10 5 11-11-1M234 27q12 8 17 17"/></g>'
};
export function diagram(id) {
  return '<svg class="guide-drawing" viewBox="0 0 290 102" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+art[id]+'</svg>';
}
