$(document).ready(function(){

	$(window).on('scroll', function() {
		var headerHeight = $('header').outerHeight();
		// var navHeight = $('nav').outerHeight();
			if ($(window).scrollTop() >= headerHeight) {
				$('nav').addClass('fixed');
			}
			else {
				$('nav').removeClass('fixed');
			}
	});
});
