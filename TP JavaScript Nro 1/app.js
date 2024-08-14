console.log("TP JS 1 start");

function ejercicio1() {
    console.log("Ejercicio Nro 1");
    console.log("1. Declarar una variable `nombre` y asignarle tu nombre.");
    console.log("Imprimir en la consola.");
    const miNombre = "Nano";
    console.log(miNombre);
}


function ejercicio2() {
    console.log("Ejercicio Nro 2");
    console.log("2. Declarar dos variables numéricas `num1` y `num2`,");
    console.log("y calcular su suma. Imprimir el resultado.");
    const num1 = 3;
    const num2 = 5;
    const suma = sumar(num1, num2);
    console.log("Numero 1: " + num1);
    console.log("Numero 2: " + num2);
    console.log("Suma: " + suma);
}
function sumar(num1, num2) {
    return num1 + num2;
}


function ejercicio3() {
    console.log("Ejercicio Nro 3");
    console.log("3. Declarar una constante `PI` con el valor 3.14159.");
    console.log("Imprimir en la consola.");
    const pi = Math.PI;
    console.log("Pi: " + pi);
}


function ejercicio4() {
    console.log("Ejercicio Nro 4");
    console.log("4. Crear una función `saludar` que tome un parámetro `nombre`");
    console.log("y retorne un saludo personalizado.");
    const nombre = prompt("Ingresa tu nombre:");
    console.log(`Hola, ${nombre}.`);
}


function ejercicio5() {
    console.log("Ejercicio Nro 5");
    console.log("5. Crear una función `esPar` que tome un número como parámetro");
    console.log("y retorne `true` si es par, y `false` si es impar.");
    const num1 = 0;
    const num2 = 1;
    const num3 = 12;
    const num4 = -5;
    console.log("Analizando si los siguientes numeros son pares: 0, 1, 12, -5");
    console.log(`Numero 1: ${esPar(num1)}`);
    console.log(`Numero 2: ${esPar(num2)}`);
    console.log(`Numero 3: ${esPar(num3)}`);
    console.log(`Numero 4: ${esPar(num4)}`);
}

function esPar(numero) {
    let esPar = false;
    if ( numero % 2 === 0 )
        esPar = true;
    return esPar;
}


function ejercicio6() {
    console.log("Ejercicio Nro 6");
    console.log("6. Crear una función `sumarArray` que tome un array de números como parámetro");
    console.log("y retorne la suma de sus elementos.");
    const arregloNumerico = [0, 1, 12, -5];
    console.log(`El arreglo es: ${arregloNumerico}.`);
    console.log("La suma del arreglo es: " + sumarArreglo(arregloNumerico));
}

function sumarArreglo(arregloNumerico) {
    let suma = 0;
    for ( let numero of arregloNumerico )
        suma = suma + numero;
    return suma;
}

function ejercicio7() {
    console.log("Ejercicio Nro 7");
    console.log("7. Crear un objeto literal `persona` con las propiedades");
    console.log("`nombre`, `edad` y `profesion`.");
    
}
