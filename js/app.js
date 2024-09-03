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

   

    //Carusel

    let currentIndex = 0;

    function showSlide(index) {
      const slides = document.querySelectorAll('.carousel-item');
      const totalSlides = slides.length;
      console.log(totalSlides);
      console.log("pepe");
      console.log("Hola, mundo!");

      

    
      // Ajusta el índice actual para que sea cíclico
      if (index >= totalSlides) {
        currentIndex = 0; // Vuelve a la primera imagen
      } else if (index < 0) {
        currentIndex = totalSlides - 1; // Va a la última imagen
      } else {
        currentIndex = index;
      }
    
      // Calcula el desplazamiento en porcentaje
      const offset = -currentIndex * 55;
      document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }
    
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
    
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
    
    // Configura el carrusel para que avance automáticamente
    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
    
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

// mapa
document.addEventListener('DOMContentLoaded', function () {
  // Crear el mapa y establecer la vista inicial
  var map = L.map('map').setView([40.416775, -3.703790], 5); // Coordenadas centradas en España con un zoom inicial de 5

  // Añadir un mapa base desde OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Función para agregar un marcador con información sobre la gira
  function addTourLocation(lat, lng, title, description) {
      var marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup(`<b>${title}</b><br>${description}`);
  }

  // Agregar marcadores de ejemplo
  addTourLocation(40.416775, -3.703790, 'Madrid', 'Gira en Madrid: 1 de Octubre 2024');
  addTourLocation(41.385064, 2.173404, 'Barcelona', 'Gira en Barcelona: 5 de Octubre 2024');
  addTourLocation(48.856613, 2.352222, 'París', 'Gira en París: 10 de Octubre 2024');
});


