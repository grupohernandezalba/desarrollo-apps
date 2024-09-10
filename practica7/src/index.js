"use strict";
// Funciones de primer orden, funciones que pueden ser asignadas a variables
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado);
const fSum = sum;
resultado = fSum(2, 3);
console.log(resultado);
// Funciones de orden superior, funciones que reciben funciones como argumentos
function operation(fn, a, b) {
    console.log("Entro a operation");
    console.log('Resultado Operation:', fn(a, b));
}
console.log(operation(sum, 5, 3));
//Funciones arrow, funciones anonimas que se pueden asignar a variables
let funcionAnonima = function () {
    console.log("Entro a funcionAnonima");
};
funcionAnonima();
// Entonces funcionAnonima es una variable o es una función? 
console.log('funcionAnonima:', funcionAnonima);
let funcionAnonima2 = () => {
    console.log("Entro a funcionAnonima2");
};
funcionAnonima2();
let funcionAnonima3 = () => console.log("Entro a funcionAnonima3");
funcionAnonima3();
//Funciones flecha con parametros
console.log(operation((a, b) => a * b, 5, 5));
//Funciones flecha con cuerpo de funcion
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
// Usando template strings
function saludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludo("Jorge"));
//Void
function advertencia() {
    console.log("Cuidado!");
}
advertencia();
//Never, no retorna nada y lanza una excepción
function error(mensaje) {
    throw new Error(mensaje);
}
//error("Error crítico");
//Parametros opcionales, se pueden asignar valores por defecto o no asignar valores
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
//Tipo funcion, 
function suma(a, b) {
    return a + b;
}
let miFuncion;
// Asi se asigna una funcion a una variable de tipo funcion
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
console.log(operacion(2, 3, 'resta'));
//console.log(operacion(2, 3, 'multiplicacion')); // Error de compilación
const nuevoHeroe = 'Flash';
function returnName() {
    return nuevoHeroe;
}
const heroeNombre = returnName();
console.log(heroeNombre);
// Funciones en TypeScript, asignar funcion a una constante, no se puede asignar a una variable
const activarBatiSenal = () => {
    return 'BatiSeñal Activada!';
};
//let mensaje = activarBatiSenal(); //error
console.log('typeof activarBatiSenal :', typeof activarBatiSenal);
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
