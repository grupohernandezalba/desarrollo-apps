// Funciones de primer orden, funciones que pueden ser asignadas a variables
function sum(a, b) {
    return a + b;
}
var resultado = sum(2, 3);
console.log(resultado);
var fSum = sum;
resultado = fSum(2, 3);
console.log(resultado);
// Funciones de orden superior, funciones que reciben funciones como argumentos
function operation(fn, a, b) {
    console.log("Entro a operation");
    console.log('Resultado Operation:', fn(a, b));
}
console.log(operation(sum, 5, 3));
//Funciones arrow, funciones anonimas que se pueden asignar a variables
var funcionAnonima = function () {
    console.log("Entro a funcionAnonima");
};
funcionAnonima();
// Entonces funcionAnonima es una variable o es una función? 
console.log('funcionAnonima:', funcionAnonima);
var funcionAnonima2 = function () {
    console.log("Entro a funcionAnonima2");
};
funcionAnonima2();
var funcionAnonima3 = function () { return console.log("Entro a funcionAnonima3"); };
funcionAnonima3();
//Funciones flecha con parametros
console.log(operation(function (a, b) { return a * b; }, 5, 5));
//Funciones flecha con cuerpo de funcion
console.log(operation(function (a, b) {
    var c = a * b;
    return c * 2;
}, 5, 5));
//foreach
var names = ['Hugo', 'Paco', 'Luis'];
names.forEach(function (name) { return console.log(name); });
names.forEach(function (name) { return console.log(name.toUpperCase()); }); // forEach no modifica el arreglo original
console.log(names);
names.sort(); // Sort es un metodo mutable que modifica el arreglo original
console.log(names);
// Usando template strings
function saludo(nombre) {
    return "Hola ".concat(nombre);
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
        return "Hola ".concat(nombre);
    }
    else {
        return "Hola";
    }
}
console.log(saludo2());
console.log(saludo2("Jorge"));
//Tipo funcion, 
function suma(a, b) {
    return a + b;
}
var miFuncion;
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
var nuevoHeroe = 'Flash';
function returnName() {
    return nuevoHeroe;
}
var heroeNombre = returnName();
console.log(heroeNombre);
// Funciones en TypeScript, asignar funcion a una constante, no se puede asignar a una variable
var activarBatiSenal = function () {
    return 'BatiSeñal Activada!';
};
//let mensaje = activarBatiSenal(); //error
console.log('typeof activarBatiSenal :', typeof activarBatiSenal);
//Parametros obligatorios en funciones
var nombreCompleto = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido);
};
var tuNombre = nombreCompleto('Juan', 'Perez');
//const otroNombre = nombreCompleto('Juan', true);
console.log(tuNombre);
//Parametros opcionales en funciones
var nombreCompleto2 = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido || 'sin apellido');
};
var tuNombre2 = nombreCompleto2('Juan');
console.log(tuNombre2);
//Parametros por defecto en funciones
var nombreCompleto3 = function (nombre, apellido, upper) {
    if (upper === void 0) { upper = false; }
    if (upper) {
        return "".concat(nombre, " ").concat(apellido || 'sin apellido').toUpperCase();
    }
    else {
        return "".concat(nombre, " ").concat(apellido || 'sin apellido');
    }
};
var tuNombre3 = nombreCompleto3('Juan', 'Perez', true);
console.log(tuNombre3);
//Operador REST
var nombreCompleto4 = function (nombre) {
    var restoArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restoArgs[_i - 1] = arguments[_i];
    }
    return "".concat(nombre, " ").concat(restoArgs.join(' ')).toUpperCase();
};
var superman = nombreCompleto4('Clark', 'Joseph', 'Kent', 'Otro');
console.log(superman);
//Tipo Función
/*
const addNumber = (a:number, b:number):number => {
    return a+b;
}
*/
var addNumber = function (a, b) { return a + b; };
console.log(addNumber(5.3, 8.8).toFixed(2));
var addNumberX = function (a, b) { return a + b; };
var greet = function (name) { return "Hola ".concat(name); };
var saveTheWorld = function () { return 'El mundo esta salvado'; };
var myFunction;
//myFunction = 10;
//console.log(myFunction);
//myFunction = addNumberX(5,8);
//console.log(myFunction);
myFunction = greet;
console.log(myFunction('Juan'));
myFunction = saveTheWorld;
console.log(myFunction());
var miArreglo = ['a', 'b', 'c', 'd'];
console.log(miArreglo);
