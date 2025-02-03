const TelegramBot = require("node-telegram-bot-api");

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на ваш токен от BotFather
const token = "6360968307:AAE3Vd-6Ac8NO9f3kclN6KM7xMnPbtMtjmY";

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Пример данных о товарах
const catalog = [
    {
        id: 1,
        name: "Товар 1",
        description: "Описание товара 1",
        photo: "http://localhost:3000/uploads/photo_1.png", // Ссылка на изображение на нашем сервере
        price: 100,
    },
    {
        id: 2,
        name: "Товар 2",
        description: "Описание товара 2",
        photo: "http://localhost:3000/uploads/photo_2.png", // Ссылка на изображение на нашем сервере
        price: 200,
    },
];

let currentOrder = {};

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        "Добро пожаловать! Используйте команду /catalog для просмотра товаров."
    );
});

// Обработчик команды /catalog
bot.onText(/\/catalog/, (msg) => {
    const chatId = msg.chat.id;

    catalog.forEach((item) => {
        bot.sendPhoto(chatId, item.photo, {
            caption: `${item.name}\n${item.description}\nЦена: ${item.price} руб.`,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Заказать",
                            callback_data: `order_${item.id}`,
                        },
                    ],
                ],
            },
        });
    });
});

// Обработчик нажатия на кнопку заказа
bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
    const data = query.data.split("_");
    const action = data[0];
    const itemId = parseInt(data[1]);

    if (action === "order") {
        const selectedItem = catalog.find((item) => item.id === itemId);
        currentOrder = { ...selectedItem, quantity: 1 };
        bot.sendMessage(
            chatId,
            `Вы выбрали: ${selectedItem.name}\nВведите количество:`
        );
        bot.once("message", (msg) => handleQuantity(msg, chatId));
    }
});

// Обработка ввода количества
function handleQuantity(msg, chatId) {
    const quantity = parseInt(msg.text);
    if (!isNaN(quantity)) {
        currentOrder.quantity = quantity;
        bot.sendMessage(
            chatId,
            `Введите цвет (если не важно, напишите "Не важно"):`
        );
        bot.once("message", (msg) => handleColor(msg, chatId));
    } else {
        bot.sendMessage(chatId, "Неверное значение. Попробуйте снова.");
    }
}

// Обработка ввода цвета
function handleColor(msg, chatId) {
    currentOrder.color = msg.text;
    bot.sendMessage(
        chatId,
        `Введите размер (если не важно, напишите "Не важно"):`
    );
    bot.once("message", (msg) => handleSize(msg, chatId));
}

// Обработка ввода размера
function handleSize(msg, chatId) {
    currentOrder.size = msg.text;
    bot.sendMessage(
        chatId,
        `Выберите метод оплаты:\n1. Наличные\n2. Банковская карта`,
        {
            reply_markup: {
                keyboard: [["Наличные", "Банковская карта"]],
                one_time_keyboard: true,
            },
        }
    );
    bot.once("message", (msg) => handlePayment(msg, chatId));
}

// Обработка выбора метода оплаты
function handlePayment(msg, chatId) {
    currentOrder.paymentMethod = msg.text;
    const orderSummary = `
        Ваш заказ:
        Товар: ${currentOrder.name}
        Количество: ${currentOrder.quantity}
        Цвет: ${currentOrder.color}
        Размер: ${currentOrder.size}
        Метод оплаты: ${currentOrder.paymentMethod}
        Сумма: ${currentOrder.price * currentOrder.quantity} руб.
    `;
    bot.sendMessage(chatId, orderSummary);
    sendOrderToCRM(currentOrder);
    bot.sendMessage(
        chatId,
        "Заказ успешно оформлен! Мы свяжемся с вами для уточнения деталей доставки."
    );
}

// Отправка заказа в CRM систему (здесь можно добавить логику отправки данных в реальную CRM)
function sendOrderToCRM(order) {
    console.log("Новый заказ:", order);
    // Здесь можно добавить код для отправки данных в CRM систему
}
