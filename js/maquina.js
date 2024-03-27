// Texto que se va a escribir
const frase = "El tiempo no vuelve atrás, por lo tanto, planta tu jardín y ";
const frase1 = "adorna tu alma en vez de esperar a que alguien te traiga flores";

// Elementos donde se escribirán las partes de la frase
const fraseElement = document.querySelector('.frase');
const frase1Element = document.querySelector('.frase1');

// Sonido de la máquina de escribir
const typingSound = document.getElementById('typing-sound');

// Función para escribir la primera mitad de la frase
function escribirFrase() {
    let i = 0;
    const intervalId = setInterval(() => {
        if (i < frase.length) {
            fraseElement.textContent += frase.charAt(i); // Agregar letra
            // Reproducir sonido de máquina de escribir solo una vez
            if (i === 0) {
                typingSound.play();
            }
            i++;
        } else {
            clearInterval(intervalId);
            // Llamar a la función para escribir la segunda mitad
            escribirFrase1();
        }
    }, 100); // Velocidad de escritura (en milisegundos)
}

// Función para escribir la segunda mitad de la frase
function escribirFrase1() {
    let j = 0;
    const intervalId1 = setInterval(() => {
        if (j < frase1.length) {
            frase1Element.textContent += frase1.charAt(j); // Agregar letra
            // Reproducir sonido de máquina de escribir solo una vez
            if (j === 0) {
                typingSound.play();
            }
            j++;
        } else {
            clearInterval(intervalId1);
        }
    }, 100); // Velocidad de escritura (en milisegundos)
}

// Llamar a la función para iniciar la escritura de la primera mitad
escribirFrase();
