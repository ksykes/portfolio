'use strict';

$(document).ready(function () {

	// animate skill items on hover
	$('.devicon').mouseover(function () {
		console.log('is this working?');
		$(this).parent().addClass('animated pulse');
	});

	// remove animation on skill items off hover
	$('.devicon').mouseout(function () {
		console.log('is this working?');
		$(this).parent().removeClass('animated pulse');
	});

	// animate social media items on hover
	$('.contact2 li').mouseover(function () {
		console.log('is this working?');
		$(this).addClass('animated pulse');
	});

	// remove animation on social media items off hover
	$('.contact2 li').mouseout(function () {
		console.log('is this working?');
		$(this).removeClass('animated pulse');
	});

	// scroll nav bar
	$(window).on('scroll', function () {
		var headerHeight = $('header').outerHeight();
		// var navHeight = $('nav').outerHeight();
		if ($(window).scrollTop() >= headerHeight) {
			// $('body').css('padding-top', '26px');
			$('nav').addClass('fixed');
		} else {
			$('nav').removeClass('fixed');
			// $('body').css("padding-top",'0');
		}
	});

	// hamburger links
	$(".hamburgerLinks").hide();

	$(".hamburger").click(function () {
		$(".hamburgerLinks").slideToggle("slow");
		$(".fa-bars").toggleClass("turnHamburger");
	});

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]').not('[href="#0"]').click(function (event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						// Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
});