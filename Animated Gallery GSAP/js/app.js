const items = document.querySelectorAll('.item img')

items.forEach((item, index) => {
  item.src = 'img/img' + (index + 1) + '.png'
})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    pin: true,
    scrub: 2,
    start: 'top top',
    end: '50%+=500px',
  },
})

tl.to('.items img', { scale: 1 }, 0)
  .to('.items', { scale: 1.4, rotate: 0 }, 0)
  .to('.overlay', { height: '100%' }, 0.2)
  .to('.overlay h1', { scale: 1 }, 0.6)
  .to('.items', { scale: 0.9, opacity: 0.2 }, 0.6)
