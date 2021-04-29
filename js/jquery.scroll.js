// anchor in page
$(window).bind('load',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if ($($(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				if($(window).width() > 750){
					$('html,body').animate({ scrollTop: p.top - 170}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p.top - 100}, 400);
				}
			}
			return false;
		});
	});
});

// anchor top page #
$(window).bind('load',function(){
	"use strict";
 var hash = location.hash;
 if(hash){
	  var p1 = $(hash).offset();
	if($(window).width() > 750){
					$('html,body').animate({ scrollTop: p1.top - 100}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p1.top - 100}, 400);
				}
	}

});










