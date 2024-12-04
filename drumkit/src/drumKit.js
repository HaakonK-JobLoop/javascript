import Drum from "./classes.js";

const kick = new Drum("kick", `./sounds/kick.wav`, "q");

window.addEventListener("click", () => {
  new Audio(`${kick.sound}`).play();
});
