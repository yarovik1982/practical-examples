// function getPrentList(){
//    return document.querySelectorAll('main section')
   
// }
// const parentList = getPrentList()
// console.log(parentList);

// function createContent(parent, parentClassCss){
//    parent.classList.add(parentClassCss)
//    const container = document.createElement('div')
//    container.classList.add('container', `container-${parentClassCss}`)
//    container.insertAdjacentHTML('beforeend', `
//       <ul class="list list-${parentClassCss}">
//          <li class="list-item list-${parentClassCss}-item">Category 1 ${parentClassCss}</li>
//          <li class="list-item list-${parentClassCss}-item">Category 2 ${parentClassCss}</li>
//          <li class="list-item list-${parentClassCss}-item">Category 3 ${parentClassCss}</li>
//       </ul>
//       `)
//       parent.appendChild(container)
//       return parent
// }

// parentList.forEach(item => {
//    const id = item.id
//    createContent(item,id)
// })

const burger = document.querySelector('.parent button')
const content = document.querySelector('.content')

burger.addEventListener('click', ()=>{
   content.classList.toggle('isShow')
   document.body.classList.toggle('unScroll')
})

// parent.addEventListener('mouseover', () => {
//    content.style.left = '0'
//    document.body.style.paddingRight = '15px'
//    document.body.style.overflow = 'hidden'
// })
// parent.addEventListener('mouseout', () => {
//    content.removeAttribute('style')
//    document.body.removeAttribute('style')
// })
