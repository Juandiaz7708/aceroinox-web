document.getElementById("formularioContacto").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});

const menuToggle = document.getElementById('menu-toggle');

const accionesHeader = document.querySelector('.acciones-header');

menuToggle.addEventListener('click', () => {

    accionesHeader.classList.toggle('active');

});

const slides = document.querySelectorAll('.slide');

let index = 0;

function cambiarSlide() {

    slides[index].classList.remove('active');

    index++;

    if(index >= slides.length) {

        index = 0;
    }

    slides[index].classList.add('active');
}

/* CAMBIA CADA 4 SEGUNDOS */

setInterval(cambiarSlide, 4000);