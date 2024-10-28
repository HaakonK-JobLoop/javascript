// Javascript oppgave 4, playing with strings and numbers

console.log("\nOppgave", 1);
// Oppgave 1
//  Se følgende historie.

const NonsenseStory = `
In a land far, far away, a dancing banana twirled under the moonlight, while a robot vacuum chased after a confused squirrel. The banana laughed, "I wish I were an octopus, then I could juggle stars." Just then, a turtle wearing sunglasses zoomed by on a skateboard, leaving behind a trail of sparkles. An owl hooted loudly, "Pineapples are overrated!" but nobody was listening, because a giraffe in a party hat was singing 'Happy Birthday' to a watermelon. Meanwhile, a rainbow-colored whale swam through the sky, pondering the mysteries of pizza and socks. "One day, I'll find the ultimate pizza," whispered the whale. A dragonfly with a monocle hovered nearby, discussing philosophy with a very serious-looking toaster.
`;

// Du skal ved hjelp av indexOf, substring, slice, split, og andre metoder plukke ut ord fra historien og samle de i følgende setning og lagre den i en ny variabel:
// const NewSentence =
//   "Nobody chased after the owl. But the giraffe was very serious because a dragonfly chased after the banana.";

const ArrayStory = NonsenseStory.split(" ");

// Not a fan
let SeriousLongWord = NonsenseStory.substring(NonsenseStory.indexOf("serious"));
let SeriousWord = SeriousLongWord.substring(
  SeriousLongWord.indexOf("s"),
  SeriousLongWord.lastIndexOf("-")
);

// The fuck does this work
let CapitalWord =
  ArrayStory[61].charAt(0).toUpperCase() + ArrayStory[61].slice(1);

let CapitalWord2 =
  ArrayStory[60].charAt(0).toUpperCase() + ArrayStory[60].slice(1);

// There's got to be a more efficient way of doing this
const NewStory = CapitalWord.concat(
  " ",
  ArrayStory[17],
  " ",
  ArrayStory[18],
  " ",
  ArrayStory[11],
  " ",
  ArrayStory[54],
  ". ", // Cheating
  CapitalWord2,
  " ",
  ArrayStory[11],
  " ",
  ArrayStory[66],
  " ",
  ArrayStory[62],
  " ",
  ArrayStory[114],
  " ",
  SeriousWord, // Not fun
  " ",
  ArrayStory[64],
  " ",
  ArrayStory[6],
  " ",
  ArrayStory[104],
  " ",
  ArrayStory[17],
  " ",
  ArrayStory[18],
  " ",
  ArrayStory[11],
  " ",
  ArrayStory[8],
  "." // Don't care anymore
);
// Atleast it works

// console.log(ArrayStory);
console.log(NewStory);

console.log("\nOppgave", 2);
// Oppgave 2

// Skriv kode som genererer et tilfeldig tall mellom 0 og 100.
// Om tallet er mindre enn 50 skal du console.log("Tallet er mindre enn 50!").
// Om tallet er over 50 skal du console.log("Tallet er større enn 50!").
// Du kan også legge til spesielle conditions for spesifike tall, om du ønsker å leke deg litt med denne.

let Num = Math.round(Math.random() * 100);

if (Num === 100) {
  console.log(Num, "We're so back");
} else if (Num > 69 && Num < 100) {
  console.log(Num, "Math says a pretty high number");
} else if (Num === 69) {
  console.log(Num, "Nice");
} else if (Num > 50 && Num < 69) {
  console.log(Num, "Math says slightly over 50");
} else if (Num === 50) {
  console.log(Num, "Perfectly balanced, as all things should be");
} else if (Num < 50 && Num > 42) {
  console.log(Num, "Math says slightly under 50");
} else if (Num === 42) {
  console.log("The meaning of life, the universe and everything is", Num);
} else if (Num < 42 && Num > 0) {
  console.log(Num, "Math says a pretty low number");
} else if (Num === 0) {
  console.log(Num, "The west has fallen");
}
