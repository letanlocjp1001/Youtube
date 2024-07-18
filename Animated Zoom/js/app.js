
const wrapper = document.querySelector('.wrapper')

function scrollPos(letterClass) {
  $(letterClass).each(function () {
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight / 1.5) {
      $(this).addClass("sticky-wrapper");

      gsap.to(this, { scale: 1 });
    } else {
      $(this).removeClass("sticky-wrapper");

      gsap.to(this, { scale: 0.5 });
    }
  });
}

$(window).on('load scroll', function () {
  scrollPos(wrapper);
});

