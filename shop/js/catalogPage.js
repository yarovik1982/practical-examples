import { useStorage } from "./storage.js";
import { useCart } from "./useCart.js";

const { addToCart } = useCart()
const {getData, setData} = useStorage()

export const useCatalogPage = (data) => {
    function renderCatalogProducts() {
        const dataContainer = document.querySelector("#products");
        if (!dataContainer) {
            console.error('Контейнер с id="products" не найден.');
            return;
        }
        dataContainer.innerHTML = "";
        data.forEach((item) => {
            dataContainer.insertAdjacentHTML(
                "beforeend",
                `
            <div class="col">
               <div class="card h-100" style="display:flex; flex-direction:column; min-height:100px;">
                  <div style="padding:20px;min-width:200px; height:300px;display:flex;justify-content:center; background:#ccc;">
                     <img src="${item.category.image}" style="width:100%;height:100%;object-fit:contain;"  alt="${item.title}">
                  </div>
                  <div class="card-body" style="display:flex; flex-direction:column; min-height:100px;">
                     <h5 class="card-title" style="flex:1 auto;">${item.title}</h5>
                     <p class="card-text" style=" display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 5;
                        overflow: hidden;
                        text-overflow: ellipsis;">
                        ${item.description}
                     </p>
                     <p class="m-0 py-1">
                        Категория: ${item.category.name}
                     </p>
                     
                     <p class="card-text py-1">
                        $ ${item.price}
                     </p>
                  </div>
                  <div class="card-footer">
                     <div class="row justify-content-center">
                        <div class="col-6 text-center">
                           <button class="to-cart btn btn-primary btn-sm" id="${item.id}">Купить</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         `
            );
        });
        const btns = document.querySelectorAll('.to-cart')
        addToCart(btns)
    }

    function renderAdminProducts() {
        const dataContainer = document.querySelector("#adminProducts");
        if (!dataContainer) {
            console.error('Контейнер с id="adminProducts" не найден.');
            return;
        }
        dataContainer.innerHTML = "";

        data.forEach((item, index) => {
            dataContainer.insertAdjacentHTML(
                "beforeend",
                `
              
                  <tr class="${index === 0 ? "table-active" : ""}">
                      <th scope="row">${index + 1}</th>
                      <td data-id="title">
                          <input type="text" readonly value="${item.title}">
                      </td>
                      <td data-id="description">
                          <input type="text" readonly value="${
                              item.description
                          }">
                      </td>
                      <td data-id="image">
                          <img src="${
                              item.category.image
                          }" width='70' height='70' alt="${item.title}">
                          <input type="text" readonly value="${item.category.image}">
                      </td>
                      <td data-id="category">
                          <input type="text" readonly value="${item.category.name}">
                      </td>
                     
                      <td data-id="price">
                          <input type="text" readonly value="${item.price}">
                      </td>
                      <td data-id="actions">
                          <button class="btn btn-success btn-sm edit-btn" title="edit">E</button>
                          <button class="btn btn-danger btn-sm delete-btn" title="delete">D</button>
                          <button class="btn btn-info btn-sm public-btn" title="public">S</button>
                      </td>
                  </tr>
              
          `
            );
        });
        addEventListeners();
    }
    function renderCartProducts(cartData) {
        const dataContainer = document.querySelector("#cart-products");
        if (!dataContainer) {
            console.error('Контейнер с id="adminProducts" не найден.');
            return;
        }
        dataContainer.innerHTML = "";

        cartData.forEach((item, index) => {
            dataContainer.insertAdjacentHTML(
                "beforeend",
                `
              
                  <tr class="${index === 0 ? "table-active" : ""}">
                      <th scope="row">${index + 1}</th>
                      <td data-id="title">
                          <input type="text" readonly value="${item.title}">
                      </td>
                      <td data-id="description">
                          <input type="text" readonly value="${
                              item.description
                          }">
                      </td>
                      <td data-id="image">
                          <img src="${
                              item.category.image
                          }" width='70' height='70' alt="${item.title}">
                          <input type="text" readonly value="${item.category.image}">
                      </td>
                      <td data-id="category">
                          <input type="text" readonly value="${item.category.name}">
                      </td>
                      <td data-id="quantity">
                          <input type="text" readonly value="${item.quantity}">
                      </td>
                     
                      <td data-id="price">
                          <input type="text" readonly value="${item.price}">
                      </td>
                      <td data-id="actions">
                          <button class="btn btn-success btn-sm edit-btn" title="edit">E</button>
                          <button class="btn btn-danger btn-sm delete-btn" title="delete">D</button>
                          <button class="btn btn-info btn-sm public-btn" title="public">S</button>
                      </td>
                  </tr>
              
          `
            );
        });
        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll(".edit-btn").forEach((button) => {
            //  button.addEventListener('click', handleEditClick);
            button.addEventListener("click", (e) => {
                const row = e.target.closest("tr");
                const inputs = row.querySelectorAll("input");
                inputs.forEach((input) => {
                    input.removeAttribute("readonly");
                    document.querySelectorAll("tr")
                    .forEach((tr) => tr.classList.remove("table-active"));
                    row.classList.add("table-active");
                });
            });
        });
        document.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", e => {
               const row = e.target.closest('tr')
               const productIndex = Array.from(row.parentElement.children).indexOf(row)
               let products = getData('products') || []
               products[productIndex].isDelete = true

               setData('products', products)
            });
        });
        document.querySelectorAll(".public-btn").forEach((button) => {
            button.addEventListener("click", handlePublicClick);
        });
    }


    function handlePublicClick(event) {
        const form = event.target.closest("form");
        const inputs = form.querySelectorAll("input.editing");
        const row = event.target.closest("tr");

        // Возвращаем атрибут readonly и завершаем редактирование
        inputs.forEach((input) => {
            input.setAttribute("readonly", true);
            input.classList.remove("editing");
        });

        // Обновляем данные в объекте продукта
        const productData = {};
        form.querySelectorAll("input").forEach((input) => {
            const dataId = input.closest("td").getAttribute("data-id");
            productData[dataId] = input.value;
        });

        let products = getData("products") || [];
        const productIndex = Array.from(form.parentElement.children).indexOf(
            form
        );
        products[productIndex] = { ...products[productIndex], ...productData };

        // Обновляем хранилище
        setData("products", products);

        // Убираем класс активности строки
        row.classList.remove("table-active");

        // Перерисовываем таблицу с обновленными данными
    }

    return {
        renderCatalogProducts,
        renderAdminProducts,
        renderCartProducts,
    };
};
