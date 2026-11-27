const compare = document.querySelector('[data-compare]');
if (compare) {
  const input = compare.querySelector('input');
  const isMalay = document.documentElement.lang === 'ms';
  function update() {
    compare.style.setProperty('--split', input.value + '%');
    compare.querySelector('.before-tag').hidden = Number(input.value) < 15;
    compare.querySelector('.after-tag').hidden = Number(input.value) > 85;
    input.setAttribute('aria-valuetext', input.value + (isMalay ? '% sebelum ubah suai' : '% before renovation'));
  }
  input.addEventListener('input', update);
  input.hidden = false;
  compare.classList.add('ready');
  update();
}
const share = document.querySelector('[data-share]');
if (share && navigator.share) {
  share.addEventListener('click', async event => {
    event.preventDefault();
    try {
      await navigator.share({ title: document.querySelector('h1').textContent, url: document.querySelector('link[rel=canonical]').href });
    } catch (error) {
      if (error.name !== 'AbortError') location.assign(share.href);
    }
  });
}
