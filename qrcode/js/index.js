// Импортируем qrcode как ES6-модуль
import QRCode from '../node_modules/qrcode';

const btnCreateQrCode = document.getElementById('createQrCode');

// Данные для перевода
const bankCode = '1001'; // Код банка (например, T-Bank)
const phoneNumber = '79785914732'; // Номер телефона получателя
const amount = 1000; // Сумма перевода (опционально)
const comment = 'Оплата за услуги'; // Комментарий (опционально)

// Формируем ссылку для перевода
const paymentUrl = `https://qr.nspk.ru/${bankCode}/${phoneNumber}?amount=${amount}&comment=${encodeURIComponent(comment)}`;

btnCreateQrCode.addEventListener('click', async () => {
    try {
        // Генерируем QR-код и отображаем его на странице
        const qrCodeImage = await QRCode.toDataURL(paymentUrl);
        document.getElementById('qrCodeImage').src = qrCodeImage;
        console.log('QR-код успешно создан');
    } catch (err) {
        console.error('Ошибка при генерации QR-кода:', err);
    }
});