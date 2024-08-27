let personas:string[] = ["Hugo", "Paco", "Luis"];
console.log(personas);

personas.push("Donald");
console.log(personas);

//personas.push(1);
console.log(personas);

let numeros:number[] = [1,2,3,4,5];
let numeros2:Array<number> = [1,2,3,4,5];

//numeros2.push("hola");

console.log(numeros);
console.log(numeros2);


let miArray: number[] = [1,2,3,4,5];
let miArray2: Array<number> = [1,2,3,4,5];
//Union de tipos 
let miArray3: (number | string)[] = [1,2,3,4,5,'hola'];
let miArray4: Array<number | string> = [1,2,3,4,5,'hola'];
let miArray5: Array<any> = [1,2,3,4,5,'hola',true];

let miArray6: number[] = [];
miArray6.push(1);
miArray6.push(2);
miArray6.push(3);

console.log('Array:',miArray6);

let miArray7: Array<number> = [];
miArray7.push(1);

console.log('Array:',miArray7);

let miArray8: Array<any> = [];
miArray8.push(1);
miArray8.push('hola');
miArray8.push(true);

console.log('Array:',miArray8);

 
//Tuplas

    let tupla:[string, number] = ["Jorge", 35];
    console.log(tupla);
    console.log(typeof tupla);
    console.log(tupla[0]);


    // define our tuple
    let ourTuple: [number, boolean, string];

    // initialize correctly
    //ourTuple = [5, false, 'Coding God was here',20];
    //ourTuple = ['Hola', false, 'Coding God was here'];

    ourTuple = [5, false, 'Coding God was here'];

    console.log(ourTuple);
    //console.log(ourTuple[3]);

    // define our readonly tuple
    const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
    // throws error as it is readonly.
    //ourReadonlyTuple.push('Coding God took a day off');

    console.log(ourReadonlyTuple);

    //ourReadonlyTuple[0] = 10;
    //ourReadonlyTuple[1] = false;

    //Named Tuple
    const graph: [x: number, y: number] = [55.2, 41.3];
    console.log(graph);

    // Desestructuración de tuplas
    let tupla2:[string, number] = ["Jorge", 35];
    let [nombre2, edad2] = tupla2;
    console.log(nombre2);
    console.log(edad2);



//Enum

enum Color {Rojo, Verde, Azul};
let c:Color = Color.Rojo;

console.log(Color);
//Color.Rojo = 1;
console.log(Color.Rojo);
console.log(c);

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