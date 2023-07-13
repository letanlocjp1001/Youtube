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
})
  .from('.nav_list', 1, {
    y: 50,
    x: -50,
    rotation: 180,
    autoAlpha: 0,
    stagger: 0.2,
  })
  .from('.center-img img', 1, {
    scale: 0.5,
    autoAlpha: 0,
  })
  .to('.img', 2, {
    x: 0,
    y: 0,
    autoAlpha: 1,
    scale: 1,
    stagger: 0.1,
  })

const imgs = document.querySelectorAll('.imgHover')

imgs.forEach((img) => {
  img.addEventListener('mouseover', function (el) {
    if (el.target.id === 'img-1') {
      changeImg(el.target.id)
    } else if (el.target.id === 'img-2') {
      changeImg(el.target.id)
    } else if (el.target.id === 'img-2') {
      changeImg(el.target.id)
    } else if (el.target.id === 'img-3') {
      changeImg(el.target.id)
    } else if (el.target.id === 'img-4') {
      changeImg(el.target.id)
    } else if (el.target.id === 'img-5') {
      changeImg(el.target.id)
    } else if (el.target.id === 'img-6') {
      changeImg(el.target.id)
    }
  })

  function changeImg(id) {
    let centerImg = document.querySelector('.center-img')
    let img = document.createElement('img')
    img.src = `./images/${id}.png`
    centerImg.appendChild(img)

    const imgTags = centerImg.querySelectorAll('img')
    let lastImgTag = imgTags[imgTags.length - 1]
    let firstImgTag = imgTags[0]

    gsap.from(lastImgTag, 1, {
      scale: 0.5,
      opacity: 0,
    })

    if (imgTags.length > 2) {
      firstImgTag.parentNode.removeChild(firstImgTag)
    }
  }
})
