import { getHeight } from "./functions.js";
import { templates } from "./templates.js";
import { useMobileMenu } from "./useMobileMenu.js";

export const useNavigation = () => {
    const main = document.querySelector(".main");
    const header = document.querySelector(".header");
    const btns = document.querySelectorAll(".show-modal");

    function create(id) {
        const existingModal = document.querySelector(".modalOffert");
        if (existingModal) {
            existingModal.remove();
            main.style.overflowY = "auto"; // Восстанавливаем прокрутку
        }

        const modalOffert = document.createElement("div");
        const heightMain = getHeight(main);
        const heightHeader = getHeight(header);
        modalOffert.classList.add("modalOffert");
        modalOffert.style.height = `${heightMain - heightHeader}px`;
        modalOffert.style.top = `${heightHeader}px`;
        modalOffert.innerHTML = `
            <button class="modal-close">&times;</button>
            <div class="modalOffert-container">
                ${templates[id]}
            </div>
        `;

        main.appendChild(modalOffert);
        main.style.overflow = "hidden"; // Отключаем прокрутку

        // Добавляем обработчик для кнопки закрытия
        const closeModalBtn = modalOffert.querySelector(".modal-close");
        closeModalBtn.addEventListener("click", () => {
            modalOffert.remove();
            main.style.overflowY = "auto"; // Восстанавливаем прокрутку
        });

        // Закрытие модального окна при клике вне его области
        modalOffert.addEventListener("click", (e) => {
            if (e.target === modalOffert) {
                modalOffert.remove();
                main.style.overflowY = "auto"; // Восстанавливаем прокрутку
            }
        });
    }

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            create(id);

            if (e.target.classList.contains("show-modal-animation")) {
                e.target.classList.remove("show-modal-animation");
            }
        });
    });
};
