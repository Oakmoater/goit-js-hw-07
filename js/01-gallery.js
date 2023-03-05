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


galleryContainer.addEventListener('click', onLinkClick);

const modalWindow = basicLightbox.create(`<img width="1140" height="720" src="#">`, {onShow: (modalWindow) => {window.addEventListener('keydown', onEscPress)},
onClose: (modalWindow) => {window.removeEventListener('keydown', onEscPress)}});

function onLinkClick(event) {
  event.preventDefault();
  modalWindow.element().querySelector('img').src = event.target.dataset.source;
  modalWindow.show(); 
}
function onEscPress(event) {
 if(event.code === "Escape") {
  modalWindow.close();
 }
}