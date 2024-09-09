// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = person;
  console.log(firstName,' ',lastName);

  // Create an Object
const person2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 50
  };
  
  // Destructuring
  //let {firstName2, lastName2, country2 = "US"} = person2;


  let {firstName2, lastName2, age2 = 21 } = person2;
  console.log(firstName2,' ',lastName2,' ',age2);


    // Create a String
    let miNombre = "Marco";

    // Destructuring
    let [a1, a2, a3, a4, a5] = miNombre;
    console.log(a1);
    console.log(a2);
    console.log(a3);

    // Destructuring arrays
    const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
    let [fruit1, fruit2] = fruits;

    let [fruitA,,,fruitB] = fruits;
    console.log(fruitA);
    console.log(fruitB);

    let {[0]:fruitX ,[1]:fruitY} = fruits;
    console.log(fruitX);
    console.log(fruitY);

    // Rest operator
    let [fruitC, ...restOfTheFruits] = fruits;
    console.log(fruitC);
    console.log(restOfTheFruits);

    // Swap values
    let firstName3 = "John";
    let lastName3 = "Doe";

    // Destructing
    [firstName, lastName] = [lastName3, firstName3];
    console.log(firstName);
    console.log(lastName);
    
    // Poo en TypeScript
    // Clases
    // Una clase es un modelo que define las propiedades y métodos que un objeto puede tener.
    
    class Point {
      a: number = 0; 
      b: number = 0;
      //c: number 
    }
     
    const pt = new Point();
    pt.a = 10;
    pt.b = 20;
    //pt.x = "0"; // Error
    console.log('Valor de pt:',pt);
    console.log(`${pt.a}, ${pt.b}`);


    class Saludar {
      name: string;
      //readonly name: string;
     
      constructor() {
        this.name = "Hola TS";
      }
    }

    const miSaludo = new Saludar();
    //miSaludo.name = "Hola Mundo"; // Error no se puede modificar porque es readonly
    console.log(miSaludo.name);


    class Punto {
      x: number;
      y: number;
     
      // Normal signature with defaults
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }
    }

    const miPunto = new Punto();
    //const miPunto = new Punto(4,9);
    
    console.log('x:',miPunto.x);
    console.log('y:',miPunto.y);





    
    class Person3 {
        // Propiedades
        firstName: string;
        lastName: string;
        age: number;

        // Constructor
        constructor(firstName: string, lastName: string, age: number) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        // Método
        getFullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }

    // Crear un objeto
    let person3 = new Person3("John", "Doe", 50);
    console.log(person3.getFullName());
    console.log(person3.firstName);
    console.log(person3.lastName);
    console.log(person3.age);

    //Interfaces
    // Una interfaz es un contrato que define las propiedades y métodos que un objeto debe implementar.
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
    }

    // Create an Object
    const person4: Person = {
        firstName: "Juan",
        lastName: "Perez",
        age: 50
    };

    /*
    const person5: Person = {
        firstName: "Maria",
        lastName: "Martinez",
        estadoCivil: "Casada", // Error
        age: 30
    };
    */

    console.log(person4.firstName);
    console.log(person4.lastName);
    console.log(person4.age);

    interface User {
      name: string;
      id: number;
    }
     
    class UserAccount {
      name: string;
      id: number;
     
      constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
      }
    }
     
    const usuario: User = new UserAccount("Murphy", 1);



