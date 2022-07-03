'use strict'

// Mostrar todos los numeros impares entre dos numeros introducidos por el usuario

let num1 = parseInt(prompt('Introducir un primer numero'));
let num2 = parseInt(prompt('Introducir un segundo numero'));

document.write("Los numeros impares son: <br>");
while (num1 < num2) {
    if ((num1%2) != 0) {
        document.write(num1+"<br>");
    }
    num1++;
}   
