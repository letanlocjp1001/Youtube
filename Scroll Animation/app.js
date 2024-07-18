let circle = document.querySelector('.circle')

window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    circle.style.clipPath = `circle(${value}px at center center)`
})