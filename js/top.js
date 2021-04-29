$(document).ready(function() {
    "use strict";
    $('.slide_list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse: false,
        margin: 0,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000

    });

    var scrollSpeed = 2;
    var posX = 50;
    setInterval(function() {
        posX -= scrollSpeed;
        $('.box_mess_slide').css("background-position", posX + "px 0px");
    }, 50);
});



$(window).load(function() {
    AOS.init({
        easing: 'ease',
        once: true,
        duration: 1000,
        disable: 'mobile',
    });
});