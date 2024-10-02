const blocks = document.querySelectorAll('.bloque');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const modulo_v1 = document.querySelectorAll('#modulo_v1');
const modulo_v2 = document.querySelectorAll('#modulo_v2');
const modulo_v3 = document.querySelectorAll('#modulo_v3');
const modulo_v4 = document.querySelectorAll('#modulo_v4');
const modulo_v5 = document.querySelectorAll('#modulo_v5');
const modulo_v6 = document.querySelectorAll('#modulo_v6');

let currentIndex = 0; // El índice actual del bloque visible
const totalBlocks = blocks.length; // Número total de bloques

// Definimos los valores iniciales de translateValues
let translateValues = [-82, -183, -285, -387, -483, -0]; // Ajusta estos valores según necesites

// Variable para almacenar el valor actual de translateX
let currentTranslateX = translateValues[currentIndex]; 

// Función para actualizar los valores de translateValues según el tamaño de la ventana
function updateTranslateValues() {
    if (window.innerWidth <= 1000) {
        translateValues = [-100, -200, -300, -400, -500, 0]; // Nuevos valores para pantallas <= 900px
    } else {
        translateValues = [-82, -183, -285, -387, -483, 0]; // Valores por defecto
    }
    // Actualizamos el translateX del bloque actual
    currentTranslateX = translateValues[currentIndex];
    updateCarousel(); // Actualiza la posición del carrusel
}

// Función para actualizar el translateX en función del índice actual
function updateCarousel() {
    currentTranslateX = translateValues[currentIndex];
    blocks.forEach((block, index) => {
        if (block) {
            block.style.transform = `translateX(${currentTranslateX}%)`;
        }
    });

    // Mostrar/ocultar el modulo_v1
    if(currentTranslateX === 0) {
        modulo_v1.forEach((modulov1) => {
            modulov1.style.opacity = '1';
        });
    } else {
        modulo_v1.forEach((modulov1) => {
            modulov1.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v2
    if(currentTranslateX === -82 || currentTranslateX === -100) {
        modulo_v2.forEach((modulov2) => {
            modulov2.style.opacity = '1';
        });
    } else {
        modulo_v2.forEach((modulov2) => {
            modulov2.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v3
    if(currentTranslateX === -183 || currentTranslateX === -200) {
        modulo_v3.forEach((modulov3) => {
            modulov3.style.opacity = '1';
        });
    } else {
        modulo_v3.forEach((modulov3) => {
            modulov3.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v4
    if(currentTranslateX === -285 || currentTranslateX === -300) {
        modulo_v4.forEach((modulov4) => {
            modulov4.style.opacity = '1';
        });
    } else {
        modulo_v4.forEach((modulov4) => {
            modulov4.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v5
    if(currentTranslateX === -387 || currentTranslateX === -400) {
        modulo_v5.forEach((modulov5) => {
            modulov5.style.opacity = '1';
        });
    } else {
        modulo_v5.forEach((modulov5) => {
            modulov5.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v6
    if(currentTranslateX === -483 || currentTranslateX === -500) {
        modulo_v6.forEach((modulov6) => {
            modulov6.style.opacity = '1';
        });
    } else {
        modulo_v6.forEach((modulov6) => {
            modulov6.style.opacity = '0';
        });
    }
}

// Escucha cuando la ventana cambia de tamaño para actualizar los valores
window.addEventListener('resize', updateTranslateValues);

// Inicializamos los valores al cargar la página
updateTranslateValues();

// Evento para el botón "Siguiente"
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalBlocks - 1) {
            currentIndex++; // Avanza al siguiente bloque
        } else {
            currentIndex = 0; // Vuelve al primer bloque si llega al final
        }
        updateCarousel();
    });
}

// Evento para el botón "Anterior"
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--; // Retrocede al bloque anterior
        } else {
            currentIndex = totalBlocks - 1; // Vuelve al último bloque si está en el primero
        }
        updateCarousel();
    });
}
