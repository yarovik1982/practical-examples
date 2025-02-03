// logic/headerLogic.js
import { ref } from 'https://unpkg.com/vue@next';

export function headerLogic() {
    const isMobileNavVisible = ref(false);
    const showLoginModal = ref(false);

    const toggleMobileNav = () => {
        isMobileNavVisible.value = !isMobileNavVisible.value;
    };

    return {
        isMobileNavVisible,
        toggleMobileNav,
        showLoginModal,
    };
}