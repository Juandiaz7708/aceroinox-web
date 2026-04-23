document.getElementById("formularioContacto").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  // Oculta todas las imágenes
  slides.forEach(slide => slide.classList.remove('active'));

  // Muestra la siguiente imagen
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

// Mostrar la primera imagen al cargar
slides[slideIndex].classList.add('active');

// Cambiar cada 3 segundos
setInterval(showSlides, 3000); // Puedes cambiar el tiempo si deseas

