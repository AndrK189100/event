import Game from "./game/game";

addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".playing-field"));

  setInterval(() => {
    game.mooving();
  }, 1000);
});
