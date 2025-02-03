// index.js
import { createApp } from 'https://unpkg.com/vue@next';
import Header from './components/Header.vue';
import LoginModal from './components/LoginModal.vue';

// Регистрация компонентов
const app = createApp({
    components: {
        Header,
        LoginModal,
    },
});

app.mount('#app');