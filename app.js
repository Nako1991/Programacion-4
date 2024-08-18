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

    resolucionEjercicio4 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio4 += "El elemento buscado es: " + valorBuscado + "\n";
    if ( indiceEncontrado != -1 )
        resolucionEjercicio4 += "El indice del elemento buscado es de: " + indiceEncontrado + "\n";
    else
        resolucionEjercicio4 += "No se encontro el elemento dentro del array.\n";

    document.getElementById("resolucionEjercicio4").innerText = resolucionEjercicio4;
}

function buscarValorNumerico(arregloNumerico, valorBuscado) {
    const indiceEncontrado = arregloNumerico.findIndex( numero => numero == valorBuscado );
    return indiceEncontrado;
}

function ejercicio5() {
    desplegar(5);

    let resolucionEjercicio5 = "";
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const arregloNumericoPares = filtrarParesArregloNumerico(arregloNumerico);
    const arregloNumericoImpares = filtrarImparesArregloNumerico(arregloNumerico);

    resolucionEjercicio5 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio5 += "Arreglo numerico pares: " + arregloNumericoPares.toString() + "\n";
    resolucionEjercicio5 += "Arreglo numerico impares: " + arregloNumericoImpares.toString() + "\n";

    document.getElementById("resolucionEjercicio5").innerText = resolucionEjercicio5;
}

function filtrarParesArregloNumerico(arregloNumerico) {
    return arregloNumerico.filter( numero => numero % 2 === 0 );
}

function filtrarImparesArregloNumerico(arregloNumerico) {
    return arregloNumerico.filter( numero => numero % 2 === 1 );
}

function ejercicio6() {
    desplegar(6);

    let resolucionEjercicio6 = "";
    const arregloNumerico = [12, 12, 8, 21, 7, 7, 7, 29, 42, 11, 15, 15, 24, 31, 31, 9, 14, 33, 50, 50];
    const arregloNumericoSinDuplicados = filtrarDuplicadosArregloNumerico(arregloNumerico);

    resolucionEjercicio6 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio6 += "Arreglo numerico sin duplicados: " + arregloNumericoSinDuplicados.toString() + "\n";

    document.getElementById("resolucionEjercicio6").innerText = resolucionEjercicio6;
}

function filtrarDuplicadosArregloNumerico(arregloNumerico) {
    let arregloNumericoSinDuplicados = [];
    
    return arregloNumericoSinDuplicados;
}