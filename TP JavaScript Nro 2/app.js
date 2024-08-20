"use strict"
function desplegarResolucion(numeroDeEjercicio) {
    let stringEjercicio = "ejercicio" + numeroDeEjercicio;
    const desplegar = document.getElementById(stringEjercicio);
    desplegar.classList.toggle("menu-desplegable");
}

function ejercicio1() {
    desplegarResolucion(1);

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    
    const suma = sumarElementosArreglo(arregloNumerico);
    
    let resolucionEjercicio1 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio1 += "La suma de todos los elementos es de: " + suma + "\n";

    document.getElementById("resolucionEjercicio1").innerText = resolucionEjercicio1;
}

function sumarElementosArreglo(arregloNumerico) {
    const suma = arregloNumerico.reduce(function(total, numero) { //total: acumulador, numero: elemento del array iterativo
        return total + numero;
    }, 0); // Se setea en 0 inicialmente el total
    return suma;
}

function ejercicio2() {
    desplegarResolucion(2);
    
    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    
    const suma = sumarElementosArreglo(arregloNumerico);
    const elementos = arregloNumerico.length;
    const promedio = calcularPromedioArreglo(arregloNumerico);
    
    let resolucionEjercicio2 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio2 += "La suma de todos los elementos es de: " + suma + "\n";
    resolucionEjercicio2 += "La cantidad de elementos del arreglo es de: " + elementos + "\n";
    resolucionEjercicio2 += "El promedio del arreglo es de: " + promedio + "\n";

    document.getElementById("resolucionEjercicio2").innerText = resolucionEjercicio2;
}

function calcularPromedioArreglo(arregloNumerico) {
    const suma = sumarElementosArreglo(arregloNumerico);
    const elementos = arregloNumerico.length;
    const promedio = suma / elementos;
    return promedio;
}

function ejercicio3() {
    desplegarResolucion(3);

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const maximo = encontrarMaximoNumero(arregloNumerico);
    const minimo = encontrarMinimoNumero(arregloNumerico);
    
    let resolucionEjercicio3 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio3 += "El maximo valor de los elementos es de: " + maximo + "\n";
    resolucionEjercicio3 += "El minimo valor de los elementos es de: " + minimo + "\n";

    document.getElementById("resolucionEjercicio3").innerText = resolucionEjercicio3;
}

function encontrarMaximoNumero(arregloNumerico) {
    const maximo = arregloNumerico.reduce( (max, numero) => numero > max ? numero : max, arregloNumerico[0] );
    return maximo;
}

function encontrarMinimoNumero(arregloNumerico) {
    const minimo = arregloNumerico.reduce( (min, numero) => numero < min ? numero : min, arregloNumerico[0] );
    return minimo;
}

function ejercicio4() {
    desplegarResolucion(4);

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const valorBuscado = 18;
    const indiceEncontrado = buscarValorNumerico(arregloNumerico, valorBuscado);

    let resolucionEjercicio4 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio4 += "El elemento buscado es: " + valorBuscado + "\n";
    if ( indiceEncontrado != -1 )
        resolucionEjercicio4 += "El indice del elemento buscado es de: " + indiceEncontrado + "\n";
    else
        resolucionEjercicio4 += "No se encontro el elemento dentro del array.\n";

    document.getElementById("resolucionEjercicio4").innerText = resolucionEjercicio4;
}

function buscarValorNumerico(arregloNumerico, valorBuscado) {
    const indiceEncontrado = arregloNumerico.findIndex( numero => numero == valorBuscado );
    return indiceEncontrado;
}

function ejercicio5() {
    desplegarResolucion(5);

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const arregloNumericoPares = filtrarParesArregloNumerico(arregloNumerico);
    const arregloNumericoImpares = filtrarImparesArregloNumerico(arregloNumerico);

    let resolucionEjercicio5 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio5 += "Arreglo numerico pares: " + arregloNumericoPares.toString() + "\n";
    resolucionEjercicio5 += "Arreglo numerico impares: " + arregloNumericoImpares.toString() + "\n";

    document.getElementById("resolucionEjercicio5").innerText = resolucionEjercicio5;
}

function filtrarParesArregloNumerico(arregloNumerico) {
    return arregloNumerico.filter( numero => numero % 2 === 0 );
}

function filtrarImparesArregloNumerico(arregloNumerico) {
    return arregloNumerico.filter( numero => numero % 2 === 1 );
}

