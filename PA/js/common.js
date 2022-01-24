window.onload = function () {
    var mgnb = document.querySelector(".mgnb");
    var mMenubt = document.querySelector(".m_menu_bt");
    mMenubt.addEventListener("click", function () {
        mMenubt.classList.toggle("close");
        mgnb.classList.toggle("on");
    });

    var html = document.querySelector("html");
    var dark = document.querySelector(".darkmode");

    dark.addEventListener("click", function () {
        dark.classList.toggle("light");
        html.classList.toggle("dark");
    });
}

$(document).ready(function () {
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
        }
    });
});

$(document).ready(function () {
    $("ul.pageTabs li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("." + $(this).attr('id')).addClass('on').siblings().removeClass('on');
    });
    $(".top_bt a").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});
