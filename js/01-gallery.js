import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(`.gallery`);
function createGalleryItem() {
    const newGalleryEl = galleryItems.map((item) => {
        return
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="href="${item.original}""
            alt="${item.description}"
          />
        </a>
      </div>`
      console.log(newGalleryEl);
    }).join("");

}
//const readyGallery = createGalleryItem(galleryItems);
//console.log(readyGallery);
//galleryDiv.insertAdjacentHTML("beforeend", newGalleryEl);