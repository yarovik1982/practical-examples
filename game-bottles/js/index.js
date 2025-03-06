const bottles = document.querySelectorAll(".bottle");
let sourceBottle = null;
let targetBottle = null;

// Функция для установки бутылки как источника
function setSourceBottle(bottle) {
    if (sourceBottle) return; // Если источник уже выбран, ничего не делаем
    bottle.classList.add("source-bottle"); // Добавляем класс для визуального выделения
    sourceBottle = bottle; // Запоминаем источник
}

// Функция для установки бутылки как цели
function setTargetBottle(bottle) {
    if (!sourceBottle || bottle === sourceBottle) return; // Если источник не выбран или это та же бутылка, ничего не делаем
    bottle.classList.add("target-bottle"); // Добавляем класс для визуального выделения
    targetBottle = bottle; // Запоминаем цель
    startAnimation(sourceBottle, targetBottle); // Запускаем анимацию
}

// Функция для запуска анимации
function startAnimation(source, target) {
    if (source && target) {
        // Получаем координаты целевой бутылки
        const targetRect = target.getBoundingClientRect();
        const sourceRect = source.getBoundingClientRect();

        // Вычисляем разницу в координатах
        const deltaX = targetRect.left - sourceRect.left;
        const deltaY = sourceRect.top - targetRect.top;

        // Применяем анимацию
        source.style.transition = "transform 1s"; // Плавное перемещение за 1 секунду
        source.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // Очистка состояния после завершения анимации
        setTimeout(() => {
            sourceBottle.classList.remove("source-bottle");
            targetBottle.classList.remove("target-bottle");
            source.style.transition = ""; // Сбрасываем анимацию
            source.style.transform = ""; // Сбрасываем трансформацию
            sourceBottle = null;
            targetBottle = null;
        }, 5000); // Время анимации (1 секунда)
    }
}

// Перебираем коллекцию бутылок и добавляем слушатели
bottles.forEach((bottle) => {
    bottle.addEventListener("click", () => {
        if (!sourceBottle) {
            setSourceBottle(bottle); // Если источник не выбран, выбираем его
        } else if (!targetBottle) {
            setTargetBottle(bottle); // Если цель не выбрана, выбираем её
        }
    });
});
