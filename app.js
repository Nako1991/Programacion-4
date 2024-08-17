"use strict"
function test() {
    console.log("TEST clicked");
    document.getElementById("textoEjercicio1").innerText = "hola";
}

function ejercicio1() {
    desplegar(1);

    let resolucionEjercicio1 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];

    resolucionEjercicio1 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    const suma = arregloNumerico.reduce(function(total, numero) { //total: acumulador, numero: elemento del array iterativo
        return total + numero;
    }, 0); // Se setea en 0 inicialmente el total
    resolucionEjercicio1 += "La suma de todos los elementos es de: " + suma + "\n";
    document.getElementById("resolucionEjercicio1").innerText = resolucionEjercicio1;
}

function ejercicio2() {
    desplegar(2);
    
    let resolucionEjercicio1 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];

    resolucionEjercicio1 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    const suma = arregloNumerico.reduce(function(total, numero) {
        return total + numero;
    }, 0);

}

function desplegar(numeroDeEjercicio) {
    let stringEjercicio = "ejercicio" + numeroDeEjercicio;
    const desplegar = document.getElementById(stringEjercicio);
    desplegar.classList.toggle("menu-desplegable");
}