const runBtn = document.querySelector("#run");
const runMenu = document.querySelector(".run__menu");
const categories = document.querySelectorAll('.category');
const subCategories = document.querySelectorAll('.subCategory');


runBtn.addEventListener("click", () => {
    runMenu.classList.toggle("visible");
});


categories.forEach((category, index) => {
   category.addEventListener('click', () => {
      
      subCategories.forEach(subCategory => subCategory.classList.remove('active'));

      if (subCategories[index]) {
         subCategories[index].classList.add('active');
      }
   });
});

