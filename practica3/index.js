"use strict";
let personas = ['Carlos', 'Saul', 'Luis'];
console.log(personas);
console.log(personas[0]);
console.log(personas[3]);
console.log(personas[-1]);
personas.push('Jorge');
console.log(personas);
let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
//numeros2.push('HOLA');
console.log(numeros, numeros2);
let numerosCadena = document.getElementById('numeros');
for (let i = 0; i < numeros.length; i++) {
    numerosCadena.innerHTML += numeros[i] + ', ';
}
let numeros2Cadena = document.getElementById('numeros2');
for (let i = 0; i < numeros2.length; i++) {
    numeros2Cadena.innerHTML += numeros2[i] + ', ';
}
//Reto1: Quitar la coma al final de la cadena
//Union de tipos
let miArray = ['Carlos', 45, 24, 'Saul', 19, 'Luis', 25];
console.log(miArray);
let miArray2 = ['Mate', 'Rayo Mcqueen', 19, "Hudson Hornet", 25];
console.log(miArray2);
let miArray3 = [true, 10, 'Hola', 20.5];
console.log(miArray3);
let miArray4 = []; // Arreglo vacio
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
console.log(miArray4);
// Reto2: imprimir al reves mi arreglo 3,2,1 ????
let miArray5 = [];
miArray5.push('Carlos');
miArray5.push(45);
miArray5.push(true);
miArray5.push('https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
miArray5.push('Juan');
miArray5.push(25);
miArray5.push(true); //casado
miArray5.push('https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
console.log(miArray5);
//reto 3: imprimir en pantalla las 2 imagenes o foto de Carlos y Juan usando html semantics FIGURE 
//Tuplas
