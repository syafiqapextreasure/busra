const works = document.querySelector('[data-works]');
if (works) {
  const groups = [...works.querySelectorAll('.works-group')];
  const filters = [...works.querySelectorAll('[data-works-filter]')];
  const update = () => {
    const id = location.hash.slice(1);
    const active = groups.some(group => group.id === id) ? id : 'all';
    for (const group of groups) group.hidden = active !== 'all' && group.id !== active;
    for (const link of filters) {
      if (link.dataset.worksFilter === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  };
  for (const link of filters) {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, '', link.hash);
      update();
    });
  }
  window.addEventListener('hashchange', update);
  update();

  const dialog = works.querySelector('dialog');
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let photos = [], index = 0;
  function showPhoto(position) {
    index = (position + photos.length) % photos.length;
    const link = photos[index];
    image.alt = link.dataset.caption;
    image.src = link.href;
    caption.textContent = (index + 1) + ' / ' + photos.length + ' · ' + image.alt;
  }
  works.addEventListener('click', event => {
    const link = event.target.closest('[data-work-photo]');
    if (!link || !dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const group = link.closest('.works-group, .works-pair');
    photos = [...group.querySelectorAll('[data-work-photo]')];
    showPhoto(photos.indexOf(link));
    dialog.showModal();
  });
  dialog.addEventListener('click', event => {
    const control = event.target.closest('[data-step]');
    if (control) showPhoto(index + Number(control.dataset.step));
    if (event.target === dialog) {
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    }
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
}
