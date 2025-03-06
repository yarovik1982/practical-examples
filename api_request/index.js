const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

async function uploadImage() {
    try {
        const imagePath = path.resolve(__dirname, 'Screenshot_22.png');
        const formData = new FormData();
        formData.append('image', fs.createReadStream(imagePath));
        formData.append('mode', 'test'); // Включаем тестовый режим

        const response = await axios.post('https://ru.vectorizer.ai/api/v1/vectorize', formData, {
            auth: {
                username: 'vk6tyiyf63r384k',
                password: 'p7vi5hf8a7g6kid62jg8i6p420qa5ghu4u3htjgdj75f3fngfala'
            },
            headers: {
                ...formData.getHeaders()
            },
            responseType: 'arraybuffer' // Теперь ожидаем SVG-файл
        });

        fs.writeFileSync('result.svg', response.data);
        console.log('SVG файл успешно сохранён.');
    } catch (error) {
        if (error.response) {
            console.error('Ошибка при отправке запроса:', error.response.status);
            console.error('Ответ сервера:', error.response.data);
        } else {
            console.error('Ошибка:', error.message);
        }
    }
}

uploadImage();
