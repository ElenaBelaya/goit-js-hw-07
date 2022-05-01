import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryItem(gallery) {
    return gallery.map(({preview, original, description}) => {
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
    `}).join("");
}

const galleryCardMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

galleryContainer.addEventListener(`click`, onLargeCardLink);

function onLargeCardLink(e) {
  e.preventDefault();
  const cardLinkEl = e.target.closest('.gallery__image');
  const cardLink = cardLinkEl.dataset.source;

  const instance = basicLightbox.create(`
  <div class="modal">
     <img src=${cardLink} />
  </div>
  `, {
    onShow: (instance) => {
      instance.element().querySelector(`.modal`).onclick = instance.close;

      window.addEventListener(`keydown`, onEscClose);
    },
    onClose: (instance) => {
      window.removeEventListener(`keydown`, onEscClose);
    }
  })
function onEscClose(event) {
  if(event.code === "Escape") {
    instance.close()
  }
}

instance.show()
}
