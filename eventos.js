'use strict'

// evento load
window.addEventListener('load', () => {

    // Eventos del mouse

    function cambiarColor() {
        let bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
        return true;
    }

    let boton = document.querySelector("#boton");

    // evento click
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    // Mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "yellow";
    });
    // mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = "#ccc";
    });

    // focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("Estas dentro del input");
    });
    // blur
    input.addEventListener('blur', function () {
        console.log("Estas fuera del input");
    });
    // keydown
    input.addEventListener('keydown', function (event) {
        console.log("Pulsando esta tecla", event.key);
    });
    // keypress
    input.addEventListener('keypress', function (event) {
        console.log("Tecla presionada", event.key);
    });
    // keyup
    input.addEventListener('keyup', function (event) {
        console.log("Tecla soltada", event.key);
    });

});
