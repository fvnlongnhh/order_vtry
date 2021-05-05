$(document).ready(function() {
    "use strict";
    $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('#btn_top').fadeIn(300);
            } else {
                $('#btn_top').fadeOut(300);
            }
    });

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });


    if ($(window).width() < 751) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('.fct_sp').addClass('active');
            } else {
                $('.fct_sp').removeClass('active');
            }
        });
    } else {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }

            if ($(this).scrollTop() > 400) {
                $('header').addClass('active');
            } else {
                $('header').removeClass('active');
            }
        });
    }

    var scrollSpeed = 2;
    var posX = 50;
    setInterval(function() {
        posX -= scrollSpeed;
        $('.box_scroll_slide').css("background-position", posX + "px 0px");
    }, 50);

    $('.banner_list dl , .news_list_ct1 dl').on('click', function() {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });

    $(".btn_side").click(function() {
        $(this).toggleClass('open');
        $(".nav_sp").toggleClass("active");
        return false;
    });
});