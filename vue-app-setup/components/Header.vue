// components/Header.vue
import { headerLogic } from "/logic/headerLogic.js"
export default {
    template: `
        <header>
            <nav class="nav-desktop">
                <div>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                </div>
                <div>
                    <button @click="showLoginModal = true">Вход</button>
                    <button class="nav-mobile" @click="toggleMobileNav">☰</button>
                </div>
            </nav>
            <nav v-if="isMobileNavVisible" class="nav-mobile">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
            </nav>
            <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />
        </header>
    `,
    setup() {
        const { isMobileNavVisible, toggleMobileNav, showLoginModal } = headerLogic();

        return {
            isMobileNavVisible,
            toggleMobileNav,
            showLoginModal,
        };
    },
};