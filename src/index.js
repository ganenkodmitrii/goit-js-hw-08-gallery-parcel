import galleryItems from './js/gallery-items.js';
import createGalleryMarkup from './js/gallery-markup.js';
import onOpenModal from './js/open-modal.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

export const refs = {
    galleryContainer: document.querySelector('.js-gallery'),
    modalContainer: document.querySelector('.js-lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    modalBthClose: document.querySelector(
        'button[data-action="close-lightbox"]',
    ),
    modalOverlay: document.querySelector('.lightbox__overlay'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryContainer.addEventListener('click', onOpenModal);
