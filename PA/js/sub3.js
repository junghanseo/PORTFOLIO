$(document).ready(function () {
  var iw = window.innerWidth;
if (iw >= 768 || $("html").hasClass("is-ie")) {
  $(".sub3_slick").slick({});
  }

if (iw >= 768 || !$("html").hasClass("is-ie")) {
  var swiper3 = new Swiper(".sub", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
  });
  $(".sport nav a").click(function () { //지역변수 let 특성상 slideTo를 스와이퍼 내에 작성함
    swiper3.slideTo($(this).index());
    return false;
  });
} 



  $(".subnav li a").click(function () {
    $("section." + $(this).attr("id")).addClass("on").siblings().removeClass("on");
    return false;
  });
  if (location.hash == "#sec1") {
    $("section.sec1").addClass("on").siblings().removeClass("on");
  } else if (location.hash == "#sec2") {
    $("section.sec2").addClass("on").siblings().removeClass("on");
  } else if (location.hash == "#sec3") {
    $("section.sec3").addClass("on").siblings().removeClass("on");
  }

  if (location.hash == "#factor1") {
    $("section.sec2").addClass("on").siblings().removeClass("on");
  } else if (location.hash == "#factor2") {
    $("section.sec2").addClass("on").siblings().removeClass("on");
    var top2 = $(".capmpaign .sec2").offset().top;
    $("html, body").animate({
      scrollTop: top2
    }, 500);
  } else if (location.hash == "#factor3") {
    $("section.sec2").addClass("on").siblings().removeClass("on");
    var top3 = $(".capmpaign .sec3").offset().top;
    $("html, body").animate({
      scrollTop: top3
    }, 0);
  }
});
