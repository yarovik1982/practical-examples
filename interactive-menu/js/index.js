const btn = document.querySelector('.show-menu')
const menu = document.querySelector('.main-sidebar')
document.addEventListener('mousemove', e => {
   const pos = e.pageX
   if(pos > 150){
      btn.style.opacity = '0'
   }else{
      btn.style.opacity = '1'

   }   
})
btn.addEventListener('click',  () => {
   menu.classList.toggle('show')
})

