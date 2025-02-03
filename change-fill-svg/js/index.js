// const btn = document.getElementById('addToFavorite');

// let favorite = false;

// function changeFill() {
//     favorite = !favorite;
//     const svgs = btn.querySelectorAll('svg');

//     if (svg) {
//         svg.setAttribute('fill', favorite ? 'yellow' : 'green');
//     } else {
//         console.error('SVG элемент не найден.');
//     }
// }

// btn.addEventListener('click', changeFill);

// btn.addEventListener('click', function (){
//    this.classList.toggle('active')
// })
function checkElementsOverflow() {
   const width = self.innerWidth;
   const elements = document.querySelectorAll('body *');
   
   elements.forEach(elt => {
       const elWidth = elt.getBoundingClientRect().width;
       if (elWidth > width) {
           console.log(elt);
       }
   });
}


self.addEventListener('resize', () => {
   checkElementsOverflow();
});
