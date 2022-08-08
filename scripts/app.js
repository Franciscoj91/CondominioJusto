//navbar
let navLinks = document.getElementsByClassName('nav-link');
console.log(navLinks);

navLinks = Array.from(navLinks);

navLinks.forEach(element => {
    element.addEventListener("click", function() {
        let currentEvent = document.getElementsByClassName('active');
        currentEvent[0].className = currentEvent[0].className.replace('active', '');
        element.className += ' active';   
    })
});  
    
    
//carousel
const myCarouselElement = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    ride: "carousel",
    wrap : true,
});