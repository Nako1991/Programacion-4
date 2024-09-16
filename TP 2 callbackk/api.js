export function ejercicioMap() {
    let resultado = "";
    
    let personas = new Map([
        ["nombre", "Juan"],
        ["edad", 30],
        ["ciudad", "Madrid"]
    ]);
    resultado = resultado.concat("\nEjercicio 11: \n");
    resultado = resultado.concat("\nMapa inicial: \n");
    resultado = resultado + mapToString(personas);

    resultado = resultado.concat("\n\nAgregando el nuevo par clave-valor: \n");
    personas.set("pais", "España");
    resultado = resultado + mapToString(personas);

    resultado = resultado.concat("\n\nEliminando el par clave-valor: ciudad\n");
    personas.delete("ciudad");
    resultado = resultado + mapToString(personas);

    resultado = resultado.concat("\n\nEjercicio 12: \n");
    resultado = resultado.concat("\nValor que se encuentra guardado con la llave 'nombre': \n");
    resultado = resultado.concat(personas.get("nombre"));

    resultado = resultado.concat("\n\nEjercicio 13: \n");
    resultado = resultado.concat("\nIterando sobre el map: \n");
    resultado = resultado + mapToString(personas);

    resultado = resultado.concat("\n\nEjercicio 14: \n");
    resultado = resultado.concat("\nComprobando si existe la clave 'edad': \n");
    const arrayKeys = [... personas.keys()];
    if ( arrayKeys.includes("edad") )
        resultado = resultado.concat("La clave 'edad' se encuentra dentro del Map.\n");
    else
        resultado = resultado.concat("\nNo se encuentra a clave 'edad' dentro del Map.\n");

    resultado = resultado.concat("\n\nEjercicio 15: \n");
    resultado = resultado.concat("\nTransformando el Map en un Arreglo de arreglos:\n");
    const arrayValues = [... personas.values()];
    const arrayMap = [arrayKeys, arrayValues];
    resultado = resultado.concat(`\nLlaves: ${arrayMap[0]}\nValores: ${arrayMap[1]}`);

    console.log(resultado);
    editResults("Map", resultado);
    toggleResult("Map");
}


function mapToString(map) {
    let mapString = "Map:";
    map.forEach( (valor, clave) => {
        mapString += `\n${clave}: ${valor}`;
    });
    return mapString;
}

