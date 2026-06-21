<<<<<<< HEAD
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}
=======
/* =============================================
   SCRIPT.JS — Funcionalidad principal
   Acerinox Web
   ============================================= */

/* ── FORMULARIO DE CONTACTO ── */
const formulario = document.getElementById("formularioContacto");
if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    formulario.reset();
  });
}

/* ── MENÚ HAMBURGUESA ── */
const menuToggle = document.getElementById('menu-toggle');
const accionesHeader = document.querySelector('.acciones-header');

if (menuToggle && accionesHeader) {
  menuToggle.addEventListener('click', () => {
    accionesHeader.classList.toggle('active');
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !accionesHeader.contains(e.target)) {
      accionesHeader.classList.remove('active');
    }
  });
}

/* ── SLIDER DE IMÁGENES ── */
const slides = document.querySelectorAll('.slide');
let index = 0;

if (slides.length > 0) {
  function cambiarSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  // Cambia cada 4 segundos
  setInterval(cambiarSlide, 4000);
}
>>>>>>> main
