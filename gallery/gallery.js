const activeImage = document.getElementById("active-img");
const images = document.getElementById("gallery").getElementsByTagName("img");
const lightbox = document.getElementById("external-container");
let indexImage = 0;
const imagesArray = [...images];

const openLightbox = (event) => {
  activeImage.src = event.target.src;
  lightbox.classList.toggle("hidden");
  indexImage = imagesArray.indexOf(event.target);
};

document.getElementById("close-btn").addEventListener("click", () => {
  lightbox.classList.toggle("hidden");
});

console.log(images);

for (const image of images) {
  image.addEventListener("click", openLightbox);
}

const nextImage = () => {
  let index = (indexImage + 1) % images.length;
  activeImage.src = images[index].src;
  activeImage.alt = images[index].alt;
  indexImage = index;
};

const prevImage = () => {
  let index = (indexImage - 1 + images.length) % images.length;
  activeImage.src = images[index].src;
  activeImage.alt = images[index].alt;
  indexImage = index;
};

const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
backBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);