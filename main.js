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

// let list = ["Karen", "Stacy", "Jeremy", "Clarkson", "Funny", "Lovecraft"];
// let phrase = "Lovecraft";

// console.log(list.includes("Jeremy"));
// console.log(phrase.includes(""));

// const checker = (name) =>
//   `The array ${list.includes(name) ? "does" : "doesn't"} contain ${name}`;

// function checkerTwo(array, name) {
//   if (array.includes(name)) {
//     return `The array does contain ${name}`;
//   } else {
//     return `The array doesn't contain ${name}`;
//   }
// }

// console.log(checker("Jeremy"));
// console.log(checkerTwo(list, "Jeremy"));

// const fruitsObject = {
//   apples: 500,
//   bananas: 300,
//   oranges: 200,
// };

// console.log(fruitsObject.size);

// Create a map

// const fruitsMap = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// fruitsMap.forEach(function (value, key) {
//   console.log(key + ": " + value);
// });

// const letters = new Set(["a", "b", "c"]);

// letters.add("A");
// letters.add(1);
// letters.add([1, 2, 3, 4, 5]);
// letters.add(true);
// letters.add({ name: "Jeremy", lastName: "Clarkson" });

// console.log(letters);
// console.log(typeof letters);

// While loop

// for (initialization; testing condition; increment/decrement) {
//     statement(s)
// }

// for (let i = 0; i < 50; i++) {
//   console.log("Hello World!");
// }

// let i = 0;

// while (i < 10) {
//   console.log("Hello World!");
//   i++;
// }

// let names = [
//   "Tom",
//   "Eric",
//   "Jessica",
//   "Scott",
//   "Anna",
//   "Carl",
//   "Elisabeth",
//   "Benny",
//   "Oliver",
//   "Andy",
//   "Jenny",
//   "Ashley",
//   "Erin",
//   "Patrick",
// ];

// for (let i = 0; i < names.length; i++) {
//   console.log(`Hello ${names[i]}, have a good day!`);
// }

// let randomNum = Math.round(Math.random() * 10);

// console.log("The number we want to reach is: " + randomNum);

// let i = 0;

// while (i != randomNum) {
//   i++;
//   if (i === 11) break;
//   console.log("Trying.. " + i);
// }

// let dirtyArray = [
//   "    thIs     ",
//   "arrAY",
//   "     lOOks     ",
//   "TERRiblE",
//   "     PLEAsE",
//   "fIx     ",
//   "it",
// ];

// function wordCleaner(arr) {
//   let cleanedArray = [];
//   for (word of arr) {
//     cleanedArray.push(word.trim().toUpperCase());
//   }
//   return cleanedArray;
// }

// console.log(wordCleaner(dirtyArray));
// let j = 0;

// do {
//   console.log("Hello World!");
//   j++;
// } while (j < 1);

// while (j < 2) {
//   console.log("J is less than two!");
//   j++;
// }

// console.log(j);

// let arr = [1, 2, 3, 4, 5];
// for (item of arr) {
//   console.log(item);
// }

// let myObject = {
//   x: 1,
//   y: 2,
//   z: 3,
// };
// for (key in myObject) {
//   console.log(key, myObject[key]);
// }

// function printOddNumbers(arr) {
//   for (num of arr) {
//     if (num === 7) {
//       console.log("I HATE THE NUMBER 7");
//       continue;
//     }
//     if (num % 2 !== 0) console.log(num);
//   }
// }

// printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

// let stringArrayReverser = (arr) => {
//   if (arr.length === 0) return "Array too short!";
//   let reversedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     reversedArray.push(arr[i].split("").reverse().join(""));
//   }
//   return reversedArray;
// };

// let lemon = ["L", "e", "m", "o", "n"];
// let lemonReverse = ["n", "o", "m", "e", "L"];
// let lemonJoined = "nomeL";

