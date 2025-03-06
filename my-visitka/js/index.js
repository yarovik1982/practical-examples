import { useNavigation } from "./useNavigation.js";
import { useMobileMenu } from "./useMobileMenu.js";
import { setHeightForMiddle,  } from "./functions.js";


useNavigation()
useMobileMenu()
// chahgeTheme()

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");
const forms = document.querySelectorAll(".payform-tbank");
const buttons = document.querySelectorAll(".more-link");




document.addEventListener("DOMContentLoaded", () => {setHeightForMiddle(header, main, footer)});
window.addEventListener("resize", () => {setHeightForMiddle(header, main, footer)});
// document.addEventListener('click', changeTheme)
 
    function showModal(id, description) {
       modal.classList.add('active')
       const form = modal.querySelector('.payform-tbank')
       const inputAmount = form.querySelector('input[name="amount"]')
       const inputDescription = form.querySelector('input[name="description"]')
       inputAmount.value = id
       inputDescription.value = description
    }
 
    buttons.forEach((button, index) => {
       button.addEventListener("click", (e) => {
        const current = e.target
        const currentId = current.id
        const currentDescription = current.dataset.description
          showModal(currentId, currentDescription);
       });
    });
 
    // Закрытие модального окна при клике вне его
    modal.addEventListener("click", (e) => {
       if (e.target === modal) {
          modal.classList.remove('active');
       }
    });
 
 
