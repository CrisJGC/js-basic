'use strict'

// Mostar todos los numeros divisores de un numero introducido por el usuario

let num = parseInt(prompt('Ingrese un numero'));

for(let i = 1; i<= num; i++){
    if (num%i == 0) {
        console.log("Dividor: "+i);
    }
}