import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
const galleryContainer = document.querySelector('.gallery');
const galleryCreator = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
    </a>`
).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryCreator);

