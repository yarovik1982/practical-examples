import { getHeight } from "./functions.js";

export const useMobileMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        const top = getHeight(document.querySelector('.header'));
        nav.style.top = `${top}px`;
        nav.classList.toggle('nav-active');
    });
};