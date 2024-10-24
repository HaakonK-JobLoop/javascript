// Oppgave 1:

const story = `
In a land far, far away, a dancing banana twirled under the moonlight, while 
a robot vacuum chased after a confused squirrel. The banana laughed, "I wish 
I were an octopus, then I could juggle stars." Just then, a turtle wearing 
sunglasses zoomed by on a skateboard, leaving behind a trail of sparkles. An owl 
hooted loudly, "Pineapples are overrated!" but nobody was listening, because 
a giraffe in a party hat was singing 'Happy Birthday' to a watermelon. Meanwhile, 
a rainbow-colored whale swam through the sky, pondering the mysteries of pizza 
and socks. "One day, I'll find the ultimate pizza," whispered the whale. A dragonfly 
with a monocle hovered nearby, discussing philosophy with a very serious-looking toaster.
`;

const array = story.split(" ");

const new_story =
  array[61].charAt(0).toUpperCase() +
  array[61].slice(1) +
  " " +
  array[17] +
  " " +
  array[18] +
  " " +
  array[11] +
  " " +
  array[54] +
  "." +
  " " +
  array[60].charAt(0).toUpperCase() +
  array[60].slice(1) +
  " " +
  array[11] +
  " " +
  array[66] +
  " " +
  array[71] +
  " " +
  array[114] +
  " " +
  array[115].slice(0, 7) +
  " " +
  array[64] +
  " " +
  array[1] +
  " " +
  array[104] +
  " " +
  array[17] +
  " " +
  array[18] +
  " " +
  array[11] +
  " " +
  array[8] +
  ".";
console.log(new_story);

// "Nobody chased after the owl. But the giraffe was very
//  serious because a dragonfly chased after the banana."

// Oppgave 2:

let num = Math.round(Math.random() * 100);

console.log(num);

if (num > 69) {
  console.log("Number is bigger than 69!");
} else if (num === 69) {
  console.log("nice");
} else {
  console.log("Number is smaller than 69!");
}
