
const nuevoHeroe: string = 'Flash';

function returnName():string {
    return nuevoHeroe;
}

const heroeNombre = returnName();
console.log(heroeNombre);

// Funciones en TypeScript, asignar funcion a una constante, no se puede asignar a una variable
const activarBatiSenal = ():string => {
    return 'BatiSeñal Activada!';
}

//let mensaje = activarBatiSenal(); //error

console.log('typeof activarBatiSenal :',typeof activarBatiSenal);


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
    //return `${ nombre } ${ restoArgs.join(' ')}`.toUpperCase();
    return `${ nombre } ...RESTO: ${ restoArgs.join(' ')}`;
}

const superman = nombreCompleto4('Clark','Joseph','Kent','Otro');
console.log(superman);


//Tipo Función

/*
const addNumber = (a:number, b:number):number => {
    return a+b;
}
*/


const greet = (name:string) => `Hola ${name}`;
const saveTheWorld = ():string => 'El mundo esta salvado';

let myFunction:Function;

//myFunction = 10;
//console.log(myFunction);

//myFunction = addNumberX(5,8);
//console.log(myFunction);

myFunction = greet;
console.log(myFunction('Juan'));

myFunction = saveTheWorld;
console.log(myFunction());


//Type Aliases
// Se pueden crear tipos personalizados
//Type Aliases allow defining types with a custom name (an Alias).
//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car);

//Interfaces
//Las interfaces se utilizan para definir la estructura de un objeto.
//Las interfaces son similares a los alias de tipo pero con algunas diferencias clave:
// Las interfaces se pueden nombrar en un tipo de objeto, pero los alias de tipo para los objetos no.
// Las interfaces se pueden ampliar, pero los alias de tipo no.
interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

console.log(rectangle);


// Optional Chaining
/* El encadenamiento opcional es una característica de JavaScript que 
funciona bien con el manejo de nulos de TypeScript. Permite acceder a
 propiedades de un objeto, que pueden existir o no, con una sintaxis compacta. 
 Se puede utilizar con el ?. operador al acceder a las propiedades. 
    Si la propiedad es nula o indefinida, el resultado es indefinido. */


interface Casa {
    medidaM2: number;
    //patio: {
    patio: {
        tamanoM2: number;
    };
    }


function imprimirMedidas(casa: Casa) {
    const medidaPatio = casa.patio?.tamanoM2;
    if (medidaPatio === undefined) {
        console.log('Sin patio');
    } else {
        console.log(`El patio mide ${medidaPatio} m2`);
    }
}
    
let casa: Casa = {
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