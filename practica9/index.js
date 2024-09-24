
const obtenerDatos = require('./obtenerDatos');
const { nombre, apellido, edad } = require('./datos');

console.log(obtenerDatos(nombre, apellido, edad));
