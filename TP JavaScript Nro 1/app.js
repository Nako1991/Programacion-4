"use strict";
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

    const persona = {
        nombre: "Nano",
        edad: 33,
        profesion: "Programador",
    };

    console.log(persona);
    console.log(`Persona: `);
    console.log(`  Nombre: ${persona.nombre}`);
    console.log(`  Edad: ${persona.edad}`);
    console.log(`  Profesion: ${persona.profesion}`);
}


function ejercicio8() {
    console.log("Ejercicio Nro 8");
    console.log("Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`,");
    console.log("y cree un objeto con esas propiedades.");

    const producto1 = new Producto("Desodorante", 2000, 5);
    const producto2 = new Producto("Arroz", 3000, 10);
    const producto3 = new Producto("Salsa", 1500, 8);

    producto1.mostrar();
    producto2.mostrar();
    producto3.mostrar();
}

function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.mostrar = function () {
        console.log(`Producto: `);
        console.log(`  Nombre: ${this.nombre}`);
        console.log(`  Precio: ${this.precio}`);
        console.log(`  Stock: ${this.stock}`);
    }
}


function ejercicio9() {
    console.log("Ejercicio Nro 9");
    console.log("9. Crear un objeto `pelicula` utilizando el constructor `Pelicula`");
    console.log("con propiedades como `titulo`, `director` y `anio`.");

    const pelicula1 = new Pelicula(
        "El Señor de los Anillos: La Comunidad del Anillo",
        "Peter Jackson",
        2001);
    const pelicula2 = new Pelicula(
        "Dune",
        "Denis Villeneuve",
        2021);
    const pelicula3 = new Pelicula(
        "2001: Una Odisea del Espacio",
        "Stanley Kubrick",
        1968);
    pelicula1.mostrar();
    pelicula2.mostrar();
    pelicula3.mostrar();
}

function Pelicula(titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
    this.mostrar = function () {
        console.log(`Pelicula: `);
        console.log(`  Titulo: ${this.titulo}`);
        console.log(`  Director: ${this.director}`);
        console.log(`  Anio: ${this.anio}`);
    }
}


function ejercicio10() {
    console.log("Ejercicio Nro 10");
    console.log("10. Crear un array `frutas` con varios nombres de frutas.");
    console.log("Imprimir el tercer elemento del array.");

    const arregloDeFrutas = [
        "Manzana", "Banana", "Naranja", "Frutilla", "Uva",
        "Melon", "Anana", "Sandia", "Kiwi", "Durazno"];
    
    console.log(arregloDeFrutas);
    console.log(`Mostrando el tercer elemento del arreglo: ${arregloDeFrutas[2]}`);
}


function ejercicio11() {
    console.log("Ejercicio Nro 11");
    console.log("11. Agregar una fruta más al final del array `frutas`.");
    console.log("Imprimir el array actualizado.");

    const arregloDeFrutas = [
        "Manzana", "Banana", "Naranja", "Frutilla", "Uva",
        "Melon", "Anana", "Sandia", "Kiwi", "Durazno"];
    
    console.log(arregloDeFrutas);
    
    arregloDeFrutas.push("Higo");

    console.log(arregloDeFrutas);
}


function ejercicio12() {
    console.log("Ejercicio Nro 12");
    console.log("12. Crear una función `filtrarPares` que tome un array de números como parámetro");
    console.log("y retorne un nuevo array solo con los números pares.");
    
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const arregloNumericoPar = arregloNumerico.filter( arregloNumerico => arregloNumerico % 2 === 0 );

    console.log("Arreglo numerico sin filtrar: " + arregloNumerico);
    console.log("Arreglo numerico filtrado: " + arregloNumericoPar);
}


function ejercicio13() {
    console.log("Ejercicio Nro 13");
    console.log("13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`,");
    console.log("y retorne un objeto persona con esas propiedades.");

    const persona1 = new Persona("Matias", 22);
    const persona2 = new Persona("Ricardo", 40);
    const persona3 = new Persona("Nilda", 65);

    persona1.mostrar();
    persona2.mostrar();
    persona3.mostrar();
}

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.mostrar = function () {
        console.log(`Persona: `);
        console.log(`  Nombre: ${this.nombre}`);
        console.log(`  Edad: ${this.edad}`);
    }
}


function ejercicio14() {
    console.log("Ejercicio Nro 14");
    console.log("14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro");
    console.log("y retorne una cadena con su información.");

    const persona1 = new Persona("Hugo", 12);
    const persona2 = new Persona("Maria", 30);
    const persona3 = new Persona("Cristina", 32);

    console.log(obtenerInfoPersona(persona1));
    console.log(obtenerInfoPersona(persona2));
    console.log(obtenerInfoPersona(persona3));
}

function obtenerInfoPersona(persona) {
    return `Persona: \n  Nombre: ${persona.nombre}\n  Edad: ${persona.edad}`;
}


function ejercicio15() {
    console.log("Ejercicio Nro 15");
    
}


function ejercicio16() {
    console.log("Ejercicio Nro 16");

}


function ejercicio17() {
    console.log("Ejercicio Nro 17");

}