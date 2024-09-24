"use strict";
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
    //return `${ nombre } ${ restoArgs.join(' ')}`.toUpperCase();
    return `${nombre} ...RESTO: ${restoArgs.join(' ')}`;
};
const superman = nombreCompleto4('Clark', 'Joseph', 'Kent', 'Otro');
console.log(superman);
//Tipo Función
/*
const addNumber = (a:number, b:number):number => {
    return a+b;
}
*/
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
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);
const rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
function imprimirMedidas(casa) {
    var _a;
    const medidaPatio = (_a = casa.patio) === null || _a === void 0 ? void 0 : _a.tamanoM2;
    if (medidaPatio === undefined) {
        console.log('Sin patio');
    }
    else {
        console.log(`El patio mide ${medidaPatio} m2`);
    }
}
let casa = {
    medidaM2: 500,
    patio: {
        tamanoM2: 100
    }
};
imprimirMedidas(casa); // Prints 'Sin patio'
// noImplicitAny
// Cuando no se especifica el tipo de una variable, TypeScript asume any.
// Esto puede llevar a errores en tiempo de ejecución, ya que cualquier valor puede asignarse a una variable any.
// Para evitar este comportamiento, se puede habilitar la opción noImplicitAny en el archivo tsconfig.json.
// Esta opción obliga a especificar el tipo de todas las variables, lo que ayuda a detectar errores en tiempo de compilación.
// strictNullChecks
// La opción strictNullChecks obliga a especificar si una variable puede ser nula o no.
// Esto ayuda a evitar errores en tiempo de ejecución causados por valores nulos o indefinidos.
// Para habilitar esta opción, se puede agregar "strictNullChecks": true en el archivo tsconfig.json.
//strictNullChecks: false
//let myVar: string = null; // Error: Type 'null' is not assignable to type 'string'.
