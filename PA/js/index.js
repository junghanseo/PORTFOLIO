$(document).ready(function(){
  var iw = window.innerWidth;
  if (iw < 768) {
    $("link[href='https://unpkg.com/aos@2.3.1/dist/aos.css']").remove();
  }

  if (!$("html").hasClass("is-ie")) {
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

  } else {
    var ex1 = document.querySelector("link[href='https://unpkg.com/aos@2.3.1/dist/aos.css']");
    ex1.parentNode.removeChild(ex1);

    $(".sec1_slick").slick({
      speed : 200,	 
      prevArrow : "<div class='swiper-button-next material-icons-outlined'></div>",
      nextArrow : "<div class='swiper-button-prev material-icons-outlined'></div>",
    });

    $(".sec2_slick").slick({
      variableWidth: true,
      autoplay : true,
      autoplaySpeed : 1000,
      speed : 200,
      infinite : true, 	 
      draggable : true,
    });

    $(".sec3_slick").slick({
      variableWidth: true,
      speed : 300,
      draggable : true,
      slidesToScroll: 2,
    });

    $(".sec4_slick").slick({
      variableWidth: true,
      infinite : true, 	 
      speed : 300,
      draggable : true,
      slidesToScroll: 3,
    });

    $(".sec7_slick").slick({
      variableWidth: true,
      speed : 300,
      draggable : true,
      slidesToScroll: 3,
      prevArrow : "<div class='swiper-button-next material-icons-outlined next sec7'></div>",
      nextArrow : "<div class='swiper-button-prev material-icons-outlined prev sec7'></div>",
    });
  }



  
  if (!$("html").hasClass("is-ie") && iw >= 1024) {
    var swiper1 = new Swiper(".value", {
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



   var menubar = document.querySelectorAll(".menubar a"); //막음
    for(var i=0; i<menubar.length; i++) {
    menubar[i].removeAttribute("href", "#");
  }

});
