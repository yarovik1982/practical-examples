// components/LoginModal.vue
export default {
    template: `
        <div class="modal">
            <div class="modal-content">
                <span class="close" @click="$emit('close')">&times;</span>
                <h2>Вход</h2>
                <form>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required>
                    <label for="password">Пароль:</label>
                    <input type="password" id="password" required>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    `,
};