import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')
    function createMarkup(arr) {
  return arr
    .map(
        ({ preview, original,description}) => `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
     </a>
    </li>
  `
    )
    .join("");
    }

// console.dir(createMarkup(galleryItems))
galleryEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
// console.log(galleryEl);
galleryEl.addEventListener("click", onClick)

function onClick(evt) {
evt.preventDefault()
  if (evt.target === evt.currentTarget) {
    return;
  }
  // console.log(evt.target);
}
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
}) 