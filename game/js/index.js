import { useBottle } from "./useBottle.js";

const parentForBottle = document.querySelector(".row");

const { create, render, state, setActiveBottle } = useBottle(parentForBottle);

document.addEventListener("DOMContentLoaded", () => {
    render();
});
