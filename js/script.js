// Obtén todas las imágenes dentro del contenedor
const galeria = document.querySelector('.mi-galeria');
const imagenes = galeria.querySelectorAll('img');

// Inicializa el índice de la imagen actual
let indiceActual = 0;

// Función para mostrar la siguiente imagen
function mostrarSiguienteImagen() {
    imagenes[indiceActual].classList.add('hidden-image'); // Oculta la imagen actual
    indiceActual = (indiceActual + 1) % imagenes.length; // Calcula el índice de la siguiente imagen
    imagenes[indiceActual].classList.remove('hidden-image'); // Muestra la siguiente imagen
}

// Agrega eventos a las flechas
document.querySelector('.flecha-izquierda').addEventListener('click', mostrarSiguienteImagen);
document.querySelector('.flecha-derecha').addEventListener('click', mostrarSiguienteImagen);

// Muestra la primera imagen al cargar la página
imagenes[indiceActual].classList.remove('hidden-image');
