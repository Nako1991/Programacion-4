"use strict"
function test() {
    console.log("TEST clicked");
    //document.getElementById("textoEjercicio1").innerText = "hola";
}

function desplegar(numeroDeEjercicio) {
    let stringEjercicio = "ejercicio" + numeroDeEjercicio;
    const desplegar = document.getElementById(stringEjercicio);
    desplegar.classList.toggle("menu-desplegable");
}

function ejercicio1() {
    desplegar(1);

    let resolucionEjercicio1 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];

    const suma = sumarElementosArreglo(arregloNumerico);

    resolucionEjercicio1 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio1 += "La suma de todos los elementos es de: " + suma + "\n";

    document.getElementById("resolucionEjercicio1").innerText = resolucionEjercicio1;
}

function sumarElementosArreglo(arregloNumerico) {
    const suma = arregloNumerico.reduce(function(total, numero) { //total: acumulador, numero: elemento del array iterativo
        return total + numero;
    }, 0); // Se setea en 0 inicialmente el total
    return suma;
}

function ejercicio2() {
    desplegar(2);
    
    let resolucionEjercicio2 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];

    const suma = sumarElementosArreglo(arregloNumerico);
    const elementos = arregloNumerico.length;
    const promedio = calcularPromedioArreglo(arregloNumerico);

    resolucionEjercicio2 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio2 += "La suma de todos los elementos es de: " + suma + "\n";
    resolucionEjercicio2 += "La cantidad de elementos del arreglo es de: " + elementos + "\n";
    resolucionEjercicio2 += "El promedio del arreglo es de: " + promedio + "\n";

    document.getElementById("resolucionEjercicio2").innerText = resolucionEjercicio2;
}

function calcularPromedioArreglo(arregloNumerico) {
    const suma = sumarElementosArreglo(arregloNumerico);
    const elementos = arregloNumerico.length;
    const promedio = suma / elementos;
    return promedio;
}

function ejercicio3() {
    desplegar(3);

    let resolucionEjercicio3 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const maximo = encontrarMaximoNumero(arregloNumerico);
    const minimo = encontrarMinimoNumero(arregloNumerico);

    resolucionEjercicio3 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio3 += "El maximo valor de los elementos es de: " + maximo + "\n";
    resolucionEjercicio3 += "El minimo valor de los elementos es de: " + minimo + "\n";

    document.getElementById("resolucionEjercicio3").innerText = resolucionEjercicio3;
}

function encontrarMaximoNumero(arregloNumerico) {
    const maximo = arregloNumerico.reduce( (max, numero) => numero > max ? numero : max, arregloNumerico[0] );
    return maximo;
}

function encontrarMinimoNumero(arregloNumerico) {
    const minimo = arregloNumerico.reduce( (min, numero) => numero < min ? numero : min, arregloNumerico[0] );
    return minimo;
}

function ejercicio4() {
    desplegar(4);

    let resolucionEjercicio4 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const valorBuscado = 18;
    const indiceEncontrado = buscarValorNumerico(arregloNumerico, valorBuscado);


}

function buscarValorNumerico(arregloNumerico, valorBuscado) {
    //const siSeEncuentras = arregloNumerico.find( numero => numero == );
    return indiceEncontrado;
}