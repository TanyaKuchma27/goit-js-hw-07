import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

    function onGalleryContainerClick(evt) {
    evt.preventDefault();

    const isGalleryItemEl = evt.target.classList.contains('gallery__image');

    if (!isGalleryItemEl) {
        return;
    }
   
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
     `);
        
    instance.show(() => {
      document.addEventListener("keydown", onEscKeyPress);
    });
      
    function onEscKeyPress (evt) {
      const ESC_KEY_CODE = 'Escape';
      const isEscKey = evt.code === ESC_KEY_CODE;
                       
      if (isEscKey) {
        instance.close(() => {
          document.removeEventListener("keydown", onEscKeyPress);
          });
        }
    }
}
