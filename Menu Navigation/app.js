const nav = document.querySelector('.nav')
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
})