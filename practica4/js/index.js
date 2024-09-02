"use strict";
// Funciones de primer orden
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado);
const fSum = sum;
resultado = fSum(2, 3);
console.log(resultado);
// Funciones de orden superior
function operation(fn, a, b) {
    console.log("Entro a operation");
    console.log('Resultado Operation:', fn(a, b));
}
console.log(operation(sum, 5, 3));
//Funciones arrow
let funcionAnonima = function () {
    console.log("Entro a funcionAnonima");
};
funcionAnonima();
let funcionAnonima2 = () => {
    console.log("Entro a funcionAnonima2");
};
funcionAnonima2();
let funcionAnonima3 = () => console.log("Entro a funcionAnonima3");
funcionAnonima3();
console.log(operation((a, b) => a * b, 5, 5));
console.log(operation((a, b) => {
    const c = a * b;
    return c * 2;
}, 5, 5));
//foreach
const names = ['Hugo', 'Paco', 'Luis'];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase())); // forEach no modifica el arreglo original
console.log(names);
names.sort(); // Sort es un metodo mutable que modifica el arreglo original
console.log(names);
//map
function saludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludo("Jorge"));
//Void
function advertencia() {
    console.log("Cuidado!");
}
advertencia();
//Never
function error(mensaje) {
    throw new Error(mensaje);
}
//error("Error crítico");
//Parametros opcionales
function saludo2(nombre) {
    if (nombre) {
        return `Hola ${nombre}`;
    }
    else {
        return `Hola`;
    }
}
console.log(saludo2());
console.log(saludo2("Jorge"));
//Tipo funcion
function suma(a, b) {
    return a + b;
}
let miFuncion;
miFuncion = suma;
console.log(miFuncion(2, 3));
function operacion(a, b, operacion) {
    if (operacion === 'suma') {
        return a + b;
    }
    else {
        return a - b;
    }
}
console.log(operacion(2, 3, 'suma'));
const nuevoHeroe = 'Flash';
function returnName() {
    return nuevoHeroe;
}
const activarBatiSenal = () => {
    return 'BatiSeñal Activada!';
};
console.log(typeof activarBatiSenal);
const heroeNombre = returnName();
//Parametros obligatorios en funciones
const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const tuNombre = nombreCompleto('Juan', 'Perez');
//const otroNombre = nombreCompleto('Juan', true);
console.log(tuNombre);
//Parametros opcionales en funciones
const nombreCompleto2 = (nombre, apellido) => {
    return `${nombre} ${apellido || 'sin apellido'}`;
};
const tuNombre2 = nombreCompleto2('Juan');
console.log(tuNombre2);
//Parametros por defecto en funciones
const nombreCompleto3 = (nombre, apellido, upper = false) => {
    if (upper) {
        return `${nombre} ${apellido || 'sin apellido'}`.toUpperCase();
    }
    else {
        return `${nombre} ${apellido || 'sin apellido'}`;
    }
};
const tuNombre3 = nombreCompleto3('Juan', 'Perez', true);
console.log(tuNombre3);
//Operador REST
const nombreCompleto4 = (nombre, ...restoArgs) => {
    return `${nombre} ${restoArgs.join(' ')}`.toUpperCase();
};
const superman = nombreCompleto4('Clark', 'Joseph', 'Kent', 'Otro');
console.log(superman);
//Tipo Función
/*
const addNumber = (a:number, b:number):number => {
    return a+b;
}
*/
const addNumber = (a, b) => a + b;
console.log(addNumber(5.3, 8.8).toFixed(2));
const addNumberX = (a, b) => a + b;
const greet = (name) => `Hola ${name}`;
const saveTheWorld = () => 'El mundo esta salvado';
let myFunction;
//myFunction = 10;
//console.log(myFunction);
//myFunction = addNumberX(5,8);
//console.log(myFunction);
myFunction = greet;
console.log(myFunction('Juan'));
myFunction = saveTheWorld;
console.log(myFunction());
let miArreglo = ['a', 'b', 'c'];
console.log(miArreglo);
// Reto
// Usando TS y desetructracion de variables hay que
// generar una serie de Fibonaccio con hasta 100 veces
/*

En matemática, la sucesión de Fibonacci se trata de una serie infinita de números naturales que empieza con un 0 y un 1 y continúa añadiendo números que son la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987

Graficar los resultados en pantalla
*/
function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
const n = 25; // Change this value to generate Fibonacci series up to a different number
const fibonacci = fibonacciSeries(n);
console.log(fibonacci); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
