"use strict";
import { editResults, toggleResult } from "./results.js";

export function ejercicio3() {
    
    let resultado = "Texto instantaneo.\n";
    
    console.log(resultado);
    setTimeout( () => { 
        resultado = resultado.concat("Texto con 2 segundos de delay.");
        editResults(3, resultado);
    }, 2000);

    editResults(3, resultado);
    toggleResult(3);
}
