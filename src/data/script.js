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

// Definimos un array con valores de `translateX` individual para cada bloque
const translateValues = [-82, -183, -285, -387, -483, -0]; // Ajusta estos valores según necesites

// Variable para almacenar el valor actual de translateX
let currentTranslateX = translateValues[currentIndex]; 

// Función para actualizar el translateX en función del índice actual
function updateCarousel() {
    currentTranslateX = translateValues[currentIndex];
    blocks.forEach((block, index) => {
        if (block) {
            block.style.transform = `translateX(${currentTranslateX}%)`;
        }
    });

    // Mostrar/ocultar el modulo_v1
    if(currentTranslateX === -0) {
        modulo_v1.forEach((modulov1, index) => {
            modulov1.style.opacity = '1';
        });
    } else {
        modulo_v1.forEach((modulov1, index) => {
            modulov1.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v2
    if(currentTranslateX === -82) {
        modulo_v2.forEach((modulov2, index) => {
            modulov2.style.opacity = '1';
        });
    } else {
        modulo_v2.forEach((modulov2, index) => {
            modulov2.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v3
    if(currentTranslateX === -183) {
        modulo_v3.forEach((modulov3, index) => {
            modulov3.style.opacity = '1';
        });
    } else {
        modulo_v3.forEach((modulov3, index) => {
            modulov3.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v4
    if(currentTranslateX === -285) {
        modulo_v4.forEach((modulov4, index) => {
            modulov4.style.opacity = '1';
        });
    } else {
        modulo_v4.forEach((modulov4, index) => {
            modulov4.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v5
    if(currentTranslateX === -387) {
        modulo_v5.forEach((modulov5, index) => {
            modulov5.style.opacity = '1';
        });
    } else {
        modulo_v5.forEach((modulov5, index) => {
            modulov5.style.opacity = '0';
        });
    }

    // Mostrar/ocultar el modulo_v6
    if(currentTranslateX === -483) {
        modulo_v6.forEach((modulov6, index) => {
            modulov6.style.opacity = '1';
        });
    } else {
        modulo_v6.forEach((modulov6, index) => {
            modulov6.style.opacity = '0';
        });
    }

}



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
