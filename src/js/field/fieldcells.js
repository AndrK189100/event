import "./field.css";

export default class FieldCells {
  constructor(cells) {
    this.cells = cells;
  }
  rendering(obj) {
    this.cells[obj.position].appendChild(obj.goblin);
  }
}
