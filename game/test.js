const state = {
    sizeBottle: {
        bottleWidth:50,
        bottleHeight:150,
        spacing:15
    },
    count:7
}

function createBottles(n) {
    const container = document.querySelector(".game");
    container.style.position = "relative";
    const rect = container.getBoundingClientRect()
    const containerWidth = rect.width

    const elementWidth = 50;
    const elementHeight = 150;
    const spacing = 16; 

    const totalWidth = n * elementWidth + (n - 1) * spacing; 
    const startX = (containerWidth - totalWidth) / 2; // Начальная позиция (центрируем)

    for (let i = 0; i < n; i++) {
        const element = document.createElement("div");
        element.style.width = `${elementWidth}px`;
        element.style.height = `${elementHeight}px`;
        element.style.position = "absolute";
        element.style.top = "50%";
        element.style.left = `${startX + i * (elementWidth + spacing)}px`;
        element.style.transform = "translateY(-50%)";
        element.style.background = "blue";
        container.appendChild(element);
    }
}

// Создаем 5 элементов
createBottles(state.count);
