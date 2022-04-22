const images = [
    "images/gallary1.jpg",
    "images/gallary2.png",
    "images/gallary3.jpg",
    "images/gallary4.jpg",
    "images/gallary5.jpg",
    "images/gallary6.jpg",
    "images/gallary7.jpg",
    "images/gallary8.jpg",
    "images/gallary9.jpg",
    "images/people.png"
]
const url = document.getElementById('image-src');
let imgIndex = 0;
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imagesId = images[imgIndex];
    imgIndex++;
    url.setAttribute('src', imagesId)
}, 1000)