document.getElementById("formularioContacto").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});

const menuToggle = document.getElementById('menu-toggle');

const accionesHeader = document.querySelector('.acciones-header');

menuToggle.addEventListener('click', () => {

    accionesHeader.classList.toggle('active');

});
