// oppgave 1
const nonsenseStory = `
In a land far, far away, a dancing banana twirled under the moonlight,\n
while a robot vacuum chased after a confused squirrel. The banana laughed,\n
"I wish I were an octopus, then I could juggle stars." Just then, a turtle\n
wearing sunglasses zoomed by on a skateboard, leaving behind a trail of sparkles.\n
An owl hooted loudly, "Pineapples are overrated!" but nobody was listening,\n
because a giraffe in a party hat was singing 'Happy Birthday' to a watermelon.\n
Meanwhile, a rainbow-colored whale swam through the sky, pondering the mysteries of pizza and socks.\n
"One day, I'll find the ultimate pizza," whispered the whale.\n
A dragonfly with a monocle hovered nearby, discussing philosophy with a very serious-looking toaster.
`;

const nobodyIndex = nonsenseStory.indexOf("nobody");
const nobody = nonsenseStory.substring(nobodyIndex, nobodyIndex + 6);

const chasedIndex = nonsenseStory.indexOf("chased");
const chased = nonsenseStory.substring(chasedIndex, chasedIndex + 6);

const afterIndex = nonsenseStory.indexOf("after");
const after = nonsenseStory.substring(afterIndex, afterIndex + 5);

const owlIndex = nonsenseStory.indexOf("owl");
const owl = nonsenseStory.substring(owlIndex, owlIndex + 3);

const giraffeIndex = nonsenseStory.indexOf("giraffe");
const giraffe = nonsenseStory.substring(giraffeIndex, giraffeIndex + 7);

const veryIndex = nonsenseStory.indexOf("very serious");
const verySerious = nonsenseStory.substring(veryIndex, veryIndex + 12);

const dragonflyIndex = nonsenseStory.indexOf("dragonfly");
const dragonfly = nonsenseStory.substring(dragonflyIndex, dragonflyIndex + 9);

const bananaIndex = nonsenseStory.indexOf("banana");
const banana = nonsenseStory.substring(bananaIndex, bananaIndex + 6);

const newSentence = `${
  nobody.charAt(0).toUpperCase() + nobody.slice(1)
} ${chased} ${after} the ${owl}. But the ${giraffe} was ${verySerious} because a ${dragonfly} ${chased} ${after} the ${banana}.`;

console.log(newSentence);

// oppgave 2
const randomNumber = Math.round(Math.random() * 101);

if (randomNumber < 50) {
  console.log("number is lower than 50!");
} else if (randomNumber > 50) {
  console.log("number is greater than 50!");
} else {
  console.log("number is exactly 50");
}
