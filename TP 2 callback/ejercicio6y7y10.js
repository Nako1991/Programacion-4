"use strict";
import { editResults, toggleResult } from "./results.js";

export function ejercicio6y7y10() {
    let resultado = "";
    let setNumerico = new Set([1, 2, 3, 4, 5]);

    resultado = resultado.concat("Set numerico: ");
    setNumerico.forEach(numero => resultado = resultado.concat(numero + " "));

    resultado = resultado.concat("\nAgregando el valor 6");
    setNumerico.add(6);
    resultado = resultado.concat("\nSet numerico: ");
    setNumerico.forEach(numero => resultado = resultado.concat(numero + " "));

    resultado = resultado.concat("\nEliminando el numero 3");
    setNumerico.delete(3);
    resultado = resultado.concat("\nSet numerico: ");
    setNumerico.forEach(numero => resultado = resultado.concat(numero + " "));

    resultado = resultado.concat("\nConvirtiendo el Set en Array");
    setNumerico = [...setNumerico];
    resultado = resultado.concat("\nArray numerico: ");
    resultado = resultado.concat(setNumerico);

    console.log(resultado);
    editResults("6y7y10", resultado);
    toggleResult("6y7y10");
}
