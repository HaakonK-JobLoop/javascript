// console.log("Hello world from Javascript!");

// let x = 2;
// let y = 2;

// console.log("Her er verdien av x: " + x);
// console.log("Her er verdien av y: " + y);

// x = 4;
// y = 4;

// console.log("Her er verdien av x: " + x);
// console.log("Her er verdien av y: " + y);

// let mypetsname = "Oreo";
// let myPetsName = "Oreo";

// let my_pets_name = "Oreo";

// let y = "Hello there";
// let z = 10;

// let x = y + z;

// console.log(x);

// let num = 11;
// let phrase = "Jeg har dette antallet deltakere i kurset:";

// let result = phrase.concat(" ", num);

// console.log(result);

// Boolean;

// let isReal = true;
// let isBenjaminCool = true;

// console.log(isReal);

// let numbers = [2, 5, "Not a number", 10, 3, 7];

// console.log(numbers);

// let snake_case_is_cool = "snake_case";
// let camelCaseIsCool = "camelCase";

// let x = 4;
// let y = 5;

// let z = x + y;

// console.log(z);

// let boks = null;
// boks = "katt";

// console.log(boks);

// let x = 5;
// let y = 2;

// console.log(x == y);

// let text1 = "Hello";
// let text2 = "world!";
// let text3 = "Have a nice day!";

// let result = text1.concat(" ", text2, " ", text3);

// console.log(result);

// let firstName = "Berit";

// console.log(`Min mors navn er ${firstName}.`);

// let fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];

// fruits[2] = "Apricot";

// console.log(fruits);

// const person = {
//   firstName: "Bent",
//   lastName: "Leiknes",
//   age: 43,
//   hobbies: ["Sykling", "Tv", "Matlaging"],
// };

// console.log(person.hobbies[0], person.hobbies[1], person.hobbies[2]);

// const car = {};

// car.type = "";
// car.model = "";
// car.weight = "";
// car.color = "";

// const myCar = new Object();

// myCar.type = "Opel";
// myCar.model = "Corsa";
// myCar.weight = "Massive";
// myCar.color = "Brown";

// const newCar = {};

// console.log(myCar);

// let x = 11;

// if (x === 10) {
//   console.log("They're the same!");
// } else if (x != 10) {
//   console.log("They're not the same :(");
// }

// let lives = 0;

// if (lives > 1) {
//   console.log("Not game over yet :D");
// } else if (lives === 1) {
//   console.log("Be careful, you've almost lost the game!");
// } else {
//   console.log("WASTED");
// }

// let age = 3;
// let hasLicense = false;

// if (hasLicense && age >= 18) {
//   console.log("Welcome inside!");
// } else if (!hasLicense && age >= 18) {
//   console.log("Go get your license.");
// } else if (hasLicense && age < 18) {
//   console.log("Come back when you're older.");
// } else {
//   console.log("Get outta here.");
// }

// const userName = "UltraLord55";
// let userAge = 17;

// let userIsAdmin = true;
// let userIsLoggedIn = false;
// let userIsBlocked = true;

// let goToPage = "";

// if (!userName == "" && userAge >= 18 && !userIsBlocked && !userIsAdmin) {
//   userIsLoggedIn = true;
//   goToPage = "/home";
// } else if (userIsAdmin) {
//   userIsLoggedIn = true;
//   goToPage = "/admin";
// } else {
//   goToPage = "/logIn";
// }

// console.log(goToPage);

// let myElement = document.getElementById("one");

// myElement.style.backgroundColor = "blue";
// myElement.style.width = "200px";
// myElement.style.height = "200px";

// const person = {
//   firstName: "Odd",
//   lastName: "Nordstoga",
//   occupation: "Lærer",
//   isNiceGuy: true,
//   age: 92,
// };

// if (!person.isNiceGuy) {
//   console.log("Slem kar");
// } else {
//   console.log("Grei kar :)");
// }

// let ismember = false;

// console.log(ismember ? "$2" : "$5");

// let isMember = false;

// if (isMember) {
//   console.log("$2");
// } else {
//   console.log("$5");
// }

// Working with strings

// let phrase = "Strings are cool!";

// console.log(phrase.length);

// console.log(phrase.toUpperCase());

// console.log(phrase.toLowerCase());

// console.log(phrase.charAt(0));

// "ABCDEFG"
//  0123456

// console.log(phrase.indexOf("o"));
// console.log(phrase.lastIndexOf("o"));

// console.log(phrase.substring(8, 11));

// console.log(phrase.substring(phrase.indexOf("c"), phrase.length));

// let text = "are";

// console.log(phrase.endsWith(text));

// console.log(phrase.includes(text));

// let phrase = "How are you doing today?";

// const myArray = phrase.split(" ");

// console.log(myArray);

// let newPhrase = myArray[0].concat(" ", myArray[3], "?!");

// console.log(newPhrase);

// let num = 10;

// console.log(num * 10);

// console.log(Math.round(Math.random() * 100));

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100000000, 250, 152];

// console.log(Math.abs(-12));

// console.log(Math.max(...numArray));
// console.log(Math.min(...numArray));

/*
The three dots in your code are the spread syntax. It allows an iterable, 
such as an array, to be expanded in places where zero or more arguments 
(for function calls) or elements (for array literals) are expected.

In this case, ...numArray spreads the elements of the numArray into 
individual arguments for the Math.max function, which expects a list of numbers. 
So instead of passing the array itself, it passes each element of the array as 
a separate argument.

For example:

let numArray = [1, 5, 3];
console.log(Math.max(...numArray));  // Equivalent to Math.max(1, 5, 3)
// Output: 5

Without the spread operator, you'd get an error or an incorrect result, 
because Math.max expects individual arguments, not an array.
*/

// // To the power of
// console.log(Math.pow(2, 4));

// // Square Root
// console.log(Math.sqrt(16));

// let num = Math.random();

// if (num > 0.5) {
//   console.log("Number is bigger than 0.5!");
// } else {
//   console.log("Number is smaller than 0.5!");
// }

// let num = 10;

// let result = 11 % 2;

// console.log(result);

// let num = 431513180;

// if (num % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// prompt("Give me a number");
// let num2 = prompt("Give me a second number");

// let result = Number(num1) + Number(num2);

// console.log("The result is: " + result + "!");

// document.write("The result is: " + result + "!");

// function helloWorld() {
//   console.log("Hello World");
// }

// helloWorld();

// function helloWorld(phrase) {
//   console.log(phrase);
// }

// let text = "Hello World";

// helloWorld(text);

// function sum(x, y) {
//   console.log(x + y);
// }

// sum(6, 4);

// let arrow = () => {
//   return "Hello world from an arrow function!";
// };

// console.log(arrow());

// let x = 5;

// function iAmHungry(x) {
//   let daysSinceIveEaten = x;
//   console.log(x);
// }

// iAmHungry();

// function multiplicator(x, y) {
//   let result = x * y;
//   console.log(`Your first number is ${x}`);
//   console.log(`Your first number is ${y}`);
//   console.log(`Your result is ${result}`);
// }

// multiplicator(10, 5);

// const calculator = (num1, num2, operator) => {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else {
//     return "Invalid operator";
//   }
// };

// console.log(calculator(10, "Heisann", "*"));

let list = ["Apple", "Banana", "Orange"];
let listTwo = ["A monkey", "Being NOT funky"];
let result = list.concat(listTwo);

console.log(list);
console.log(listTwo);
console.log(result);
