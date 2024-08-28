//menu desplegable
function myFunction() {
   
      var x = document.getElementById("myLinks");
      if (x.style.display === "flex") {
         x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
    
    function esconder() {
      var x = document.getElementById("myLinks");
      var img =document.getElementById("imgPelado");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }

    let currentIndex = 0;

    //Carusel

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

//Color menu
// script.js

window.addEventListener('scroll', function() {
  const menu = document.getElementById('menu');
  
  if (window.scrollY > 50) {
    menu.classList.add('scrolled'); // Añade la clase 'scrolled' cuando se hace scroll
  } else {
    menu.classList.remove('scrolled'); // Remueve la clase 'scrolled' cuando no hay scroll
  }
});
