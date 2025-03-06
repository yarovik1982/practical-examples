const header = document.querySelector(".header");
const sectionTitle = document.querySelector("#about h2");
const content = document.querySelector(".content");

const plashka = document.querySelector(".plashka");
let isPlashkaHidden = false;

plashka.addEventListener("wheel", (event) => {
    event.preventDefault();

    const deltaY = event.deltaY;

    if (deltaY > 0 && !isPlashkaHidden) {
        plashka.classList.add("plashka-transform");
        isPlashkaHidden = true;
    }
});

window.addEventListener("scroll", () => {
    const pageScroll = window.scrollY || document.documentElement.scrollTop;

    if (pageScroll <= 0 && isPlashkaHidden) {
        plashka.classList.remove("plashka-transform");
        isPlashkaHidden = false;
    }
});

function getHaight(element) {
    return element.getBoundingClientRect().height;
}

function setHeight(element) {
    const headerHeight = getHaight(header);
    const sectionTitleHeight = getHaight(sectionTitle);
    element.style.height = `calc(100vh - ${
        headerHeight + sectionTitleHeight
    }px)`;
}
setHeight(content);
