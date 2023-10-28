import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//створення рядка розмітки
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join("");

//додованяя елементів в DOM
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markup);

//ініціалізація
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
