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

    
  }
  
  var x = window.matchMedia("(screen)")
  myFunction(x) // Call listener function at run time
  x.addEventListener('resize' ,myFunction) // Attach listener function on state changes

//Servicios
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        center: false,
        
        stagePadding: 0,
        dots: false,
        autoWidth: false,
        responsive : {
            0: {
                items:1,
                center:false,
                margin: 0,
                stagePadding: 50

            },
            700: {
                items:3,
                margin: 25
            },
            1000: {
                items:4,
                margin: 22
            }
        }
    });
});

//expand-Card

let expandLink = document.getElementById('expand-link');
let expandText = document.getElementById('expand-text');
let text = '<p class="card-text" >Revisión detallada de los ingresos y egresos, para evaluar el uso óptimo de los recursos de la comunidad.</p><ul class="card-text"><li>Revisión de remuneraciones (RRHH)</li><li>Revisión de ingresos y egresos</li><li> Cumplimiento de la Ley de Copropiedad e inmobiliaria</li><li>Fondo de Reserva</li><li>Revisión de los saldos bancarios</li></ul>'

expandLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (expandLink.innerHTML == "Ver más") {
        expandLink.innerHTML = "Ver menos";
  
    } else {
        expandLink.innerHTML = "Ver más";
    }
    
})

