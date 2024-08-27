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
//Enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
;
let c = Color.Rojo;
console.log(Color);
//Color.Rojo = 1;
console.log(Color.Rojo);
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Rojo"] = 1] = "Rojo";
    Color2[Color2["Verde"] = 2] = "Verde";
    Color2[Color2["Azul"] = 3] = "Azul";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Rojo;
console.log(c2);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2["North"] = "North";
    CardinalDirections2["East"] = "East";
    CardinalDirections2["South"] = "South";
    CardinalDirections2["West"] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
;
// logs "North"
console.log(CardinalDirections2.North);
// logs "West"
console.log(CardinalDirections2.West);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let audio = Volumen.medio;
console.log(audio);
//Cast
let mensaje1 = "no se que dato tiene, viene de petición http";
mensaje1 = 100;
let longitud = mensaje1;
console.log("Longitud: ", longitud);
const listaNumeros = [1, 2, 3, 4, 5];
listaNumeros.push(6);
console.log(listaNumeros);
//listaNumeros.push("7");
//listaNumeros.push(true);
const villanos = ["Omega Rojo", "Dormammu", "Duende Verde"];
villanos.forEach((v) => {
    console.log(v.toUpperCase());
});
//Tuplas
let hero = ["Dr. Strange", 100, true];
//hero[0] = 50;
hero[0] = "Ironman";
hero[1] = 90;
hero[2] = false;
console.log(hero);
//void
function llamar_batman() {
    console.log("Mostrar la batiseñal");
}
let mensaje2 = llamar_batman();
console.log(mensaje2);
