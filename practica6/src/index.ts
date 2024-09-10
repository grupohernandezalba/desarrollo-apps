//Enum

enum Color {Rojo, Verde, Azul};
let c1:Color = Color.Rojo;

console.log("Enum:", Color);
//Color.Rojo = 1;
console.log(Color.Rojo);
console.log(c1);

enum Color2 {Rojo = 1, Verde, Azul};
let c2:Color2 = Color2.Rojo;
console.log(c2);

let otroColor = Color2;
console.log('otroColor:',otroColor.Azul);

    enum CardinalDirections {
        North,
        East,
        South,
        West
    }
    let currentDirection = CardinalDirections.North;
    // logs 0
    console.log(currentDirection);
    console.log(CardinalDirections.North);
    console.log(CardinalDirections.West);


    //enum con number , se puede asignar un valor numerico

    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
      }
      // logs 404
      console.log(StatusCodes.NotFound);
      // logs 200
      console.log(StatusCodes.Success);

//enum con string , no se puede asignar un valor numerico

      enum CardinalDirections2 {
        North = 'North',
        East = "East",
        South = "South", // logs "South", South = 1 tambien funciona
        West = "West"
      };
      // logs "North"
      console.log('CardinalDirections2.North',CardinalDirections2.North);
      // logs "West"
      console.log('CardinalDirections2.West',CardinalDirections2.West);
      console.log('CardinalDirections2.South',CardinalDirections2.South);




enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}   

let audio:number = Volumen.medio;

console.log('audio:',audio);



//Cast, conversión de tipos

let mensaje1:any = "no se que dato tiene, viene de petición http";
mensaje1 = 100;

let longitud:string = <string>mensaje1;
console.log("Longitud: ", longitud);
//console.log("Tipo Longitud: ", typeof(longitud));

//void, no retorna nada, no tiene tipo

function llamar_batman():void {
    console.log("Mostrar la batiseñal");
}   

let mensaje2 = llamar_batman();

console.log(mensaje2);