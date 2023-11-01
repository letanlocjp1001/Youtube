const hambuger = document.querySelector('.hambuger')
const hamMenu = document.querySelector('.hamMenu')

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active')
  hamMenu.classList.toggle('active')
})
