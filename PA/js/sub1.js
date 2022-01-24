$(document).ready(function(){
    $(".subnav li a").click(function(){
        $("section." + $(this).attr("id")).addClass("on").siblings().removeClass("on");
        return false;
    });
    if(location.hash == "#sec1") {
        $("section.sec1").addClass("on").siblings().removeClass("on");
    } else if(location.hash == "#sec2") {
        $("section.sec2").addClass("on").siblings().removeClass("on");
    } else if(location.hash == "#sec3") {
        $("section.sec3").addClass("on").siblings().removeClass("on");
    }
});
