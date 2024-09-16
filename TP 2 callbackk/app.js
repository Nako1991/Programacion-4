"use strict"

import { ejercicioMap } from "./api.js";

function toggleResult(numeroEjercicio) {
    const ejercicio = "resolucionEjercicio".concat(numeroEjercicio);
    const toggle = document.getElementById(ejercicio);
    toggle.classList.toggle("toggleable");
}

function editResults(numeroEjercicio, resultado) {
    const ejercicio = "resolucionEjercicio".concat(numeroEjercicio);
    const resolucion = document.getElementById(ejercicio);
    resolucion.innerText = resultado;
}

function ejercicio1y2() {
    let resultado = "Multiplicar \n";
    
    resultado = resultado.concat(operaciones(
        3, 
        5,
        operacionMultiplicar
    ));
    
    resultado = resultado.concat("Dividir \n");
    resultado = resultado.concat(operaciones(
        3, 
        5,
        function operacionDividir(numero1, numero2) {
            return numero1 / numero2;
        }
    ));

    resultado = resultado.concat("Sumar \n");
    resultado = resultado.concat(operaciones(
        3, 
        5,
        function (numero1, numero2) {
            return numero1 + numero2;
        }
    ));
    
    resultado = resultado.concat("Restar \n");
    resultado = resultado.concat(operaciones(
        3, 
        5,
        (numero1, numero2) => {
            return numero1 - numero2;
        }
    ));
    console.log(resultado);

    editResults(1, resultado);
    toggleResult(1);
}

function operaciones(numero1, numero2, callback) {
    const resultadoOperacion = callback(numero1, numero2);
    let resultadoString = "";
    resultadoString = resultadoString.concat("Numero 1: ");
    resultadoString = resultadoString.concat(numero1);
    resultadoString = resultadoString.concat("\nNumero 2: ");
    resultadoString = resultadoString.concat(numero2);
    resultadoString = resultadoString.concat("\nResultado de la operacion: ");
    resultadoString = resultadoString.concat(resultadoOperacion);
    resultadoString = resultadoString.concat("\n");
    return resultadoString;
}

function operacionMultiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function ejercicio3() {
    
    let resultado = "Texto instantaneo.\n";
    
    console.log(resultado);
    setTimeout( () => { 
        resultado = resultado.concat("Texto con 2 segundos de delay.");
        editResults(3, resultado);
    }, 2000);

    editResults(3, resultado);
    toggleResult(3);
}


function ejercicio4() {
    let resultado = "";
    let arrayInt = [34, 7, 23, 32, 5, 62, 19, 8, 45, 3, 27, 16];
    
    const arrayFiltrado = filtrar(
        arrayInt,
        numero => numero % 2 === 0
    );

    resultado = resultado.concat("Array de enteros sin filtrar: \n");
    resultado = resultado.concat(arrayInt);
    resultado = resultado.concat("\nArray de enteros filtrando los pares: \n");
    resultado = resultado.concat(arrayFiltrado);

    console.log(resultado);
    editResults(4, resultado);
    toggleResult(4);
}

function filtrar(arrayInt, callback) {
    let arrayFiltrado = [];

    arrayInt.forEach( numero => {
        if( callback(numero) )
            arrayFiltrado.push(numero);
    });

    return arrayFiltrado;
}

function ejercicio6y7y10() {
    let resultado = "";
    let setNumerico = new Set([1, 2, 3, 4, 5]);

    resultado = resultado.concat("Set numerico: ");
    setNumerico.forEach( numero => resultado = resultado.concat(numero + " ") );

    resultado = resultado.concat("\nAgregando el valor 6");
    setNumerico.add(6);
    resultado = resultado.concat("\nSet numerico: ");
    setNumerico.forEach( numero => resultado = resultado.concat(numero + " ") );

    resultado = resultado.concat("\nEliminando el numero 3");
    setNumerico.delete(3);
    resultado = resultado.concat("\nSet numerico: ");
    setNumerico.forEach( numero => resultado = resultado.concat(numero + " ") );

    resultado = resultado.concat("\nConvirtiendo el Set en Array");
    setNumerico = [... setNumerico];
    resultado = resultado.concat("\nArray numerico: ");
    resultado = resultado.concat(setNumerico);

    console.log(resultado);
    editResults("6y7y10", resultado);
    toggleResult("6y7y10");
}


function ejercicio8y9() {
    let resultado = "";
    const arrayInt = [1, 2, 2, 3, 4, 4, 5];

    resultado = resultado.concat("El string numerico con duplicados es: " + arrayInt + "\n");
    const setInt = new Set(arrayInt);

    resultado = resultado.concat("El sting transformado a Set es: ");
    setInt.forEach( numero => resultado = resultado.concat(numero + " ") );

    resultado = resultado.concat("\nBuscando el numero 4 dentro del set...");
    if ( setInt.has(4) )
        resultado = resultado.concat("\nEl numero 4 se encuentra dentro del set!");
    else
        resultado = resultado.concat("\nNo se encontro el numero 4 dentro del set!");

    resultado = resultado.concat("\nBuscando el numero 7 dentro del set...");
    if ( setInt.has(7) )
        resultado = resultado.concat("\nEl numero 7 se encuentra dentro del set!");
    else
        resultado = resultado.concat("\nEl numero 7 NO se encuentra dentro del set!");

    console.log(resultado);
    editResults("8y9", resultado);
    toggleResult("8y9");
}