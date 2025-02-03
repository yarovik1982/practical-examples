// index.js
import { useData } from "./data.js";
import { useStorage } from "./storage.js";
import { useCurrentPage } from "./currentPage.js";
import { useCatalogPage } from "./catalogPage.js";

const { getData, setData } = useStorage();
const { renderCatalogProducts, renderAdminProducts, renderCartProducts } = useCatalogPage(getData('products'));

async function initData() {
   const productStorage = getData("products");
   let page = useCurrentPage()
    if (!productStorage) {
        try {
            const products = await useData();
            if (products) {
                setData("products", products); // Сохраняем данные в хранилище
               //  renderProducts(products);
            }
        } catch (error) {
            console.error("Ошибка получения данных:", error);
        }
    } else {
      if(page === 'index'){
         renderCatalogProducts();
      }else if(page === 'admin'){
         renderAdminProducts()
      }
      else if(page === 'cart'){
        const cartProducts = getData('cart-products')
        renderCartProducts(cartProducts)
      }
    }
}

initData();
