'use strict'

window.addEventListener('load', () => {

    function intervalo() {
        // timers
        let tiempo = setInterval(function () {
            console.log("set interval ejecutando");
            let encabezado = document.querySelector("h1")
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1500);
        return tiempo;
    }

    let tiempo = intervalo();

    let stop = document.querySelector("#stop");
    stop.addEventListener("click", function () {
        alert("Has detenido el intervalo");
        clearInterval(tiempo);
    });

    let start = document.querySelector("#start");
    start.addEventListener("click", function () {
        alert("Has iniciado el intervalo");
        intervalo();
    });

});