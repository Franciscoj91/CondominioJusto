//navbar
let navLinks = document.getElementsByClassName('nav-link');
console.log(navLinks);

navLinks = Array.from(navLinks);

navLinks.forEach(element => {
    element.addEventListener("click", function() {
        let currentElement = document.getElementsByClassName('active');
        currentElement[0].className = currentElement[0].className.replace('active', '');
        element.className += ' active';  

        let burgerButton = document.getElementsByClassName('navbar-toggler');
        let hideList = document.getElementById('navbarSupportedContent');

        if (hideList.classList.contains('show')) {
            burgerButton[0].click();
        }
    })
});  
    
    
//carousel
const myCarouselElement = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    ride: "carousel",
    wrap : true,
});