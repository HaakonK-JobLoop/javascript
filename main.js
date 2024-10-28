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

//Oppgave 1

const nonsenseStory = `In a land far, far away, a dancing banana twirled under the moonlight, while a
robot vacuum chased after a confused squirrel. The banana laughed, "I wish I were
an octopus, then I could juggle stars." Just then, a turtle wearing sunglasses
zoomed by on a skateboard, leaving behind a trail of sparkles. An owl hooted
loudly, "Pineapples are overrated!" but nobody was listening, because a giraffe in
a party hat was singing 'Happy Birthday' to a watermelon. Meanwhile, a rainbow-
colored whale swam through the sky, pondering the mysteries of pizza and socks.
"One day, I'll find the ultimate pizza," whispered the whale. A dragonfly with a
monocle hovered nearby, discussing philosophy with a very serious-looking toaster.`;

let storyArray = nonsenseStory.split(" ");

let newArray = [];

newArray.push(storyArray[storyArray.indexOf("nobody")]);
newArray.push(storyArray[storyArray.indexOf("chased")]);
newArray.push(storyArray[storyArray.indexOf("after")]);
newArray.push(storyArray[storyArray.indexOf("the")]);
newArray.push(storyArray[storyArray.indexOf("owl")]);
newArray.push(storyArray[storyArray.indexOf("but")]);
newArray.push(storyArray[storyArray.indexOf("the")]);
newArray.push(storyArray[storyArray.indexOf("giraffe")]);
newArray.push(storyArray[storyArray.indexOf("was")]);
newArray.push(storyArray[storyArray.indexOf("very")]);
newArray.push(storyArray[storyArray.indexOf("serious")]);
newArray.push(storyArray[storyArray.indexOf("because")]);
newArray.push(storyArray[storyArray.indexOf("a")]);
newArray.push(storyArray[storyArray.indexOf("dragonfly")]);
newArray.push(storyArray[storyArray.indexOf("chased")]);
newArray.push(storyArray[storyArray.indexOf("after")]);
newArray.push(storyArray[storyArray.indexOf("the")]);
newArray.push(storyArray[storyArray.indexOf("banana")]);

let newStory = newArray.toString;

console.log(newStory);
