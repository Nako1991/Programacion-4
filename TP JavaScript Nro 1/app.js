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
    console.log("15. Crear una función `duplicarArray` que tome un array de números como parámetro");
    console.log("y retorne un nuevo array con cada elemento duplicado.");

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42];
    const arregloNumericoDuplicado = duplicarArregloNumerico(arregloNumerico);

    console.log("Arreglo sin duplicar: " + arregloNumerico);
    console.log("Arreglo duplicado: " + arregloNumericoDuplicado);
}

function duplicarArregloNumerico(arregloNumerico) {
    const arregloNumericoDuplicado = [];
    for ( let numero of arregloNumerico ) {
        arregloNumericoDuplicado.push(numero);
        arregloNumericoDuplicado.push(numero);
    }
    return arregloNumericoDuplicado;
}


function ejercicio16() {
    console.log("Ejercicio Nro 16");
    console.log("16. Crear una función `invertirString` que tome una string como parámetro");
    console.log("y retorne la cadena invertida");
    
    const string = new String("Esta frase se va a invertir.");
    let stringInvertida = new String("");
    for ( let caracter of string ) {
        stringInvertida = insertarCaracterAlComienzo(caracter, stringInvertida);
    }

    console.log(`String: ${string}`);
    console.log(`String: ${stringInvertida}`);
}

function insertarCaracterAlComienzo(caracter, string) {
    return caracter + string;
}


function ejercicio17() {
    console.log("Ejercicio Nro 17");
    console.log("17. Crear una función `filtrarPorLongitud` que tome un array de palabras");
    console.log("y un número como parámetro, y retorne un nuevo array con, las palabras");
    console.log("que tienen una longitud mayor al número.");

    const arregloDePalabras = ["ser", "importante", "haber", "estar", "necesario", "tener", "diferente",
        "hacer", "poder", "decir", "relaciones", "ir", "ver","oportunidad", "dar"];
    const longitudPalabra = 5;
    const arregloFiltrado = filtrarPorLongitud(arregloDePalabras, longitudPalabra);

    console.log(arregloDePalabras);
    console.log(arregloFiltrado);
}

function filtrarPorLongitud(arregloDePalabras, longitudMinima) {
    let arregloFiltrado = [];
    for ( let palabra of arregloDePalabras ) {
        const stringPalabra = new String(palabra);
        if( longitudMinima < stringPalabra.length )
            arregloFiltrado.push(palabra);
    }
    return arregloFiltrado;
}


function ejercicio18() {
    console.log("Ejercicio Nro 18");
    console.log("18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades");
    console.log("como `nombre`, `edad` y `promedio`.");

    const arregloDeEstudiantes = crearArregloDeEstudiantes();
    arregloDeEstudiantes.mostrar();
}

function crearArregloDeEstudiantes() {
    const arregloDeEstudiantes = [];
    arregloDeEstudiantes.push(new Estudiante("Laura", 20, 8.7));
    arregloDeEstudiantes.push(new Estudiante("Carlos", 22, 9.1));
    arregloDeEstudiantes.push(new Estudiante("Ana", 19, 8.4));
    arregloDeEstudiantes.push(new Estudiante("Pedro", 21, 7.9));
    arregloDeEstudiantes.push(new Estudiante("Maria", 23, 9.3));
    return arregloDeEstudiantes;
}

function Estudiante(nombre, edad, promedio) {
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
    this.mostrar = function () {
        console.log("Estudiante:");
        console.log("  Nombre: " + this.nombre);
        console.log("  Edad: " + this.edad);
        console.log("  Promedio: " + this.promedio);
    }
}

function ejercicio19() {
    console.log("Ejercicio Nro 19");
    console.log("19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un");
    console.log("nombre, y retorne el objeto del estudiante con ese nombre.");

    const arregloDeEstudiantes = [];
    arregloDeEstudiantes.push(new Estudiante("Laura", 20, 8.7));
    arregloDeEstudiantes.push(new Estudiante("Carlos", 22, 9.1));
    arregloDeEstudiantes.push(new Estudiante("Ana", 19, 8.4));
    arregloDeEstudiantes.push(new Estudiante("Pedro", 21, 7.9));
    arregloDeEstudiantes.push(new Estudiante("Maria", 23, 9.3));

    for ( let estudiante of arregloDeEstudiantes )
        console.log(estudiante);
}


function ejercicio20() {
    console.log("Ejercicio Nro 20");
    console.log("20. Crear una función `promedioClase` que tome el array de estudiantes ");
    console.log("y retorne el promedio de sus promedios");

    const arregloDeEstudiantes = crearArregloDeEstudiantes();
    console.log("Promedio de la clase: " + calcularPromedioClase(arregloDeEstudiantes));
}

