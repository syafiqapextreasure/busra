const malay = document.documentElement.lang === 'ms';
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function ready(image) {
  if (image.complete) return Promise.resolve(image.naturalWidth > 0);
  return new Promise(resolve => {
    const finish = () => {
      image.removeEventListener('load', finish);
      image.removeEventListener('error', finish);
      resolve(image.naturalWidth > 0);
    };
    image.addEventListener('load', finish);
    image.addEventListener('error', finish);
  });
}

function loadPageImages(dialog) {
  const photos = [...document.images].filter(image => !dialog.contains(image));
  if (!photos.length) return;
  const progress = dialog.querySelector('progress');
  const percent = dialog.querySelector('[data-percent]');
  let settled = 0;
  let dismissed = false;
  const revealTimer = setTimeout(() => {
    if (!dismissed && document.activeElement === document.body && !document.hidden) dialog.showModal();
  }, 140);
  function dismiss() {
    dismissed = true;
    clearTimeout(revealTimer);
    clearTimeout(deadline);
    if (dialog.open) dialog.close();
  }
  const deadline = setTimeout(dismiss, 5000);
  dialog.querySelector('[data-skip-loader]').addEventListener('click', dismiss);
  dialog.addEventListener('cancel', dismiss);
  window.addEventListener('pagehide', dismiss, {once:true});
  for (const photo of photos) {
    // Start below-fold photos too, while keeping the browser's responsive source choice.
    if (photo.loading === 'lazy') {
      const width = photo.getBoundingClientRect().width;
      if (width && photo.sizes.startsWith('auto,')) {
        const original = photo.sizes;
        photo.sizes = Math.ceil(width) + 'px';
        ready(photo).then(() => { photo.loading = 'lazy'; photo.sizes = original; });
      }
      photo.loading = 'eager';
    }
    ready(photo).then(async loaded => {
      if (loaded) {
        try { await photo.decode(); } catch { /* Source may change on resize. */ }
      }
      settled++;
      const value = Math.round(100 * settled / photos.length);
      progress.value = value;
      percent.textContent = value + '%';
      dialog.style.setProperty('--pane-travel', (value * .28) + 'px');
      if (settled === photos.length) dismiss();
    });
  }
}

async function setUpDoors(scene) {
  const closed = scene.querySelector('.door-closed');
  const open = scene.querySelector('.door-open');
  const states = await Promise.all([ready(closed), ready(open)]);
  if (!states.every(Boolean)) {
    if (states[1]) scene.classList.add('open-only');
    return;
  }
  const controls = scene.querySelector('.door-controls');
  const range = controls.querySelector('input');
  const buttons = [...controls.querySelectorAll('[data-position]')];
  let frame;
  function render(value) {
    range.value = value;
    scene.style.setProperty('--reveal', range.value + '%');
    range.setAttribute('aria-valuetext', malay ? range.value + '% terbuka' : range.value + '% open');
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.position === range.value));
  }
  range.addEventListener('input', () => {
    cancelAnimationFrame(frame);
    render(range.value);
  });
  range.addEventListener('pointerdown', () => cancelAnimationFrame(frame));
  for (const button of buttons) {
    button.addEventListener('click', () => {
      cancelAnimationFrame(frame);
      const start = Number(range.value);
      const end = Number(button.dataset.position);
      if (reducedMotion.matches || start === end) { render(end); return; }
      const timestamp = performance.now();
      function tick(now) {
        const fraction = Math.min(1, (now - timestamp) / 430);
        render(Math.round(start + (end-start) * (1 - Math.pow(1-fraction,3))));
        if (fraction < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    });
  }
  render(range.value);
  scene.classList.add('interactive');
  controls.hidden = false;
}

const dialog = document.querySelector('.page-loader');
if (dialog && typeof dialog.showModal === 'function') loadPageImages(dialog);
const scene = document.querySelector('[data-door-compare]');
if (scene) setUpDoors(scene);

