"use strict";
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
