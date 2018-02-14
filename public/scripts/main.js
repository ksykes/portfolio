'use strict';

$(document).ready(function () {

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
});

'use strict';

var portfolio = {};

portfolio.init = function () {
	portfolio.smoothScroll();
	portfolio.blog();
	portfolio.events();
};

portfolio.smoothScroll = function () {
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
				}, 1000);
				return false;
			}
		}
	});
};

portfolio.blog = function () {
	var $content = $("#json-content");
	// var $feed = require('rss-to-json);
	var data = {
		rss_url: "https://www.medium.com/feed/@ksykes"
	};
	$.get("https://api.rss2json.com/v1/api.json", data, function (res) {
		if (res.status == "ok") {
			console.log(res);
			var output = "";
			$.each(res.items, function (k, item) {
				var visibleSm;
				if (k < 3 - 1) {
					visibleSm = "";
				} else {
					visibleSm = " visible-sm";
				}
				output += '<div class="blog-item">';
				var tagIndex = item.content.indexOf("<img"); // find where the img tag starts
				var srcIndex = item.content.substring(tagIndex).indexOf("src=") + tagIndex; // find where the src attribute starts
				var srcStart = srcIndex + 5; // find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.content.substring(srcStart).indexOf('"') + srcStart; // find where the URL ends
				var src = item.content.substring(srcStart, srcEnd); // extract just the URL
				output += '<div class="img-container"><img class="img-blog" src="' + src + '"></div>';
				output += '<div class="blog-content"><h3 class="blog-title"><a href="' + item.link + '">' + item.title + "</a></h3><h4></h4>";
				output += '<div class="post-content"><p class="author">By ' + item.author + "</p>";
				var yourString = item.content.replace(/<img[^>]*>/g, ""); //replace with your string.
				var maxLength = 300; // maximum number of characters to extract
				// trim the string to the maximum length
				var trimmedString = yourString.substr(0, maxLength);
				// re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
				output += '<p class="post-preview">' + trimmedString + '... </p><a href="' + item.link + '" class="blog-link" target="_blank">Read more</a>';
				output += "</div></div></div>";
				return k < 3 - 1;
			});
			$content.html(output);
		}
	});
};

portfolio.events = function () {
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

	// animate medium button on hover
	$('.medium').mouseover(function () {
		console.log('is this working?');
		$(this).addClass('animated pulse');
	});

	// remove animation on medium button off hover
	$('.medium').mouseout(function () {
		console.log('is this working?');
		$(this).removeClass('animated pulse');
	});
};

// doc ready
$(function () {
	portfolio.init();
});