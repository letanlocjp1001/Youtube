const tl = gsap.timeline()

tl.from('.nav li', 1, {
  y: -200,
  opacity: 0,
  stagger: 0.2,
})
  .from('.animate', 1, {
    x: -500,
    stagger: 0.2,
    opacity: 0,
  })
  .from('.box img', 1, {
    y: 500,
    scale: 1.4,
    stagger: 0.2,
    opacity: 0,
  })
  .to('.box img', 2, {
    y: -100,
    stagger: 0.2,
  })
