'use strict'

// Programa que muestre todos los numeros entre los introducidos por el usuario

let num1 = parseInt(prompt('Ingrese un primer número', 0));
let num2 = parseInt(prompt('Ingrese un segundo número', 0));
let nums;

document.write("<h2> De"+num1+ " a "+num2+" estan estos numeros</h2>")
for (nums = num1; nums <= num2; nums++){
        document.write(nums +"<br>");
}    