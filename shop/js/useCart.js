import { useStorage } from "./storage.js";

const { getData, setData } = useStorage();

export function useCart() {
    const cartStore = JSON.parse(localStorage.getItem("cart-products")) || [];
    const cart = document.getElementById("cart-link");

    function updateCartUI() {
        if (cart) {
            cart.dataset.cartCount = `${cartStore.length}`;
        }
    }

    function addToCart(arr) {
        const products = getData("products"); 

        arr.forEach((item) => {
            item.addEventListener("click", () => {
                const id = parseInt(item.id); 
                console.log(id);
                const currentProduct = products.find((product) => product.id === id); 

                if (currentProduct) {
                    const existingProduct = cartStore.find(
                        (product) => product.id === id
                    );

                    if (existingProduct) {
                        existingProduct.quantity += 1;
                    } else {
                        currentProduct.quantity = 1;
                        cartStore.push(currentProduct);
                    }
                    setData('cart-products', cartStore)

                    updateCartUI();

                    console.log("Товар добавлен в корзину:", currentProduct);
                } else {
                    console.error("Товар не найден:", id);
                }
            });
        });
    }

    updateCartUI();

    return {
        addToCart,
    };
}
