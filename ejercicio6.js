'use strict'

// Programa diga si el numero es par o impar

let num = parseInt(prompt('Introduce un numero ', 0));

while (isNaN(num)) {
    num = parseInt(prompt('Introduce un numero ', 0));
}

if (num%2 == 0) {
    alert("Es un numero par");
}else{
    alert("Es impar ");
}