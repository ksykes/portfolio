(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	// Select all links with hashes
	$('a[href*="#"]'
	// Remove links that don't actually link to anything
	).not('[href="#"]').not('[href="#0"]').click(function (event) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0I7QUFDQSxHQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFXO0FBQ2pDLE1BQUksZUFBZSxFQUFFLFFBQUYsRUFBWSxXQUFaLEVBQW5CO0FBQ0E7QUFDQyxNQUFJLEVBQUUsTUFBRixFQUFVLFNBQVYsTUFBeUIsWUFBN0IsRUFBMkM7QUFDMUM7QUFDQSxLQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLE9BQWxCO0FBQ0EsR0FIRCxNQUlLO0FBQ0osS0FBRSxLQUFGLEVBQVMsV0FBVCxDQUFxQixPQUFyQjtBQUNBO0FBQ0E7QUFDRixFQVhEOztBQWFBO0FBQ0EsR0FBRyxpQkFBSCxFQUF1QixJQUF2Qjs7QUFFQSxHQUFHLFlBQUgsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVztBQUNsQyxJQUFHLGlCQUFILEVBQXVCLFdBQXZCLENBQW9DLE1BQXBDO0FBQ0EsSUFBRyxVQUFILEVBQWdCLFdBQWhCLENBQTZCLGVBQTdCO0FBQ0EsRUFIRDs7QUFLQTtBQUNBLEdBQUU7QUFDRDtBQURELEdBRUUsR0FGRixDQUVNLFlBRk4sRUFHRSxHQUhGLENBR00sYUFITixFQUlFLEtBSkYsQ0FJUSxVQUFTLEtBQVQsRUFBZ0I7QUFDdEI7QUFDQSxNQUNDLFNBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixLQUExQixFQUFpQyxFQUFqQyxLQUF3QyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBQXhDLElBRUEsU0FBUyxRQUFULElBQXFCLEtBQUssUUFIM0IsRUFJRTtBQUNGO0FBQ0EsT0FBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxZQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQWdDLEdBQWxDLENBQWxDO0FBQ0E7QUFDQSxPQUFJLE9BQU8sTUFBWCxFQUFtQjtBQUNsQjtBQUNBLFVBQU0sY0FBTjtBQUNBLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN2QixnQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFESixLQUF4QixFQUVHLElBRkgsRUFFUyxZQUFXO0FBQ25CO0FBQ0E7QUFDQSxTQUFJLFVBQVUsRUFBRSxNQUFGLENBQWQ7QUFDQSxhQUFRLEtBQVI7QUFDQSxTQUFJLFFBQVEsRUFBUixDQUFXLFFBQVgsQ0FBSixFQUEwQjtBQUFFO0FBQzNCLGFBQU8sS0FBUDtBQUNBLE1BRkQsTUFFTztBQUNOLGNBQVEsSUFBUixDQUFhLFVBQWIsRUFBd0IsSUFBeEIsRUFETSxDQUN5QjtBQUMvQixjQUFRLEtBQVIsR0FGTSxDQUVXO0FBQ2pCO0FBQ0QsS0FiRDtBQWNBO0FBQ0Q7QUFDRCxFQWxDRDtBQW1DQSxDQTVERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdC8vIHNjcm9sbCBuYXYgYmFyXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhlYWRlckhlaWdodCA9ICQoJ2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XG5cdFx0Ly8gdmFyIG5hdkhlaWdodCA9ICQoJ25hdicpLm91dGVySGVpZ2h0KCk7XG5cdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IGhlYWRlckhlaWdodCkge1xuXHRcdFx0XHQvLyAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsICcyNnB4Jyk7XG5cdFx0XHRcdCQoJ25hdicpLmFkZENsYXNzKCdmaXhlZCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuXHRcdFx0XHQvLyAkKCdib2R5JykuY3NzKFwicGFkZGluZy10b3BcIiwnMCcpO1xuXHRcdFx0fVxuXHR9KTtcblxuXHQvLyBoYW1idXJnZXIgbGlua3Ncblx0JCggXCIuaGFtYnVyZ2VyTGlua3NcIiApLmhpZGUoKTtcblxuXHQkKCBcIi5oYW1idXJnZXJcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoIFwiLmhhbWJ1cmdlckxpbmtzXCIgKS5zbGlkZVRvZ2dsZSggXCJzbG93XCIgKTtcblx0XHQkKCBcIi5mYS1iYXJzXCIgKS50b2dnbGVDbGFzcyggXCJ0dXJuSGFtYnVyZ2VyXCIgKTtcblx0fSk7XG5cblx0Ly8gU2VsZWN0IGFsbCBsaW5rcyB3aXRoIGhhc2hlc1xuXHQkKCdhW2hyZWYqPVwiI1wiXScpXG5cdFx0Ly8gUmVtb3ZlIGxpbmtzIHRoYXQgZG9uJ3QgYWN0dWFsbHkgbGluayB0byBhbnl0aGluZ1xuXHRcdC5ub3QoJ1tocmVmPVwiI1wiXScpXG5cdFx0Lm5vdCgnW2hyZWY9XCIjMFwiXScpXG5cdFx0LmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHQvLyBPbi1wYWdlIGxpbmtzXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpIFxuXHRcdFx0XHQmJiBcblx0XHRcdFx0bG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxuXHRcdFx0KSB7XG5cdFx0XHQvLyBGaWd1cmUgb3V0IGVsZW1lbnQgdG8gc2Nyb2xsIHRvXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuXHRcdFx0Ly8gRG9lcyBhIHNjcm9sbCB0YXJnZXQgZXhpc3Q/XG5cdFx0XHRpZiAodGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHQvLyBPbmx5IHByZXZlbnQgZGVmYXVsdCBpZiBhbmltYXRpb24gaXMgYWN0dWFsbHkgZ29ubmEgaGFwcGVuXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHRcdFx0XHRzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3Bcblx0XHRcdFx0fSwgMTAwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gQ2FsbGJhY2sgYWZ0ZXIgYW5pbWF0aW9uXG5cdFx0XHRcdFx0Ly8gTXVzdCBjaGFuZ2UgZm9jdXMhXG5cdFx0XHRcdFx0dmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XG5cdFx0XHRcdFx0JHRhcmdldC5mb2N1cygpO1xuXHRcdFx0XHRcdGlmICgkdGFyZ2V0LmlzKFwiOmZvY3VzXCIpKSB7IC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgd2FzIGZvY3VzZWRcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JHRhcmdldC5hdHRyKCd0YWJpbmRleCcsJy0xJyk7IC8vIEFkZGluZyB0YWJpbmRleCBmb3IgZWxlbWVudHMgbm90IGZvY3VzYWJsZVxuXHRcdFx0XHRcdFx0JHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSk7XG4iXX0=
