const items = document.querySelectorAll('.card-item')

items.forEach((item) => {
  item.addEventListener('click', function () {
    document.querySelector('.card-item.active').classList.remove('active')

    this.classList.add('active')
  })
})
