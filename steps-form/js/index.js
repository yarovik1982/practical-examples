function useForms() {
   const forms = document.querySelectorAll(".form");
   let activeForm = document.querySelector(".forms-item-active");
   let data = {};

   function setActiveForm(index) {
       forms.forEach((form, i) => {
           form.classList.toggle("forms-item-active", i === index);
       });
       activeForm = forms[index];
       updateButtons();
   }

   function updateButtons() {
       const btnNext = activeForm.querySelector(".btn-next");
       const btnPrev = activeForm.querySelector(".btn-prev");

       if (activeForm === forms[0]) {
           btnPrev.setAttribute("disabled", true);
       } else {
           btnPrev.removeAttribute("disabled");
       }

       if (activeForm === forms[forms.length - 1]) {
           btnNext.textContent = "Complited";
       } else {
           btnNext.textContent = "Далее";
           btnNext.removeAttribute("disabled");
       }
   }

   function step(direction) {
       const currentIndex = Array.from(forms).indexOf(activeForm);
       if (direction === "next" && currentIndex < forms.length - 1) {
           const currData = getData();
           Object.assign(data, currData); // Добавляем данные текущего шага в общий объект
           console.log("Общие данные:", data); // Выводим все данные в консоль
           setActiveForm(currentIndex + 1);
       } else if (direction === "prev" && currentIndex > 0) {
           setActiveForm(currentIndex - 1);
       } else if (direction === "submit") {
           const currData = getData();
           Object.assign(data, currData);
           console.log("Отправляем данные:", data);
           // Здесь можно добавить логику для отправки данных на сервер
           submitData(data);
       }
   }

   function getData() {
       const inputs = activeForm.querySelectorAll('input');
       let formData = {};
       inputs.forEach(input => {
           if (input.name) { // Проверяем наличие атрибута name
               formData[input.name] = input.value;
           }
       });
       return formData;
   }

   function submitData(data) {
       // Пример отправки данных на сервер
       fetch('/api/submit', {
           method: 'POST',
           body: JSON.stringify(data),
           headers: {
               'Content-Type': 'application/json'
           }
       })
       .then(response => response.json())
       .then(data => console.log('Success:', data))
       .catch(error => console.error('Error:', error));
   }

   // Начальная установка кнопок
   updateButtons();

   // Обработчики событий для кнопок
   forms.forEach(form => {
       const btnNext = form.querySelector(".btn-next");
       const btnPrev = form.querySelector(".btn-prev");

       if (btnNext) {
           btnNext.addEventListener("click", (e) => {
               e.preventDefault();
               if (activeForm === forms[forms.length - 1]) {
                   // На последнем шаге вызываем функцию отправки данных
                   step("submit");
               } else {
                   step("next");
               }
           });
       }

       if (btnPrev) {
           btnPrev.addEventListener("click", (e) => {
               e.preventDefault();
               step("prev");
           });
       }
   });
}

useForms();