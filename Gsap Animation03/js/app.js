gsap.to('.mountains img', {
  y: 100,
  scrollTrigger: {
    scrub: 1,
  },
})
gsap.to('h1', {
  y: 300,
  scrollTrigger: {
    scrub: 1,
  },
})

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.box',
      pin: true,
      scrub: 2,
      start: 'center center',
      end: '50%+=100px',
    },
  })
  .to('.items', {
    rotation: 0,
  })
  .to('.items', {
    scale: 1.1,
  })
