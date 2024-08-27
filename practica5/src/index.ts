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
    

