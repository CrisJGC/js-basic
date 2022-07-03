'use strict'
/*
1. Pida 6 numeros por pantalla
2. Mostar el array completo en el cuerpo pagina y consola 
3. ordenar y Mostar
4. Invertir orden y mostrar
5. Mostrar cuantos elementos tiene array
6. Busqueda de valor introducido por el usuario, nos indique si lo encuentra y su posicion
*/

function mostrarArr(elems, text){
    document.write("<h1>Contenido del array "+text+"</h1>");
    nums.forEach((elem) => document.write("<strong>"+ elem + "</strong><br>"));
}
// let num = new Array(6);
let nums = [];

for (let i = 0; i <= 5; i++) {
    // num[i] = parseInt(prompt('Introduce un numero',0));
    nums.push(parseInt(prompt('Introduce un numero',0)));
}

// document.write(nums);
mostrarArr(nums);
console.log(nums);

let ord = nums.sort(function(a,b){return a-b});
mostrarArr(ord, 'Ordenado');

let rev = nums.reverse();
mostrarArr(rev, 'Reverso');

document.write("<h2>El array tiene: "+nums.length+" elementos</h2>");

let busqueda = parseInt(prompt("busca un numero", 0));
let posicion = nums.findIndex(num => num == busqueda);
if (posicion && posicion != -1) {
    document.write("<h2>Encontrado</h2>");
    document.write("<h2>posicion de la busqueda: " +posicion+"</h2>");   
} else{
    document.write("<h2>No encontrado</h2>");
}