// console.log(
//   stringArrayReverser([
//     "Lemon",
//     "Mangos",
//     "Apple",
//     "Pear",
//     "Grapes",
//     "Kiwi",
//     "Fig",
//     "Peach",
//     "Grapefruit",
//     "Watermelon",
//     "Orange",
//     "Banana",
//   ])
// );

// const makeNumberArray = (size, maxNum) => {
//   let numArray = [];
//   for (let i = 0; i < size; i++) {
//     numArray.push(Math.round(Math.random() * maxNum));
//   }
//   return numArray;
// };

// const numFinder = (arr) => {
//   let biggest = 0;
//   for (val of arr) {
//     if (val > biggest) biggest = val;
//   }
//   console.log(arr);
//   return `The biggest number is ${biggest}`;
// };

// const NumFinder = (arr) => {
//   let Biggest = 0;
//   let Smallest = Infinity;
//   for (val of arr) {
//     if (val > Biggest) Biggest = val;
//     if (val < Smallest) Smallest = val;
//   }
//   console.log(arr);
//   return `The biggest number is ${Biggest} and smallest number is ${Smallest}`;
// };

// console.log(NumFinder(makeNumberArray(25, 100000)));

// function generatePassword(len) {
//   let password = "";
//   while (password.length < len) {
//     password += String.fromCharCode(Math.round(Math.random() * 87) + 35);
//   }
//   return password;
// }

// console.log(generatePassword(150));

// let obj = {
//   firstName: "Yngve",
//   lastName: "Olsen",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   addMiddleName: function (middleName) {
//     this.mName = middleName;
//   },
// };

// console.log(obj.fullName());
// obj.addMiddleName("Geir");
// console.log(obj);

// const personOne = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 26,
//   isEmployed: true,
//   sayHello: function () {
//     console.log("I have an irritating laughter");
//   },
//   sayBye: function () {
//     console.log("See ya later");
//   },
// };

// personOne.sayHello();
// personOne.sayBye();

// const people = [
//   {
//     name: "Thomas",
//     male: true,
//     age: 23,
//     hobbies: ["cycling", "football", "pool"],
//   },
//   {
//     name: "Susan",
//     male: false,
//     age: 26,
//     hobbies: ["jogging", "travelling", "dancing"],
//   },
//   {
//     name: "Monica",
//     male: false,
//     age: 21,
//     hobbies: ["skateboarding", "guitar", "concerts"],
//   },
//   {
//     name: "Avery",
//     male: true,
//     age: 28,
//     hobbies: ["coding", "games", "memes"],
//   },
//   {
//     name: "Phillip",
//     male: true,
//     age: 24,
//     hobbies: ["boxing", "wrestling", "mma"],
//   },
//   {
//     name: "Otto",
//     male: true,
//     age: 36,
//     hobbies: ["movies", "cinema", "music"],
//   },
//   {
//     name: "Annabelle",
//     male: false,
//     age: 30,
//     hobbies: ["makeup", "fashion", "shopping"],
//   },
//   {
//     name: "Cathy",
//     male: false,
//     age: 18,
//     hobbies: ["design", "drawing", "css"],
//   },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(
//     `${people[i].name} is a ${people[i].male ? "man" : "woman"}, who is ${
//       people[i].age
//     } years old.`
//   );
// }

// const hobbyList = [];

// for (let i = 0; i < people.length; i++) {
//   hobbyList.push(...people[i].hobbies);
// }

// console.log(hobbyList);

// let combinedAge = 0;

// for (let i = 0; i < people.length; i++) {
//   combinedAge += people[i].age;
// }

// console.log(`The combined age of all these people is ${combinedAge}`);

// for (let i = 0; i < people.length; i++) {
//   people[i].title = people[i].male ? "Mr." : "Mrs.";
// }
// console.log(people);

// const character = {
//   name: "Johnny Bravo",
//   health: 50,
//   strength: 15,
//   intelligence: 1,
//   charisma: 8,
// };

// const enemy = {
//   name: "James Bond",
//   health: 25,
//   strength: 15,
// };

