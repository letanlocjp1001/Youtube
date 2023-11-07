const hambuger = document.querySelector('.hambuger')
const nav = document.querySelector('.nav')

hambuger.addEventListener('click', ()=>{
  hambuger.classList.toggle('active')
  nav.classList.toggle('active')
})

gsap.to('.animated', 30, {
  backgroundPosition: "-960px 0",
  repeat: -1
})

document.addEventListener('DOMContentLoaded', ()=>{
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".bg",
      pin: true,
      start: 'top top',
      end: '+=' + window.innerHeight*2,
      scrub: 0.3
    }
  })

  tl.to('.bg', {
    rotation:-360,
    xPercent: -100,
    yPercent: 25,
    backgroundColor: 'transparent',
    backgroundSize: '100%',
    clipPath: 'circle(40% at 50% 50%)',
  })
  .to('.bg', {
    yPercent: 10,
  })

  .to('.bg', {
    yPercent: 0,
    xPercent :-10
  })
})