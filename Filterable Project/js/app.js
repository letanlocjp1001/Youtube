const buttons = document.querySelectorAll('.btn')

const cards = document.querySelectorAll('.card')

function filterCards(e) {
  document.querySelector('.active').classList.remove('active')
  e.target.classList.add('active')

  cards.forEach((card) => {
    card.classList.add('hidden')

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === 'all'
    ) {
      card.classList.remove('hidden')
    }
  })
}

buttons.forEach((btn) => {
  btn.addEventListener('click', filterCards)
})
