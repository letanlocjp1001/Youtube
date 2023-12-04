const swiperDuration = 4000
const swiperDelay = 1000

const swiperUp = new Swiper('.swiper', {
  speed: swiperDelay,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: swiperDuration,
    disableOnInteraction: false,
  },

  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll(
        '.swiper-pagination-bullet'
      )

      document
        .querySelector('.swiper-pagination-bullet:nth-child(1)')
        .classList.add('active-first')

      paginationBullets.forEach((el, index) => {
        const numbers = ['01', '02', '03']
        el.innerHTML = `
          <svg viewBox="0 0 50 50" width="50" height="50">
            <circle cx="25" cy="25" r="24" class="circle_bg" fill="none" stroke-width="2" />
            <circle cx="25" cy="25" r="24" class="circle_progress" fill="none" stroke-width="2" />
            <text class="circle_text" x="50%" y="50%" text-anchor="middle" dy="0.3em"> ${numbers[index]}</text>
          </svg>

        `

        let circleProgress = el.querySelector('.circle_progress')
        let circleRadius = circleProgress.getAttribute('r')
        let circleLength = 2 * Math.PI * circleRadius

        circleProgress.style.setProperty('--stroke-dasharray', circleLength)
        circleProgress.style.setProperty('--stroke-dashoffset', circleLength)

        document.documentElement.style.setProperty(
          '--duration-filling',
          `${swiperDuration}ms`
        )
      })
    },
  },
})

let isFirst = true

swiperUp.on('slideChange', (options) => {
  const { pagination } = options

  if (isFirst) {
    pagination.bullets.forEach((bullet) =>
      bullet.classList.remove('active-first')
    )

    isFirst = false
  }
})

swiperUp.on('slideChangeTransitionEnd', (options) => {
  const { pagination } = options

  pagination.bullets.forEach((bullet) =>
    bullet.classList.remove('slide-change-active')
  )

  const activeBullet = document.querySelector(
    '.swiper-pagination-bullet-active'
  )

  activeBullet.classList.add('slide-change-active')
})
