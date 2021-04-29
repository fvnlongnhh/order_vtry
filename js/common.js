$(document).ready(function () {
	"use strict";
	$(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#btn_top').fadeIn(300);
        } else {
            $('#btn_top').fadeOut(300);
        }
    });

	$('#btn_top').click(function () {
		$('body,html').animate({scrollTop: 0}, 800);
	});


	$('.banner_list dl , .news_list_ct1 dl').on('click', function () {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });

	$(".btn_side").click(function () {
		$(this).toggleClass('open');
		$(".nav_sp").toggleClass("active");
		$(".sub_btn").removeClass("disable");
		$('ul.sub_menu').stop().slideUp();
		return false;
	});

	$(".sub_btn").click(function () {
		$(this).toggleClass("disable");
		$(this).next("ul.sub_menu").stop().slideToggle("500");
	});
	
	$(".btn_close_menu").click(function () {
		$(".nav_sp").removeClass("active");
		$(".btn_side").removeClass("open");
		$("ul.sub_menu").stop().slideUp("500");
		$('.sub_btn').removeClass("disable");
	});

	$(".sub ul li a").click(function () {
		$(".btn_side").removeClass("open");
		$("nav").removeClass("active");
		$(".sub_btn").removeClass("disable");
		$('ul.sub').stop().slideUp();
	});
});







