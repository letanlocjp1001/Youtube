const subSwiper = new Swiper('.sub-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 5,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: subSwiper,
  },
})
