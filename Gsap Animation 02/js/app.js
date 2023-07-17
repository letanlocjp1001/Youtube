const main = document.querySelector('main')

main.addEventListener('mousemove', function (e) {
  document.querySelectorAll('.galaxy img').forEach((move) => {
    var moving = move.getAttribute('data-set')
    var x = (e.clientX * moving) / 100
    var y = (e.clientY * moving) / 100

    move.style.transform = `translate(${x}px, ${y}px)`
  })
})

let textLogo = document.querySelector('.logo')

const tl = gsap.timeline({
  defaults: {
    ease: 'power4.inOut',
  },
})

textLogo.innerHTML = textLogo.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

tl.from('.letter', 1, {
  y: -50,
  x: 50,
  rotation: 20,
  autoAlpha: 0,
  stagger: 0.1,
}).from('.nav_list', 1, {
  y: 50,
  x: -50,
  rotation: 180,
  autoAlpha: 0,
  stagger: 0.2,
})

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.img',
      scrub: 1,
    },
  })
  .to('.img', {
    stagger: 0.2,
    y: -800,
  })
