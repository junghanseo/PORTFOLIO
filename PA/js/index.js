// swiper
var swiper = new Swiper(".sec1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // var ww = $(window).width();
  // if (ww >= 1024) {
  // var swiper = new Swiper(".value", {
  //   keyboard: true,
  //   slidesPerView: "auto",
  //   spaceBetween: 40,
  //   loop: true,
  //   autoplay: {
  //     delay: 1500,
  //     disableOnInteraction: false,
  //   },
  // });
  
  let iw = window.innerWidth;
  if (iw >= 1024) {
    const swiper1 = new Swiper(".value", {
    keyboard: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    autoplay: {
    delay: 1500,
    disableOnInteraction: false,
      },
    });
  }

  var swiper = new Swiper(".report", {
    keyboard: true,
    slidesPerView: "auto",
    spaceBetween: 40,
   });

   var swiper = new Swiper(".sport1", {
    loop: true,
    keyboard: true,
    slidesPerView: "auto",
    spaceBetween: 24,
   });

   var swiper = new Swiper(".news", {
    keyboard: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
   });

   var dark = document.querySelector(".darkmode");

   var menubar = document.querySelectorAll(".menubar a"); //막음
    for(var i=0; i<menubar.length; i++) {
    menubar[i].removeAttribute("href", "#");
  }


