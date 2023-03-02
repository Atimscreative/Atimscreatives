// TESTIMONIAL SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// CLIENT SWIPER
var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// BLOG SWIPER
var swiper = new Swiper(".blogSwiper", {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
  mousewheel: true,
  keyboard: true,
});
