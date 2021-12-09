import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join('');
}
    let gallery = new SimpleLightbox('a.gallery__item', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
    });




//     function onGalleryContainerClick(evt) {
//     evt.preventDefault();

//     const isGalleryItemEl = evt.target.classList.contains('gallery__image');

//     if (!isGalleryItemEl) {
//         return;
//     }
   
//     const instance = basicLightbox.create(`
//     <img src="${evt.target.dataset.source}">
//      `);
        
//     instance.show(() => {
//         document.addEventListener("keydown", evt => {
//             const ESC_KEY_CODE = 'Escape';
//             const isEscKey = evt.code === ESC_KEY_CODE;
//           console.log(evt.target);
           
//             if (isEscKey) {
//                 instance.close();
//             }
//         });
//     });
// }