    "use strict"

    export function toggleResult(numeroEjercicio) {
        const ejercicio = "resolucionEjercicio".concat(numeroEjercicio);
        const toggle = document.getElementById(ejercicio);
        toggle.classList.toggle("toggleable");
    }

    export function editResults(numeroEjercicio, resultado) {
        const ejercicio = "resolucionEjercicio".concat(numeroEjercicio);
        const resolucion = document.getElementById(ejercicio);
        resolucion.innerText = resultado;
    }