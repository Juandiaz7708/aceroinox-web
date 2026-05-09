document.getElementById("formularioContacto").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});

function mostrarCategoria(id) {
    // Oculta todas
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(cat => {
        cat.style.display = 'none';
    });

    // Muestra la seleccionada
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = 'block';
    }
}

