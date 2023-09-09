
import { galleryItems } from './gallery-items.js'
// Change code below this line

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
      data-source="${original}"
      alt="${description}"
      />
     </a>
    </li>
  `
    )
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault()
  if (evt.target === evt.currentTarget) {
    return;
  } 
  // console.log(evt.target);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width='800' height='600' /> 
  `);
  instance.show();

  const escapeImage = galleryEl.addEventListener("keydown", evt => {
    if (evt.code === 'Escape') {
      instance.close()
    }
  });
  // galleryEl.removeEventListener("keydown", evt => {
  //   instance.close()
  // });
}


  