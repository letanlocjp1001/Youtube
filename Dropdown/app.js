const dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle("active")
})

const optionLists = document.querySelectorAll(".option_list")

optionLists.forEach((option) => {
    option.addEventListener("mouseover", function () {
        const value = option.dataset.value

        result(value)
    })
})

function result(value) {
    document.querySelector('.input').value = value
}
