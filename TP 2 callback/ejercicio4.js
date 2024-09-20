"use strict";
import { editResults, toggleResult } from "./results.js";

export function ejercicio4() {
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

    arrayInt.forEach(numero => {
        if (callback(numero))
            arrayFiltrado.push(numero);
    });

    return arrayFiltrado;
}
