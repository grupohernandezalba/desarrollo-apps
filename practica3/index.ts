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


//Enum

enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}   

let audio:number = Volumen.medio;

console.log(audio);


//void

function llamar_batman():void {
    console.log("Mostrar la batiseñal");
}   

let mensaje2 = llamar_batman();

console.log(mensaje2);