// function attack(aggressor, victim) {
//   let damage = aggressor.strength * Math.floor(Math.random() + 0.5);
//   victim.health -= damage;
//   if (damage === 0) {
//     console.log(`${aggressor.name} attacks ${victim.name}, and misses!`);
//   } else {
//     console.log(
//       `${aggressor.name} attacks ${victim.name}, and deals ${damage} damage!`
//     );
//   }
// }

// function encounter() {
//   let chance = Math.random();
//   if (chance < 0.3) {
//     console.log("Johnny found a health potion, HOO-HAH!");
//     character.health += 10;
//   } else if (chance < 0.6) {
//     console.log("James Bond appears with a cocktail in his hand!");
//     attack(character, enemy);
//     attack(enemy, character);
//   } else {
//     console.log("It's quiet... Too quiet.");
//     console.log("Johnny starts doing the monkey.");
//   }
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`Turn ${i + 1}`);
//   encounter();
//   console.log(`Johnny has ${character.health} health left.`);
//   console.log(`James has ${enemy.health} health left.`);
//   if (character.health <= 0 || enemy.health <= 0 || i === 9) {
//     console.log("Game over!");
//     break;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let names = [
//   "Tom",
//   "Eric",
//   "Jessica",
//   "Scott",
//   "Anna",
//   "Carl",
//   "Elisabeth",
//   "Benny",
//   "Oliver",
//   "Andy",
//   "Jenny",
//   "Ashley",
//   "Erin",
//   "Patrick",
// ];

// for (let a = 0; a < names.length; a++) {
//   console.log(names[a]);
// }

// let names = [
//   "Tom",
//   "Eric",
//   "Jessica",
//   "Scott",
//   "Anna",
//   "Carl",
//   "Elisabeth",
//   "Benny",
//   "Oliver",
//   "Andy",
//   "Jenny",
// ];

// const text = document.getElementById("phrase");

// function changeText() {
//   text.innerHTML = "Hello, you stupid world!";
//   text.style.color = "red";
// }

// const newPhrase = document.createElement("p");
// newPhrase.innerHTML = "Nah I'm just kidding";

// text.appendChild(newPhrase);

// console.log(text.innerHTML);

// list = document.getElementById("list");

// function createItem() {
//   let item = document.createElement("li");
//   let itemText = document.createElement("p");
//   let delButton = document.createElement("button");
//   itemText.innerHTML = names[Math.round(Math.random() * 10)];
//   delButton.innerHTML = "Delete Name";
//   list.appendChild(item);
//   item.appendChild(itemText);
//   item.appendChild(delButton);
// }

// createItem();

// const text = document.getElementById("text");

// text.innerText = "Hello";

// const newText = document.createElement("p");
// newText.innerText = "World";
// text.append(newText);
// text.append("Haha");

// text.removeChild(newText);

// allParagraphs = document.getElementsByTagName("p");

// console.log(allParagraphs);

// phrase = "Otters are cool";

// const element = document.getElementsByTagName("p");

// const element = document.getElementsByClassName("phrase");

// console.log(element);

// const button = document.getElementById("btn");

// function changeText(id) {
//   id.innerText = "Ooops!";
//   child.style.color = "red";
// }

// function displayDate() {
//   const dateAndTime = (document.createElement("p").innerText = Date());
//   parent.append(dateAndTime);
// }

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// function mOver(obj) {
//   obj.innerText = "Thank you";
// }

// function mOut(obj) {
//   obj.innerText = "Mouse over me";
// }

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Grandparent capture");
//   },
//   { capture: true }
// );

// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent bubble");
// });

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent capture");
//   },
//   { capture: true }
// );

// parent.addEventListener("click", (e) => {
//   console.log("Parent bubble");
// });

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("Child capture");
//   },
//   { capture: true }
// );

// child.addEventListener("click", (e) => {
//   console.log("Child bubble");
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("Document capture");
//   },
//   { capture: true }
// );