function calcularPromedioClase(arregloDeEstudiantes) {
    let sumaPromedioEstudiante = 0;
    let promedioClase = 0.0;
    let cantidadEstudiantes = 0;
    for ( let estudiante of arregloDeEstudiantes ) {
        sumaPromedioEstudiante = sumaPromedioEstudiante + estudiante.promedio;
        cantidadEstudiantes++;
    }
    return sumaPromedioEstudiante / cantidadEstudiantes;
}


function ejercicio21() {
    console.log("Ejercicio Nro 21");
    console.log("21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`,");
    console.log("y métodos como `arrancar` y `detener`.");

    const moto = new Coche("Honda", "cb 190 r", 2017);
    console.log(moto);
}

function Coche(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.arrancar = function () {
        console.log("Arrancando el vehiculo...");
    }
    this.detener = function () {
        console.log("Arrancando el vehiculo...");
    }
}

function ejercicio22() {
    console.log("Ejercicio Nro 22");
    console.log("22. Crear un constructor `Persona` con propiedades `nombre` y `edad`,");
    console.log("y un método `saludar` que imprima un saludo personalizado.");
    
    const persona1 = new Persona("Miguel", 37);
    persona1.saludar();
}

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log("Hola, " + this.nombre)
    }
}

function ejercicio23() {
    console.log("Ejercicio Nro 23");
    console.log("23. Crear un método `agregarProducto` a la función constructora");
    console.log("`Carrito` que agregue un producto al carrito.");

    const carrito = new Carrito();
    const producto1 = (new Producto("Monitor", 4));
    const producto2 = (new Producto("Teclado", 8));
    const producto3 = (new Producto("Mouse", 11));

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);

    console.log("Productos en el carrito: ");
    for ( let producto of carrito.arregloDeProductos )
        producto.mostrar();
}

function Carrito() {
    this.arregloDeProductos = [];
    this.agregarProducto = function (producto) {
        this.arregloDeProductos.push(producto);
    }
}

function Producto(nombre, stock) {
    this.nombre = nombre;
    this.stock = stock;
    this.mostrar = function () {
        console.log("Producto:");
        console.log("  Nombre: " + this.nombre);
        console.log("  Stock: " + this.stock);
    }
}


function ejercicio24() {
    console.log("Ejercicio Nro 24");
    console.log("24. Crear una función `ordenarNumeros` que tome un array de números como");
    console.log("parámetro y retorne un nuevo array con los números ordenados de menor a mayor.");

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const arregloNumericoOrdenado = ordenarArregloNumeros(arregloNumerico);
    
    console.log(arregloNumerico);
    console.log(arregloNumericoOrdenado);
}

function ordenarArregloNumeros(arregloAOrdenar) {
    const arregloNumericoOrdenado = arregloAOrdenar.slice();
    return arregloNumericoOrdenado.sort( (a, b) => a - b );
}

function ejercicio25() {
    console.log("Ejercicio Nro   25");
    console.log("25. Crear una función `eliminarEstudiante` que tome un array de estudiantes");
    console.log("y un nombre, y retorne un nuevo array sin el estudiante con ese nombre");
    
    const arregloEstudiantes = crearArregloDeEstudiantes();
    const arregloEstudiantesFiltrado = eliminarEstudiante(arregloEstudiantes, "Ana");

    console.log(arregloEstudiantes);
    console.log("Eliminando a 'Ana' de la lista de estudiantes");
    console.log(arregloEstudiantesFiltrado);
}

function eliminarEstudiante(arregloEstudiantes, nombre) {
    let arregloEstudiantesNuevo = [];
    let i = 0;
    for ( let estudiante of arregloEstudiantes ) {
        if ( arregloEstudiantes[i].nombre != nombre )
            arregloEstudiantesNuevo.push(estudiante);
        i++;
    }
    return arregloEstudiantesNuevo;
}


function ejercicio26() {
    console.log("Ejercicio Nro 26");
    console.log("26. Crear una función `totalCarrito` que tome un array de productos");
    console.log("y retorne el precio total de los productos.");
    
    let carrito = new Carrito();
    carrito.agregarProducto(new Producto("Harina", 1200));
    carrito.agregarProducto(new Producto("Aceite", 2400));
    carrito.agregarProducto(new Producto("Arroz", 1600));
    carrito.agregarProducto(new Producto("Fideos", 1400));
    carrito.agregarProducto(new Producto("Azucar", 1000));

    console.log(carrito);
    console.log("El precio total por los productos es: " + totalCarrito(carrito.arregloDeProductos));
}

function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
}

function totalCarrito(arregloDeProductos) {
    let total = 0;
    for ( let producto of arregloDeProductos )
        total = total + producto.precio
    return total;
}


