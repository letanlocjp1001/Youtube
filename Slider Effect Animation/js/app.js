document.addEventListener('DOMContentLoaded', function () {
  const cardItems = document.querySelectorAll('.card-item')
  const card = document.querySelector('.card')


  let currentIndex = 0;

  setInterval(() => {

    cardItems[currentIndex].style.transform = 'translateX(-100%)'
    cardItems[currentIndex].style.opacity = '0'

    const moveItem = cardItems[currentIndex];
    moveItem.classList.remove('active')
    moveItem.classList.add('hidden')

    currentIndex++;
    if (currentIndex >= cardItems.length) {
      currentIndex = 0;
    }

    setTimeout(() => {
      card.appendChild(moveItem);
      const hiddenItems = document.querySelectorAll('.card-item.hidden')
      hiddenItems[0].style.transform = 'translateX(100%)'

      setTimeout(() => {
        if (hiddenItems.length > 0) {
          hiddenItems[0].classList.remove('hidden')
          hiddenItems[0].style.transform = 'translateX(0)';
          hiddenItems[0].style.opacity = '1';
        }
      }, 50)
    }, 500)

    cardItems[currentIndex].classList.add('active')

  }, 5000)
})