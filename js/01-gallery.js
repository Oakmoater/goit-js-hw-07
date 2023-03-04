import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryCreator = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryCreator);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageSrc = event.target.dataset.source;
    const modalWindow = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  modalWindow.show();
};
galleryContainer.addEventListener('click', openModal);

function closeModal(event) {
  if (event.code === 'Escape') {
      const modalWindow = document.querySelector('.basicLightbox');
    //   modalWindow.close();
      modalWindow.parentNode.removeChild(modalWindow);
  }
};
document.addEventListener('keydown', closeModal);