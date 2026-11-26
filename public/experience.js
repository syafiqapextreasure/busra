// Loaded pixels replace their own placeholder independently, including lazy gallery images.
for (const photo of document.querySelectorAll('img[data-site-photo]')) {
  const update = () => photo.toggleAttribute('data-loading', !photo.complete);
  photo.addEventListener('load', update);
  photo.addEventListener('error', update);
  // Gallery thumbnails and the full-size view can change source after initial load.
  new MutationObserver(update).observe(photo, { attributes: true, attributeFilter: ['src', 'srcset'] });
  update();
}
