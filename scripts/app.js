const myCarouselElement = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    ride: "carousel",
    wrap : true,
});