'use strict'

// Tabla de multiplicar de un numero introducido

let num =parseInt(prompt('¿Numero de la tabla?', 1));

for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (i*num) + "<br>");
}