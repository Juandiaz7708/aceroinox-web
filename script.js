function mostrarCategoria(id) {
    const categorias = document.querySelectorAll('.categoria');

    categorias.forEach(cat => {
        cat.style.display = 'none';
    });

    document.getElementById(id).style.display = 'block';
}

// Mostrar una por defecto
window.onload = function() {
    mostrarCategoria('escaleras');
};
