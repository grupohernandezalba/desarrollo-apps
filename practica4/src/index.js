"use strict";
//Tuplas
let tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ['Lucas', 23, false];
console.log('Nombre:', ourTuple[0]);
console.log('Edad:', ourTuple[1]);
//Ternario
let casado = ourTuple[2] ? 'casado' : 'soltero';
console.log('Casado:', casado);
let ourTuple2 = [23, false, 'Lucas'];
ourTuple2 = [25, true, 'Lucas'];
console.log(ourTuple2);
let ourReadonlyTuple = [5, true, 'Diego'];
//ourReadonlyTuple.push('Cadena'); //Error
//ourReadonlyTuple[0] = 30;
console.log('Nombre:', ourReadonlyTuple[2]);
const graph = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);
//Desestructuracion de variables
const person = {
    firstName: "Juan",
    lastName: "Perez",
    age: 10
};
//let nombreX:string = person.firstName;
let { firstName, lastName, age } = person;
age = 20;
console.log(firstName, lastName, age);
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
        console.log(nextNumber);
        series.push(nextNumber);
    }
    return series;
}
const n = 25; // Change this value to generate Fibonacci series up to a different number
const fibonacci = fibonacciSeries(n);
console.log(fibonacci);
/*

// strict mode en falso
function dividir(a,b){
    return a/b;
}

console.log(dividir(10,2));

// ejecutar node practica4/src/index.js

*/
/* Mutable y inmutable */
// Mutable
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
// Inmutable
const c = 10;
//c = 20; // Error
console.log(c);
let user = {
    name: 'Juan',
    age: 25
}; // as const;
//user = 20;
user.age = 30;
user.name = 'Pedro';
console.log(user);