// document.addEventListener("click", (e) => {
//   console.log("Document bubble");
// });

// Some
// Hva gjør det?
// Sjekker om minst ett element i en liste oppfyller en gitt betingelse.

// const numbers = [1, 2, 3, 4, 5];

// const hasEven = numbers.some((numbers) => numbers % 2 === 0);

// console.log(hasEven);

// const numbers = [4, 9, 16, 25];

// const newArray = numbers.map(Math.sqrt);

// console.log(numbers);
// console.log(newArray);

// const numbers = [65, 44, 12, 4];
// const newArray = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// const numbers = [175, 50, 25];
// const numbers = [15.5, 2.3, 1.1, 4.7];
// const result = numbers.reduce(myFunction, 0);

// function myFunction(total, num) {
//   return total + Math.round(num);
// }

// const numbers = [1, 2, 3];
// numbers.forEach((num) => console.log(num));

// const persons = [
//   { name: "Peter", age: 40 },
//   { name: "Louis", age: 38 },
// ];

// const grownUp = persons.every((person) => person.age > 25);
// console.log(grownUp);

// const tall = [3, 1, 250, 4, 2];
// tall.sort((a, b) => a - b);

// console.log(tall);

// const grupper = [[1, 2], [3, 4], [5]];
// const flat = grupper.flat();

// console.log(flat);

// setInterval(sayHello, 1000);

// function sayHello() {
//   console.log("Hei!");
// }

/*

Mouse Events:
click - Triggered when a pointing device button is clicked on an element.
dblclick - Triggered on double-click.
mousedown - Triggered when a button is pressed down.
mouseup - Triggered when a button is released.
mouseenter - Triggered when the pointer enters an element.
mouseleave - Triggered when the pointer leaves an element.
mousemove - Triggered when the pointer moves over an element.
mouseover - Triggered when the pointer hovers over an element.
mouseout - Triggered when it moves out of an element.

Keyboard Events:
keydown - Triggered when a key is pressed.
keypress - Triggered when a key is pressed down (deprecated).
keyup - Triggered when a key is released.

Focus Events:
blur - Triggered when an element loses focus.
focus - Triggered when an element gains focus.
focusin - Similar to focus, but bubbles.
focusout - Similar to blur, but bubbles.

Form Events:
change - Triggered when the value of an input, select, or textarea changes.
input - Triggered when the value of an input, select, or textarea is being input.
invalid - Triggered when a form element's value is invalid.
reset - Triggered when a form is reset.
submit - Triggered when a form is submitted.
search - Triggered when a user submits a search in an input element.

Clipboard Events:
copy - Triggered when the user initiates a copy action.
cut - Triggered when the user initiates a cut action.
paste - Triggered when the user initiates a paste action.

Media Events:
abort - Triggered when the loading of a media resource has been aborted.
canplay - Triggered when the browser can start playing media.
canplaythrough - Triggered when the browser estimates it can play through the media without buffering.
durationchange - Triggered when the duration of the media changes.
ended - Triggered when playback stops because the end of the media has been reached.
error - Triggered when a media resource fails to load.
loadeddata - Triggered when the first frame of the media is loaded.
loadedmetadata - Triggered when metadata for the media is loaded.
pause - Triggered when media playback is paused.
play - Triggered when media playback starts.
playing - Triggered when playback resumes after being paused.
progress - Triggered as the browser loads a resource.
ratechange - Triggered when the playback rate changes.
seeked - Triggered when a seek operation completes.
seeking - Triggered when a seek operation starts.
stalled - Triggered when the browser tries to fetch media data, but none is arriving.
suspend - Triggered when the browser intentionally does not fetch media data.
timeupdate - Triggered when the playback position changes.
volumechange - Triggered when the volume is changed.
waiting - Triggered when playback stops due to buffering.

Drag and Drop Events:
drag - Triggered when an element is being dragged.
dragend - Triggered when the drag operation ends.
dragenter - Triggered when a dragged element enters a drop target.
dragleave - Triggered when a dragged element leaves a drop target.
dragover - Triggered when a dragged element is over a drop target.
dragstart - Triggered when a drag operation starts.
drop - Triggered when a dragged element is dropped on a drop target.

Touch Events:
touchcancel - Triggered when a touch point is disrupted.
touchend - Triggered when a touch point is removed.
touchmove - Triggered when a touch point moves.
touchstart - Triggered when a touch point is placed on the surface.

CSS Events:
animationend - Triggered when a CSS animation finishes.
animationiteration - Triggered when a CSS animation completes one iteration.
animationstart - Triggered when a CSS animation starts.
transitionend - Triggered when a CSS transition finishes.

Document Events:
DOMContentLoaded - Triggered when the HTML document is completely loaded and parsed.
readystatechange - Triggered when the ready state of the document changes.

Window Events:
beforeunload - Triggered when the user is about to leave the page.
hashchange - Triggered when the URL hash changes.
load - Triggered when the page has loaded completely.
resize - Triggered when the window is resized.
scroll - Triggered when the window or an element is scrolled.
unload - Triggered when the page is unloaded.

*/

