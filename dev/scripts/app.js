$(document).ready(function(){

	// scroll nav bar
	$(window).on('scroll', function() {
		var headerHeight = $('header').outerHeight();
		// var navHeight = $('nav').outerHeight();
			if ($(window).scrollTop() >= headerHeight) {
				// $('body').css('padding-top', '26px');
				$('nav').addClass('fixed');
			}
			else {
				$('nav').removeClass('fixed');
				// $('body').css("padding-top",'0');
			}
	});

	// hamburger links
	$( ".hamburgerLinks" ).hide();

	$( ".hamburger" ).click(function() {
		$( ".hamburgerLinks" ).slideToggle( "slow" );
		$( ".fa-bars" ).toggleClass( "turnHamburger" );
	});
});
