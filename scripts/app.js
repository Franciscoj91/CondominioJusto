//navbar
let navLinks = document.getElementsByClassName('nav-link');

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
    touch: true,
    pause: false
});

//pilares
function myFunction(x) {
    let cards = document.getElementsByClassName('card');
    console.log(cards[3].style.height);
    cards[0].style.height = "100%";
    cards[1].style.height = "100%";
    cards[2].style.height = "100%";
    cards[3].style.height = "100%";
    
  }
  
  var x = window.matchMedia("(screen)")
  myFunction(x) // Call listener function at run time
  x.addEventListener('resize' ,myFunction) // Attach listener function on state changes

