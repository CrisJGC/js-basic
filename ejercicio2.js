'use strict'

// Utilizar un bucle, mostrar la suma y la media de los numeros introducidos
// hasta introducir un numero negatico y ahi mostrar el resultado

let suma = 0;
let cont =0;

do {
    let num = parseInt(prompt('Introducir numeros hasta que metas uno negativo', 0));
    if (isNan(num)) {
        num = 0;
    }else if(num >= 0){
        suma += num;
        cont++;
    }
} while (num >= 0);
alert('La suma de numeros es: ' + suma);
alert('La media de numeros es: ' + (suma/cont));