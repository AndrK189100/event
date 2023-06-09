import "./goblin.css";
import image from "./img/goblin.png";

export default class Goblin {
  constructor() {
    this.img = document.createElement("img");
    this.img.classList.add("pers");
    this.img.src = image;
    this.currIndex = 0;
  }

  mooving() {
    let i = this.currIndex;
    while (i === this.currIndex) {
      i = Math.floor(Math.random() * 16);
    }
    this.currIndex = i;
    return { goblin: this.img, position: i };
  }
}
