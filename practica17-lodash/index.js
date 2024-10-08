//Lodash 
const _ = require('lodash');


//Ejercicio 1, chunk sirve para dividir un array en subarrays de un tamaño determinado

console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

let arreglo = ['Juan', 'Pedro', 'Luis', 'Maria', 'Ana', 'Jose', 'Carlos', 'Rosa'];
console.log(_.chunk(arreglo, 2));

//Ejercicio 2, compact sirve para eliminar los valores falsy de un array
console.log(_.compact([0, 1, false, 2, '', 3]));

//Ejercicio 3, concat sirve para concatenar arrays
let array1 = ['Superman', 'Batman', 'Flash'];
let array2 = ['Wonder woman', 'Aquaman', 'Green Lantern'];
console.log(_.concat(array1, array2));

//Ejercicio 4, difference sirve para comparar dos arrays y devolver los valores que no se encuentran en el 2do array

let array3 = ['El chavo', 'El chapulin colorado', 'Chespirito', 'El doctor chapatin'];
let array4 = ['El chavo', 'El chapulin colorado', 'El doctor chapatin'];

console.log(_.difference(array3, array4));

//Ejercicio 5, drop sirve para eliminar los primeros n elementos de un array
let array5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(_.drop(array5, 5));

const numeroAleatorio = _.random(0, 100);
console.log(numeroAleatorio);

// Once lodash 

const saludar = () => {
    console.log('Hola Mayito');
}

const saludarMayito = _.once(saludar);

saludarMayito();
saludarMayito();


const users = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Tom', age: 20 }
  ];

const sortedUsers = _.orderBy(users, ['name'], ['des']);
console.log(sortedUsers);

const obtieneNumero = () => {
    return _.random(0, 100);
}

let result = _.times(5, obtieneNumero);
console.log('resultado:',result);


//fin de la practica 17












