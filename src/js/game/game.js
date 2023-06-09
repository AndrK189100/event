import FieldCells from "../field/fieldcells";
import Goblin from "../goblin/goblin";

export default class Game {
  constructor(field) {
    this.hit = 0;
    this.miss = 0;
    this.field = document.querySelector(field);
    this.fieldCells = this.field.querySelector(".field-cells");

    this.hits = this.field.querySelector(".info-hits");
    this.hits.textContent = `HITS: ${this.hit}`;
    this.misses = this.field.querySelector(".info-misses");
    this.misses.textContent = `MISSES: ${this.miss}`;

    this.goblin = new Goblin();
    this.cells = new FieldCells(this.fieldCells.children);
  }

  onClick(event) {
    console.log(event);
    if (event.target.classList.contains("pers")) {
      this.hit += 1;
      this.hits.textContent = `HITS: ${this.hit}`;
      this.cells.rendering(this.goblin.mooving());
      clearInterval(this.interval);
      this.interval = this.interval = setInterval(() => {
        this.cells.rendering(this.goblin.mooving());
      }, 1000);
    } else {
      this.miss += 1;
      this.misses.textContent = `MISSES: ${this.miss}`;
    }

    if (this.miss >= 5) {
      clearInterval(this.interval);
      this.hits.textContent = `GAME`;
      this.misses.textContent = `OVER`;
    }
  }

  start() {
    this.interval = setInterval(() => {
      this.cells.rendering(this.goblin.mooving());
    }, 1000);

    this.onClick = this.onClick.bind(this);
    this.fieldCells.addEventListener("click", this.onClick);
  }
}
