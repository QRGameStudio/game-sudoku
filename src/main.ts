/// <reference path="./game.ts" />

const init = () => {
  const content = document.getElementById("game-content");
  content.innerHTML = "";
  const game = new Game(content);
};

window.onload = init;