import "./game.css";
import image from "./img/goblin.png";

export default class Game {
  constructor(element) {
    this.cells = element.querySelectorAll(".field-cell");
    this.img = document.createElement("img");
    this.img.classList.add("pers");
    this.img.src = image;
    this.currIndex = 0;
  }

  mooving() {
    const i = Math.floor(Math.random() * 9);
    if (i !== this.currIndex) {
      this.cells[i].appendChild(this.img);
      this.currIndex = i;
    }
  }
}
