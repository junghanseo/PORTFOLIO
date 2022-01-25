let iw = window.innerWidth;

if(iw > 767) {
const swiper1 = new Swiper(".hd_slide", {
  keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else {
  swiper1 = new Swiper(".hd_slide", {
    slidesPerView: 'auto',
    spaceBetween: 40,
  });
}
// var swiper = new Swiper(".hd_slide", {
//   keyboard: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

  if(iw < 768) {
    const swiper2 = new Swiper(".sec1_slide", {
      slidesPerView: 'auto',
      spaceBetween: 40,
      // loop: true,
    });
  } else {
    swiper2 = new Swiper(".sec1_slide", {
      keyboard: true,
      // loop: true,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
        },
    });
  }

  var swiper = new Swiper(".popup", {
  keyboard: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".hero", {
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
  });

  var swiper = new Swiper(".video_link", {
    keyboard: true,
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