function ejercicio6() {
    desplegarResolucion(6);

    const arregloNumerico = [12, 12, 8, 21, 7, 7, 7, 29, 42, 11, 15, 15, 24, 31, 31, 9, 14, 33, 50, 50];
    const arregloNumericoSinDuplicados = filtrarDuplicadosArregloNumerico(arregloNumerico);

    let resolucionEjercicio6 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio6 += "Arreglo numerico sin duplicados: " + arregloNumericoSinDuplicados.toString() + "\n";

    document.getElementById("resolucionEjercicio6").innerText = resolucionEjercicio6;
}

function filtrarDuplicadosArregloNumerico(arregloNumerico) {
    const arregloNumericoSinDuplicados = [... new Set(arregloNumerico)];
    return arregloNumericoSinDuplicados;
}

function ejercicio7() {
    desplegarResolucion(7);

    const arregloNumerico = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11, 6, 15, 24, 31, 48, 9, 14, 33, 50, 27];
    const arregloNumericoOrdenado = ordenarArregloNumerico(arregloNumerico);

    let resolucionEjercicio7 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio7 += "Arreglo numerico ordenado: " + arregloNumericoOrdenado.toString() + "\n";

    document.getElementById("resolucionEjercicio7").innerText = resolucionEjercicio7;
}

function ordenarArregloNumerico(arregloNumerico) {
    const arregloNumericoOrdenado = arregloNumerico.slice(); //slice crea una copia para no modificar el original
    return arregloNumericoOrdenado.sort( (a, b) => a - b );
}

function ejercicio8() {
    desplegarResolucion(8);

    const arregloNumerico = [12, 12, 8, 21, 7, 7, 7, 29, 42, 11, 15, 15, 24, 31, 31, 9, 14, 33, 50, 50];
    const arregloNumericoSinEliminados = eliminarValorArregloNumerico(arregloNumerico, 7);

    let resolucionEjercicio8 = "Arreglo numerico: " + arregloNumerico.toString() + "\n";
    resolucionEjercicio8 += "Numero a eliminar: 7" + "\n";
    resolucionEjercicio8 += "Arreglo numerico ordenado: " + arregloNumericoSinEliminados.toString() + "\n";

    document.getElementById("resolucionEjercicio8").innerText = resolucionEjercicio8;
}

function eliminarValorArregloNumerico(arregloNumerico, numeroAEliminar) {
    let arregloNumericoSinEliminados = [];
    let i = 0;
    for ( let numero of arregloNumerico ) {
        if ( arregloNumerico[i] != numeroAEliminar )
            arregloNumericoSinEliminados.push(numero);
        i++;
    }
    return arregloNumericoSinEliminados;
}

function ejercicio9() {
    desplegarResolucion(9);

    const arregloNumerico1 = [12, 6, 8, 21, 7, 9, 14, 33, 50, 50];
    const arregloNumerico2 = [12, 5, 8, 21, 34, 7, 18, 29, 42, 11];
    let arregloCombinadoSinDuplicados = [... new Set(arregloNumerico1), ... new Set(arregloNumerico2)];
    arregloCombinadoSinDuplicados = filtrarDuplicadosArregloNumerico(arregloCombinadoSinDuplicados);

    let resolucionEjercicio9 = "Arreglo numerico 1: " + arregloNumerico1.toString() + "\n";
    resolucionEjercicio9 += "Arreglo numerico 2: " + arregloNumerico2.toString() + "\n";
    resolucionEjercicio9 += "Arreglo numerico combinado: " + arregloCombinadoSinDuplicados.toString() + "\n";

    document.getElementById("resolucionEjercicio9").innerText = resolucionEjercicio9;
}

function ejercicio10() {
    desplegarResolucion(10);

    const listaDeCompras = new ListaDeCompras();
    const producto1 = new Producto("Arroz", 5);
    listaDeCompras.agregarProducto(producto1);

    console.log(listaDeCompras);
    console.log(producto1);
    listaDeCompras.mostrarLista();
}

function ListaDeCompras() {
    this.lista = [];
    this.agregarProducto = function (producto) {
        this.lista.push(producto);
    }
    this.mostrarLista = function () {
        console.log("Lista de compras:");
        for ( let producto of this.lista )
            producto.mostrar();
    }
}

function Producto(nombre, stock) {
    this.nombre = nombre;
    this.stock = stock;
    this.mostrar = function () {
        console.log("Producto: ");
        console.log("  Nombre: " + this.nombre);
        console.log("  Stock: " + this.stock);
    }
}