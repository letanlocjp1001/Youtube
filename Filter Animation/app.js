const filterList = document.querySelector('.filter')
const filterButtons = filterList.querySelectorAll('.filter-btn')
const item = document.querySelectorAll('.item')

item.forEach((e, index) => {
    e.style.viewTransitionName = `item-${index}`
})


filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let itemCategory = e.target.getAttribute('data-filter')
        // Animation with startViewTransition

        document.startViewTransition(() => {

            updateActiveButton(e.target)
            filterEvents(itemCategory)
        })
    })
})

// FUNCTION
function updateActiveButton(newButton) {
    filterList.querySelector('.active').classList.remove('active')
    newButton.classList.add('active')
}

function filterEvents(filter) {
    item.forEach((item) => {
        let eventCategory = item.getAttribute('data-category')

        if (filter === "all" || filter === eventCategory) {
            item.removeAttribute('hidden')
        }
        else {
            item.setAttribute('hidden', '')
        }
    })
}