import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryItemsList = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(({preview, original, description}) => `<a class="gallery__link" href=${original}>
    <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
    />
    </a>`)
.join("");

galleryItemsList.innerHTML = galleryMarkup;
// console.log(galleryMarkup);

galleryItemsList.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();

    const filterSource = event.target.dataset.source;
    if (!filterSource) return;

    console.log(filterSource)

    const instance = basicLightbox.create(`
        <img src="${filterSource}" width="800" height="600">`, {
    onShow: (instance) => {
        instance.element().querySelector('img').onclick = instance.close;
        }
    })
    instance.show();
}

