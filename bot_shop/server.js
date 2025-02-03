const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Маршрут для предоставления доступа к файлам в папке uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});