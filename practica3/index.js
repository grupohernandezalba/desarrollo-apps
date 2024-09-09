"use strict";
let personas = ["Hugo", "Paco", "Luis"];
console.log(personas);
personas.push("Donald");
console.log(personas);
//personas.push(1);
console.log(personas);
let numeros = [1, 2, 3, 4, 5];
let numeros2 = [1, 2, 3, 4, 5];
//numeros2.push("hola");
console.log(numeros);
console.log(numeros2);
let miArray = [1, 2, 3, 4, 5];
let miArray2 = [1, 2, 3, 4, 5];
//Union de tipos 
let miArray3 = [1, 2, 3, 4, 5, 'hola'];
let miArray4 = [1, 2, 3, 4, 5, 'hola'];
let miArray5 = [1, 2, 3, 4, 5, 'hola', true];
let miArray6 = [];
miArray6.push(1);
miArray6.push(2);
miArray6.push(3);
console.log('Array:', miArray6);
let miArray7 = [];
miArray7.push(1);
console.log('Array:', miArray7);
let miArray8 = [];
miArray8.push(1);
miArray8.push('hola');
miArray8.push(true);
console.log('Array:', miArray8);
//Tuplas
let tupla = ["Jorge", 35];
console.log(tupla);
console.log(typeof tupla);
console.log(tupla[0]);
// define our tuple
let ourTuple;
// initialize correctly
//ourTuple = [5, false, 'Coding God was here',20];
//ourTuple = ['Hola', false, 'Coding God was here'];
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
//console.log(ourTuple[3]);
// define our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple);
//ourReadonlyTuple[0] = 10;
//ourReadonlyTuple[1] = false;
//Named Tuple
const graph = [55.2, 41.3];
console.log(graph);
// Desestructuración de tuplas
let tupla2 = ["Jorge", 35];
let [nombre2, edad2] = tupla2;
console.log(nombre2);
console.log(edad2);
