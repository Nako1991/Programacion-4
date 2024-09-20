"use strict";
import { editResults, toggleResult } from "./results.js";

export function ejercicio8y9() {
    let resultado = "";
    const arrayInt = [1, 2, 2, 3, 4, 4, 5];

    resultado = resultado.concat("El string numerico con duplicados es: " + arrayInt + "\n");
    const setInt = new Set(arrayInt);

    resultado = resultado.concat("El sting transformado a Set es: ");
    setInt.forEach(numero => resultado = resultado.concat(numero + " "));

    resultado = resultado.concat("\nBuscando el numero 4 dentro del set...");
    if (setInt.has(4))
        resultado = resultado.concat("\nEl numero 4 se encuentra dentro del set!");

    else
        resultado = resultado.concat("\nNo se encontro el numero 4 dentro del set!");

    resultado = resultado.concat("\nBuscando el numero 7 dentro del set...");
    if (setInt.has(7))
        resultado = resultado.concat("\nEl numero 7 se encuentra dentro del set!");

    else
        resultado = resultado.concat("\nEl numero 7 NO se encuentra dentro del set!");

    console.log(resultado);
    editResults("8y9", resultado);
    toggleResult("8y9");
}
