"use strict";
//Enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
;
let c1 = Color.Rojo;
console.log("Enum:", Color);
//Color.Rojo = 1;
console.log(Color.Rojo);
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Rojo"] = 1] = "Rojo";
    Color2[Color2["Verde"] = 2] = "Verde";
    Color2[Color2["Azul"] = 3] = "Azul";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Rojo;
console.log(c2);
let otroColor = Color2;
console.log('otroColor:', otroColor.Azul);
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
//enum con number , se puede asignar un valor numerico
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
//enum con string , no se puede asignar un valor numerico
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2["North"] = "North";
    CardinalDirections2["East"] = "East";
    CardinalDirections2["South"] = "South";
    CardinalDirections2["West"] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
;
// logs "North"
console.log('CardinalDirections2.North', CardinalDirections2.North);
// logs "West"
console.log('CardinalDirections2.West', CardinalDirections2.West);
console.log('CardinalDirections2.South', CardinalDirections2.South);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let audio = Volumen.medio;
console.log('audio:', audio);
//Cast, conversión de tipos
let mensaje1 = "no se que dato tiene, viene de petición http";
mensaje1 = 100;
let longitud = mensaje1;
console.log("Longitud: ", longitud);
//console.log("Tipo Longitud: ", typeof(longitud));
//void, no retorna nada, no tiene tipo
function llamar_batman() {
    console.log("Mostrar la batiseñal");
}
let mensaje2 = llamar_batman();
console.log(mensaje2);
