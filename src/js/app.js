import Game from "./game/game";

addEventListener("DOMContentLoaded", () => {
  const game = new Game(".field");

  game.start();
});
