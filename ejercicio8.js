'use strict'

// Calculadora:
// - pida los numero por pantalla
// - Si metes un num erroneo, lo vuelva a pedir
// En el cuerpo de la pagina, en una alerta y por la consola el resultado de
// sumar , restar, multiplicar y dividir esas dos cifras

let num1 = parseInt(prompt('Ingresa primer número', 0));
let num2 = parseInt(prompt('Ingresa segundo número', 0));

while (isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt('Ingresa primer número', 0));
    num2 = parseInt(prompt('Ingresa segundo número', 0));
}

document.write("<h1>Los numeros son: "+num1+" y "+num2+"</h1>");
document.write("<h1>Suma</h1>");
document.write(num1 + num2);

document.write("<h1>Resta</h1>");
document.write(num1 - num2);

document.write("<h1>Multiplicacion</h1>");
document.write(num1 * num2);

document.write("<h1>Division</h1>");document.write(num1 / num2);