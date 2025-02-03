export const useData = () => {
   async function getProducts() {
      try {
          const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
          
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
   
          const products = await response.json();
          console.log(products);
          return products;
      } catch (error) {
          console.error('Error fetching products:', error);
      }
   }
   
   // Пример использования функции
   getProducts().then(products => {
      if (products) {
          localStorage.setItem('products', JSON.stringify(products))
          localStorage.setItem('cart-products', JSON.stringify([]))
          console.log('Продукты успешно загружены:', products);
      }
   });
}