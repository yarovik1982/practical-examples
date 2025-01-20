const items = document.querySelectorAll('.item');

function action(typeEvent, item) {
   items.forEach(i => i.classList.remove('active')); 

   if (typeEvent === 'click' || typeEvent === 'mouseenter') {
      item.classList.add('active'); 
   }
}

items.forEach(item => {
   item.addEventListener('click', (e) => action('click', item));
   item.addEventListener('mouseenter', (e) => action('mouseenter', item));
   item.addEventListener('mouseleave', (e) => action('mouseleave', item));
});
