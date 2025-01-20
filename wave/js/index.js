const cards = document.querySelectorAll('.cards-item')

cards.forEach(card => {
   card.addEventListener('click', e => {
      const current = e.target.closest('.cards-item')
      if(current){
         cards.forEach(card => {
            card.classList.remove('cards-item-active')
         })
         current.classList.add('cards-item-active')
      }
   })
})
