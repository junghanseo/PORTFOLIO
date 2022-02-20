$(document).ready(function(){
    $(".gnb > li a, .click_e").click(function(){
        $("body > ." + $(this).data("id")).removeClass("on").prevUntil("nav").addClass("on").end()
        .nextAll().removeClass("on");

        if($(".main").is(".on") && $(".project").is(".on")) {
            $(".gnb > li a").addClass("on").parent().siblings().children().addClass("on");
        } else {
            $(".gnb > li a").removeClass("on").parent().siblings().children().removeClass("on");
        }
        return false;
    });

    $(".project .click_e").mouseover(function(){
      $(".main").addClass("move");
    });

    $(".project .click_e").mouseleave(function(){
      $(".main").removeClass("move");
    });

    // typing lib
    const typing1 = document.querySelector("p.typing1");
    var typewriter1 = new Typewriter(typing1, {
        loop: false,
        autoStart: true,
        delay: 80,
      });

      typewriter1
      .pauseFor(10)
      .typeString("ux/ui design")
      .start();

    const typing2 = document.querySelector("p.typing2");
    var typewriter2 = new Typewriter(typing2, {
        loop: false,
        autoStart: true,
        delay: 80,
      });

      typewriter2
      .pauseFor(10)
      .typeString("web publisher")
      .start();

    const typing3 = document.querySelector("p.typing3");
    var typewriter3 = new Typewriter(typing3, {
        loop: false,
        autoStart: true,
        delay: 80,
      });

      typewriter3
      .pauseFor(10)
      .typeString("portfolio")
      .start();

      $(".bottom li a:not('.UI')").click(function(){
        $(".top ." + $(this).data("id")).addClass("on").siblings().removeClass("on");
        return false;
      });

      $(".list a").click(function(){
        $(".project ." + $(this).data("id")).addClass("on").siblings("[class*=P]").removeClass("on");
        return false;
      });
});