// let redToggle = false;

// container.addEventListener("click", () => {
//   redToggle = !redToggle;
//   if (redToggle) {
//     container.style.backgroundColor = "red";
//   } else {
//     container.style.backgroundColor = "black";
//   }
// });

// document.body.addEventListener("click", (e) => {
//   console.log(e);
// });

// let elementExists = false;
// let horizontalNum = 0;
// let verticalNum = 0;
// let incrementNum = 20;

// window.addEventListener("click", (e) => {
//   horizontalNum = e.x;
//   verticalNum = e.y;
//   if (!elementExists) {
//     const container = document.createElement("div");
//     container.setAttribute("id", "container");
//     document.body.append(container);
//     container.style.left = horizontalNum + "px";
//     container.style.top = verticalNum + "px";
//     container.textContent = "I've just been created!";
//     elementExists = true;
//   } else {
//     container.style.left = horizontalNum + "px";
//     container.style.top = verticalNum + "px";
//     container.textContent = "I'm being moved around!";
//   }
// });

// window.addEventListener("keydown", (e) => {
//   if (e.key === "a" || e.key === "ArrowLeft") {
//     horizontalNum -= incrementNum;
//     container.textContent = "Going left";
//     container.style.left = horizontalNum + "px";
//   }
//   if (e.key === "d" || e.key === "ArrowRight") {
//     horizontalNum += incrementNum;
//     container.textContent = "Going right";
//     container.style.left = horizontalNum + "px";
//   }
//   if (e.key === "w" || e.key === "ArrowUp") {
//     verticalNum -= incrementNum;
//     container.textContent = "Going up";
//     container.style.top = verticalNum + "px";
//   }
//   if (e.key === "s" || e.key === "ArrowDown") {
//     verticalNum += incrementNum;
//     container.textContent = "Going down";
//     container.style.top = verticalNum + "px";
//   }
//   console.log(e);
// });

// window.addEventListener("click", () => {
//   new Audio(`./sounds/clap.wav`).play();
// });

// const numbers = [1, 2, 3, 4, 5];

// const [firstNumber, secondNumber, ...theOtherNumbers] = numbers;

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(theOtherNumbers);

// function colors() {
//   return ["blue", "red"];
// }

// const [firstColor, secondColor] = colors();

// console.log(firstColor);
// console.log(secondColor);

// const position = [
//   ["x", 89],
//   ["y", 14],
//   ["z", 154],
// ];

// position.forEach((element) => {
//   console.log(`Axis: ${element[0]} Value ${element[1]}`);
// });

// position.forEach(([axis, value]) => {
//   console.log(`Axis: ${axis} Value ${value}`);
// });

// const matrix = [
//   [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4],
// ];

