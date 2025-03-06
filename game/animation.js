// const animationSteps = ['top', "rotate", 'inset-rotate', 'drain', "color", 'rotate-back', 'bottom']
// document.addEventListener('DOMContentLoaded', () => {
//    const bottle = document.querySelector('.wrap-1')
//    bottle.addEventListener('click', () => {
//       const rect = bottle.getBoundingClientRect()
//       bottle.classList.add(animationSteps[0])
//       setInterval(() => {bottle.style.top = `${rect.top}px`},500)
//       // setInterval(() => {
//       //    bottle.classList.add(animationSteps[1])
//       // },10)
//    })
// })
const bottle = document.querySelector('.wrap-2')
const empty = document.querySelector('.wrap-empty')
bottle.addEventListener('mouseover', () => {
   const sourseColor = bottle.querySelector('.element-color-1')
   const elementColor = empty.querySelector('.element-color')
   setTimeout(() => {
      elementColor.style.flex = '0 20%'
      sourseColor.style.flex = '0 0'
   },1000)
})

