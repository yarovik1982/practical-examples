export function getHeight(node) {
    return node ? node.getBoundingClientRect().height : 0;
}

export function setHeightForMiddle(first, middle, last) {
    const firstHeight = getHeight(first);
    const lastHeight = getHeight(last);
    middle.style.height = `calc(100vh - ${firstHeight + lastHeight}px)`;
    middle.style.paddingTop = `${firstHeight}px`;
}

// export function changeTheme() {
//     const all = document.querySelectorAll("body *");

//     all.forEach((item) => {
//         const styles = window.getComputedStyle(item);
//         const textColor = styles.color;
//         const bgColor = styles.backgroundColor;

//         // Функция для получения яркости цвета
//         function getBrightness(color) {
//             const rgb = color.match(/\d+/g).map(Number); // Извлекаем [R, G, B]
//             return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
//         }

//         // Функция для инвертирования цвета
//         function invertColor(color) {
//             const rgb = color.match(/\d+/g).map(Number);
//             return `rgb(${255 - rgb[0]}, ${255 - rgb[1]}, ${255 - rgb[2]})`;
//         }

//         // Меняем текстовый цвет
//         if (textColor.startsWith("rgb")) {
//             item.style.color =
//                 getBrightness(textColor) < 128
//                     ? "rgb(255, 255, 255)"
//                     : "rgb(0, 0, 0)";
//         }

//         // Меняем цвет фона
//         if (bgColor.startsWith("rgb") && bgColor !== "rgba(0, 0, 0, 0)") {
//             item.style.backgroundColor = invertColor(bgColor);
//         }
//     });

//     console.log("Тема изменена!");
// }
