'use strict'

// Pida dos numeros y diga cual es mayor, menor o si son iguales
// Si no son numeros o iguales a cero, vuelva a pedir datos

let num1 = parseInt(prompt('Ingresa primer número', 0));
let num2 = parseInt(prompt('Ingresa segundo número', 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    parseInt(prompt('Ingresa primer número', 0));
    parseInt(prompt('Ingresa segundo número', 0));    
}
if (num1 == num2) {
    alert('números son iguales')
}else if(num1 > num2){
    alert('El número mayor es: ' + num1 + ' y el número menor es: ' + num2);
}else if (num2 > num1) {
    alert('El número mayor es: ' + num2 + ' y el número menor es: ' + num1);
}else {
    alert ('Introduce numeros iguales')
}