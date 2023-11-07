let menuToggle = document.querySelector('.menuToggle')
let sidebar = document.querySelector('.sidebar')
let menuList = document.querySelectorAll('.menu li')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  sidebar.classList.toggle('active')
})

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    menuList.forEach((item) => {
      item.classList.remove('active')
    })
    list.classList.add('active')
  })
})
