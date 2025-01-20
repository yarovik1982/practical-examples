import { FormValidator } from "./formValidator.js";

document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('.form');
   new FormValidator(form);
});