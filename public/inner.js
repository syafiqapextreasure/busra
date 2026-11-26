for (const group of document.querySelectorAll('[data-filter-group]')) {
  const filters = group.querySelectorAll('[data-filter]');
  const items = group.querySelectorAll('[data-filter-item]');
  for (const filter of filters) {
    filter.addEventListener('click', () => {
      for (const choice of filters) choice.setAttribute('aria-pressed', String(choice === filter));
      for (const item of items) {
        item.hidden = filter.dataset.filter !== 'all' && !item.dataset.filterItem.split(' ').includes(filter.dataset.filter);
      }
    });
  }
}

for (const gallery of document.querySelectorAll('[data-gallery]')) {
  const main = gallery.querySelector('.in-gallery-main');
  const opener = gallery.querySelector('[data-gallery-open]');
  const dialog = gallery.parentElement.querySelector('[data-gallery-dialog]');
  opener.addEventListener('click', event => {
    if (!dialog?.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const photo = dialog.querySelector('img');
    photo.removeAttribute('srcset');
    photo.src = main.src;
    photo.alt = main.alt;
    dialog.showModal();
  });
  for (const link of gallery.querySelectorAll('[data-gallery-photo]')) {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = link.querySelector('img');
      const originalSrc = main.getAttribute('src');
      const originalSet = main.srcset;
      const originalAlt = main.alt;
      main.src = link.href;
      opener.href = link.href;
      main.srcset = image.srcset;
      main.alt = image.alt;
      link.href = originalSrc;
      image.src = originalSrc;
      image.srcset = originalSet;
      image.alt = originalAlt;
    });
  }
}

const categories = [...document.querySelectorAll('.in-faq .in-index a')];
function updateCategory() {
  const current = categories.find(link => link.hash === location.hash) || categories[0];
  for (const link of categories) {
    if (link === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
if (categories.length) {
  updateCategory();
  window.addEventListener('hashchange', updateCategory);
}

const params = new URLSearchParams(location.search);
const service = document.querySelector('.in-quote select[name="service"]');
if (service) {
  const requestedService = params.get('service');
  if ([...service.options].some(option => option.value === requestedService)) service.value = requestedService;
}

const photos = document.querySelector('#quote-photos');
if (photos) {
  const selection = document.querySelector('#photo-selection');
  const malay = document.documentElement.lang === 'ms';
  photos.addEventListener('change', () => {
    const files = [...photos.files];
    const tooMany = files.length > 5;
    const tooLarge = files.some(file => file.size > 5 * 1024 * 1024);
    const wrongType = files.some(file => !['image/jpeg', 'image/png', 'image/webp'].includes(file.type));
    const error = tooMany ? (malay ? 'Pilih sehingga 5 gambar.' : 'Choose up to 5 photos.')
      : tooLarge ? (malay ? 'Setiap gambar mestilah 5 MB atau kurang.' : 'Each photo must be 5 MB or smaller.')
      : wrongType ? (malay ? 'Pilih fail JPG, PNG atau WebP.' : 'Choose JPG, PNG or WebP files.')
      : '';
    photos.setCustomValidity(error);
    selection.textContent = error || files.map(file => file.name).join(', ');
  });
}

const confirmation = document.querySelector('[data-quote-confirmation]');
if (confirmation) {
  const reference = params.get('ref');
  let storedReference;
  try {
    storedReference = sessionStorage.getItem('busra-latest-reference');
  } catch {
    storedReference = null;
  }
  if (reference && reference === storedReference && /^BSS-\d{4}-[A-F0-9]{8}$/.test(reference)) {
    confirmation.querySelector('[data-quote-reference]').textContent = reference;
    confirmation.querySelector('[data-confirmation-title]').textContent = confirmation.dataset.successTitle;
    for (const element of confirmation.querySelectorAll('[data-confirmed]')) element.hidden = false;
    for (const element of confirmation.querySelectorAll('[data-unconfirmed]')) element.hidden = true;
  }
}


