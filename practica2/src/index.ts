let texto: string = 'Tipo de dato string';

console.log(texto);

let miNumero: number = 10;

miNumero = 20;
miNumero = 10 + 10;
miNumero = 2.5;
console.log(miNumero);


let booleano: boolean = true;
booleano = false;
booleano = !booleano;

booleano = !booleano;
booleano = true;
//booleano = 3;
//booleano = null;

let encendido: boolean;
//console.log(encendido);
encendido = true;
console.log("Encendido es: " , encendido);
console.log("Encendido es: " , { encendido } );

encendido = true && false;
console.log("Encendido && es: " , { encendido });

encendido = true || false;
console.log("Encendido || es: " , { encendido });

let valor:boolean  = (encendido) ? true : false;
//let valor:boolean  = (encendido) ? 'true' : 'false';
console.log("Valor es: " , { valor });



console.log(booleano);

let normal: any = 'hola';
normal = 10;
//normal = true;

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


let nombre: string = 'Juan';
nombre = 'Juan Carlos';
//nombre = null
console.log(nombre);


let value: any;

value = true; // OK
value = 42; // OK
value = "Hola TS"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK


let miValor: unknown;

let value1: unknown = miValor; // OK
let value2: any = miValor; // OK

/*
let value3: boolean = miValor; // Error
let value4: number = miValor; // Error
let value5: string = miValor; // Error
let value6: object = miValor; // Error
let value7: any[] = miValor; // Error
let value8: Function = miValor; // Error
*/

let desconocido:unknown = 10;
desconocido = true;
desconocido = 'hola';
desconocido = 10 + 10;

if (typeof desconocido === 'number') {
    let suma = desconocido + 10;
    console.log("Suma:",suma);
}
console.log(desconocido);




console.log(normal);

//numbers

const edad: number = 18;    
console.log('Edad:',edad);

const sueldo: number = 1.234;
const total: number = Number('123.456');
console.log('Total:',total);

 


//Cadenas

const personaje:string = "El chavo";
const otroPersonaje:string = 'Don Ramon';
const otroMas:string = `El chapulin colorado`;
//const heroe:string = 'Superman's house';
const heroe:string = "Superman's house";
const otroHeroe:string = 'Batman\'s house';

console.log(otroHeroe);

console.log(otroHeroe.toUpperCase());

console.log(personaje[10]?.toLowerCase() || 'No hay personaje');


//Any

//const villano;
let vengador:any;
vengador = 'Dr. Strange';
console.log(vengador.charAt(0));

vengador = 150.555;
console.log(vengador.toFixed(1));

console.log((vengador as number).toFixed(3));

console.log(<number>vengador.toFixed(1));