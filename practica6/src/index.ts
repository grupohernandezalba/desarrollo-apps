//Enum

enum Color {Rojo, Verde, Azul};
let c1:Color = Color.Rojo;

console.log(Color);
//Color.Rojo = 1;
console.log(Color.Rojo);
console.log(c1);

enum Color2 {Rojo = 1, Verde, Azul};
let c2:Color2 = Color2.Rojo;
console.log(c2);


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


      enum CardinalDirections2 {
        North = 'North',
        East = "East",
        South = "South",
        West = "West"
      };
      // logs "North"
      console.log(CardinalDirections2.North);
      // logs "West"
      console.log(CardinalDirections2.West);




enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}   

let audio:number = Volumen.medio;

console.log(audio);



//Cast

let mensaje1:any = "no se que dato tiene, viene de petición http";
mensaje1 = 100;

let longitud:string = <string>mensaje1;
console.log("Longitud: ", longitud);





const listaNumeros: number[] = [1, 2, 3, 4, 5];


listaNumeros.push(6);
console.log(listaNumeros);

//listaNumeros.push("7");
//listaNumeros.push(true);

const villanos: string[] = ["Omega Rojo", "Dormammu", "Duende Verde"];

villanos.forEach( (v) => {
    console.log(v.toUpperCase());
}); 

//Tuplas

let hero:[string, number, boolean] = ["Dr. Strange", 100, true];

//hero[0] = 50;
hero[0] = "Ironman";
hero[1] = 90;
hero[2] = false;

console.log(hero);



//void

function llamar_batman():void {
    console.log("Mostrar la batiseñal");
}   

let mensaje2 = llamar_batman();

console.log(mensaje2);