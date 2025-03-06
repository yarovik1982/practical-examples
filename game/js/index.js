
import { useBottle } from "./useBottle.js";
import { useStartGame } from "./useStartGame.js";

const parentForBottle = document.querySelector("#middle");

const { render } = useBottle(parentForBottle);
const game = useStartGame(parentForBottle, render);

document.addEventListener("DOMContentLoaded", () => {
    game.create();
});