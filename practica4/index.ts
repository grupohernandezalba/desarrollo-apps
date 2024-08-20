function saludo(nombre:string):string {
    return `Hola ${nombre}`;
}

console.log(saludo("Jorge"));

//Void

function advertencia():void {
    console.log("Cuidado!");
}

advertencia();


//Never

function error(mensaje:string):never {
    throw new Error(mensaje);
}

//error("Error crítico");

//Parametros opcionales

function saludo2(nombre?:string):string {
    if(nombre) {
        return `Hola ${nombre}`;
    } else {
        return `Hola`;
    }
}

console.log(saludo2());
console.log(saludo2("Jorge"));

//Tipo funcion

function suma(a:number, b:number):number {
    return a + b;
}

let miFuncion:(a:number, b:number) => number;

miFuncion = suma;

console.log(miFuncion(2, 3));


//Tipo literal

type accion = 'suma' | 'resta';
function operacion(a:number, b:number, operacion:accion):number {
    if(operacion === 'suma') {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(operacion(2, 3, 'suma'));


const nuevoHeroe: string = 'Flash';

function returnName():string {
    return nuevoHeroe;
}


const activarBatiSenal = ():string => {
    return 'BatiSeñal Activada!';
}

console.log(typeof activarBatiSenal);

const heroeNombre = returnName();

//Parametros obligatorios en funciones

const nombreCompleto = (nombre:string,apellido:string):string => {
    return `${ nombre } ${ apellido }`;
}

const tuNombre = nombreCompleto('Juan', 'Perez');

//const otroNombre = nombreCompleto('Juan', true);
console.log(tuNombre);


//Parametros opcionales en funciones


const nombreCompleto2 = (nombre:string,apellido?:string):string => {
    return `${ nombre } ${ apellido || 'sin apellido' }`;
}

const tuNombre2 = nombreCompleto2('Juan');
console.log(tuNombre2);


//Parametros por defecto en funciones


const nombreCompleto3 = (nombre:string,apellido?:string, upper:boolean = false):string => {
    
    if(upper)
    {
        return `${ nombre } ${ apellido || 'sin apellido' }`.toUpperCase();
    }
    else{
        return `${ nombre } ${ apellido || 'sin apellido' }`;
    }

}


const tuNombre3 = nombreCompleto3('Juan','Perez',true);
console.log(tuNombre3);


//Operador REST
const nombreCompleto4 = (nombre:string, ...restoArgs:string[]) =>{
    return `${ nombre } ${ restoArgs.join(' ')}`.toUpperCase();
}

const superman = nombreCompleto4('Clark','Joseph','Kent','Otro');
console.log(superman);


//Tipo Función

/*
const addNumber = (a:number, b:number):number => {
    return a+b;
}
*/

const addNumber = (a:number, b:number):number => a+b;

console.log(addNumber(5.3,8.8).toFixed(2));

const addNumberX =  (a:number, b:number):number => a+b;

const greet = (name:string) => `Hola ${name}`;

const saveTheWorld = () => 'El mundo esta salvado';

let myFunction:Function;

//myFunction = 10;
//console.log(myFunction);

//myFunction = addNumberX(5,8);
//console.log(myFunction);

myFunction = greet;
console.log(myFunction('Juan'));

myFunction = saveTheWorld;
console.log(myFunction());

let miArreglo: string[] = ['a','b','c']
console.log(miArreglo);