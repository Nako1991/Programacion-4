"use strict";
import { editResults, toggleResult } from "./results.js";

export function ejercicio1y2() {
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