import { usrHelpers } from "./usrHelpers.js";

export function useBottle(parent) {
    const { camelToKebab } = usrHelpers();
    const state = {
        size: {
            bottleHeight: 150,
            bottleWidth: 50,
            spiceBetween: 16,
        },
        level: {
            initialLevel: 1,
            initialQuantityBottle: 4,
        },
        activeBottleClass: camelToKebab("activeBottle"),
        colors: ["gold", "orange", "blue", "green"],
    };

    let activeBottle = null;

    function createBottle(colors = [], index) {
        const bottle = document.createElement("div");
        bottle.classList.add("bottle");
        bottle.style.width = `${state.size.bottleWidth}px`;
        bottle.style.height = `${state.size.bottleHeight}px`;

        colors.forEach((color) => bottle.appendChild(createLiquid(color)));
        return bottle;
    }

    function createLiquid(color) {
        const liquid = document.createElement("div");
        liquid.classList.add("liquid");
        liquid.style.background = color;
        return liquid;
    }

    function getRandomColors() {
        return [...state.colors].sort(() => Math.random() - 0.5).slice(0, 4);
    }

    function render() {
        const bottles = Array.from({ length: 5 }, (_, index) =>
            createBottle(
                index < state.level.initialQuantityBottle
                    ? getRandomColors()
                    : [],
                index
            )
        );

        bottles.forEach((bottle) => parent.appendChild(bottle));
        parent.addEventListener("click", handleBottleClick);
    }

    function handleBottleClick(event) {
        const bottle = event.target.closest(".bottle");
        if (!bottle) return;

        if (activeBottle) {
            if (activeBottle === bottle) {
                // Снимаем выделение, если кликнули на ту же бутылку
                activeBottle.classList.remove(state.activeBottleClass);
                activeBottle = null;
            } else {
                // Переливаем жидкость из активной бутылки в выбранную
                pourLiquid(activeBottle, bottle);
                activeBottle.classList.remove(state.activeBottleClass);
                activeBottle = null;
            }
        } else {
            // Выделяем бутылку, если она не пустая
            if (bottle.querySelector(".liquid")) {
                activeBottle = bottle;
                activeBottle.classList.add(state.activeBottleClass);
            }
        }
    }

    function pourLiquid(source, target) {
        const sourceLiquids = source.querySelectorAll(".liquid");
        const targetLiquids = target.querySelectorAll(".liquid");

        if (!sourceLiquids.length || targetLiquids.length >= 4) return;

        const liquidToPour = sourceLiquids[0].cloneNode(true);
        target.prepend(liquidToPour);
        sourceLiquids[0].remove();
    }

    return { state, render };
}