// const user = {
//   name: "Vikas",
//   displayName: "Killer981",
//   hobbies: ["Coding", "Gaming", "Cats"],
//   address: { streetName: "Solskinnsgaten", streetNumber: 14 },
//   id: 78345612,
// };

// const user2 = {
//   name: "Vikas",
//   displayName: "Killer981",
//   hobbies: ["Coding", "Gaming", "Cats"],
//   address: { streetName: "Solskinnsgaten", streetNumber: 14 },
// };

// const { name, displayName: gamerTag, id = "No ID!" } = user;

// // console.log(name);
// // console.log(gamerTag);
// // console.log(id);

// function processInfo({ name, displayName, hobbies }) {
//   console.log(name);
//   console.log(displayName);
//   console.log(hobbies);
// }

// function processInfo2(gamerInfo) {
//   console.log(gamerInfo.name);
//   console.log(gamerInfo.displayName);
//   console.log(gamerInfo.hobbies);
// }

// processInfo(user);
// processInfo2(user);

// const people = [
//   {
//     name: "Thomas",
//     male: true,
//     age: 23,
//     hobbies: ["cycling", "football", "pool"],
//   },
//   {
//     name: "Susan",
//     male: false,
//     age: 26,
//     hobbies: ["jogging", "travelling", "dancing"],
//   },
//   {
//     name: "Monica",
//     male: false,
//     age: 21,
//     hobbies: ["skateboarding", "guitar", "concerts"],
//   },
//   {
//     name: "Avery",
//     male: true,
//     age: 28,
//     hobbies: ["writing", "games", "memes"],
//   },
//   {
//     name: "Phillip",
//     male: true,
//     age: 24,
//     hobbies: ["boxing", "wrestling", "mma"],
//   },
//   {
//     name: "Otto",
//     male: true,
//     age: 36,
//     hobbies: ["movies", "cinema", "music"],
//   },
//   {
//     name: "Annabelle",
//     male: false,
//     age: 30,
//     hobbies: ["makeup", "fashion", "shopping"],
//   },
//   {
//     name: "Cathy",
//     male: false,
//     age: 18,
//     hobbies: ["design", "drawing", "css"],
//   },
// ];

// for (let { name, male, age, hobbies } of people) {
//   console.log(name, male, age, hobbies);
// }

// people.forEach(({ name, male, age, hobbies }) => {
//   console.log(name, male, age, hobbies);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNum = Math.random();
//     if (randomNum > 0.5) {
//       resolve(randomNum);
//     } else {
//       reject(new Error("Promise failed!!"));
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Operation complete");
//   });

// API - Application Programming Interface
// RESTFul API
// JSON - Javascript Object Notation

// Fetch

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Fetch

// fetch(
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
// )
//   .then((res) => getData(res))
//   .catch((err) => console.error(err));

// function getData(data) {
//   const dogImage = document.createElement("img");
//   dogImage.src = data.url;
//   document.body.append(dogImage);
// }

// const apiEndpoint = "http://gutendex.com/books";

// async function getBook(id) {
//   //try/catch
//   try {
//     const result = await fetch(`${apiEndpoint}/${id}`);
//     const data = await result.json();
//     renderSite(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// function renderSite(data) {
//   console.log(data);
// }
// getBook(1);

// Export + import

// // Named imports
// import { sum, subtract } from "./calc.js";

// console.log("Named imports:");
// console.log(sum(1, 4));
// console.log(subtract(5, 2));

// // Import all
// import * as math from "./calc.js";

// console.log("Import all:");
// console.log(math.sum(10, 5));
// console.log(math.subtract(10, 8));

// // Named imports with alias
// import { sum as adder, subtract as minus } from "./calc.js";

// console.log("Named imports with alias:");
// console.log(adder(5, 5));
// console.log(minus(100, 82));

// // Import default

// import test from "./calc.js";

// console.log(test(5, 8));

// // Import default with alias

// import { default as addy } from "./calc.js";

// console.log(addy(13, 9));