function ejercicio27() {
    console.log("Ejercicio Nro 27");
    console.log("27. Crear una función `crearCalculadora` que retorne un objeto con ");
    console.log("métodos `sumar`, `restar`, `multiplicar` y `dividir`.");

    const calculadora = new Calculadora();

    console.log("Probando la calculadora:");
    console.log("Sumando 5 + 3 = " + calculadora.sumar(5, 3));
    console.log("Sumando 7 + (-12) = " + calculadora.sumar(7, -12));
    console.log("Restando 5 - 3 = " + calculadora.restar(5, 3));
    console.log("Restando 7 - (-12) = " + calculadora.restar(7, -12));
    console.log("Multiplicando 5 * 3 = " + calculadora.multiplicar(5, 3));
    console.log("Multiplicando 5 * 0 = " + calculadora.multiplicar(5, 0));
    console.log("Dividiendo 5 / 3 = " + calculadora.dividir(5, 3));
    console.log("Dividiendo 5 / 0 = " + calculadora.dividir(5, 0));
}

function Calculadora() {
    this.sumar = function (num1, num2) {
        return new Number(num1) + new Number(num2);
    }
    this.restar = function (num1, num2) {
        return new Number(num1) - new Number(num2);
    }
    this.multiplicar = function (num1, num2) {
        return new Number(num1) * new Number(num2);
    }
    this.dividir = function (num1, num2) {
        if ( num2 == 0 )
            return "No se puede dividir por 0.";
        else
            return new Number(num1) / new Number(num2);
    }
}


function ejercicio28() {
    console.log("Ejercicio Nro 28");
    console.log("28. Crear una función `crearCuentaBancaria` que retorne un objeto ");
    console.log("con métodos `depositar`, `retirar` y `saldo`");
    
    const cuentaBancaria = new CuentaBancaria("Olmos Fernando", 15322.14);
    console.log(cuentaBancaria.mostrar());
    console.log("Depositando 1500.50 en la cuenta.");
    cuentaBancaria.depositar(1500.50);
    console.log(cuentaBancaria.mostrar());
    console.log("Retirando 5000.21 en la cuenta.");
    cuentaBancaria.retirar(5000.21);
    console.log(cuentaBancaria.mostrar());
}

function CuentaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.depositar = function (deposito) {
        this.saldo = this.saldo + deposito;
    }
    this.retirar = function (retiro) {
        this.saldo = this.saldo - retiro;
    }
    this.mostrar = function () {
        console.log("El titular de la cuenta es: " + this.titular);
        console.log("El saldo de la cuenta es: " + this.saldo);
    }
}


function ejercicio29() {
    console.log("Ejercicio Nro 29");
    console.log("29. Crear un constructor `Libro` con propiedades `titulo`, `autor` ");
    console.log("y `paginas`, y un método `detalles` que imprima la información del libro.");

    const libro1 = new Libro("Libro de ejemplo", "Autor de ejemplo", 376);
    libro1.mostrar();
}

function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.mostrar = function () {
        console.log("El titulo del libro es: " + this.titulo);
        console.log("El autor del libro es: " + this.autor);
        console.log("La cantidad de paginas del libro es: " + this.paginas);
    }
}


function ejercicio30() {
    listaDeTareas.classList.toggle("menu-desplegable");
    window.scrollBy(0, 500);

    const tareas = new ListaDeTareas();
    window.tareas = tareas;
}   

function ListaDeTareas(){
    this.tareas = [];
    this.indice = 0;
    this.listarTareasPendientes = function () {
        const cuadroDeTexto = document.getElementById("cuadroTexto");
        if ( this.tareas.length == 0 )
            cuadroDeTexto.innerText = "No hay tareas en la lista.";
        else {
            let stringTareas = "";
            for ( let tarea of this.tareas )
                if ( tarea.completada == false )
                    stringTareas = stringTareas.concat(tarea.toString());
            cuadroDeTexto.innerText = stringTareas;
        }
    }
    this.agregarTarea = function () {
        const titulo = document.getElementById("titulo").value;
        const inicio = document.getElementById("inicio").value;
        const tarea = new Tarea(titulo, inicio, this.indice);
        this.indice++;
        this.tareas.push(tarea);
        document.getElementById("titulo").value = "";
        document.getElementById("inicio").value = "";
        this.listarTareasPendientes();
    }
}

function Tarea(titulo, inicio, indice) {
    this.titulo = titulo;
    this.inicio = inicio;
    this.indice = indice;
    this.completada = false;
    this.mostrar = function () {
        console.log("Tarea:");
        console.log("  Titulo: " + this.titulo);
        console.log("  Inicio: " + this.inicio);
        console.log("  completada: " + this.completada);
    }
    this.toString = function () {
        return  `Tarea: ${this.indice + 1} \n  ${this.titulo}\n  ${this.inicio}\n`;
    }
}
