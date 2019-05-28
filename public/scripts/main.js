(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

// load particlesJS library

particlesJS.load('particles-js', 'assets/particles-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// events to trigger on page scroll
var scrollEvents = function scrollEvents() {
    var header = document.getElementById("header-social");
    var arrow = document.getElementById("arrow");
    document.getElementById("content").onscroll = function scrollFunction() {
        arrow.className = "hide";
        header.className = "hide";
    };
};

// smooth scroll: https://css-tricks.com/snippets/jquery/smooth-scrolling/
var smoothScroll = function smoothScroll() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
};

scrollEvents();
smoothScroll();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7O0FBQ0EsWUFBWSxJQUFaLENBQWlCLGNBQWpCLEVBQWlDLDhCQUFqQyxFQUFpRSxZQUFZO0FBQ3pFLFlBQVEsR0FBUixDQUFZLHVDQUFaO0FBQ0gsQ0FGRDs7QUFJQTtBQUNBLElBQU0sZUFBZSxTQUFmLFlBQWUsR0FBTTtBQUN2QixRQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQWI7QUFDQSxRQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsUUFBbkMsR0FBOEMsU0FBUyxjQUFULEdBQTBCO0FBQ3BFLGNBQU0sU0FBTixHQUFrQixNQUFsQjtBQUNBLGVBQU8sU0FBUCxHQUFtQixNQUFuQjtBQUNILEtBSEQ7QUFJSCxDQVBEOztBQVNBO0FBQ0EsSUFBTSxlQUFlLFNBQWYsWUFBZSxHQUFNO0FBQ3ZCLE1BQUUsY0FBRixFQUNLLEdBREwsQ0FDUyxZQURULEVBRUssR0FGTCxDQUVTLGFBRlQsRUFHSyxLQUhMLENBR1csVUFBVSxLQUFWLEVBQWlCO0FBQ3BCLFlBQ0ksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEtBQXdDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBN0IsQ0FBeEMsSUFFQSxTQUFTLFFBQVQsSUFBcUIsS0FBSyxRQUg5QixFQUlFO0FBQ0UsZ0JBQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EscUJBQVMsT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEdBQXlCLEVBQUUsV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBZ0MsR0FBbEMsQ0FBbEM7QUFDQSxnQkFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDZixzQkFBTSxjQUFOO0FBQ0Esa0JBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUNwQiwrQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFEUCxpQkFBeEIsRUFFRyxJQUZILEVBRVMsWUFBWTtBQUNqQix3QkFBSSxVQUFVLEVBQUUsTUFBRixDQUFkO0FBQ0EsNEJBQVEsS0FBUjtBQUNBLHdCQUFJLFFBQVEsRUFBUixDQUFXLFFBQVgsQ0FBSixFQUEwQjtBQUN0QiwrQkFBTyxLQUFQO0FBQ0gscUJBRkQsTUFFTztBQUNILGdDQUFRLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0EsZ0NBQVEsS0FBUjtBQUNIO0FBQ0osaUJBWEQ7QUFZSDtBQUNKO0FBQ0osS0EzQkw7QUE0QkgsQ0E3QkQ7O0FBK0JBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGxvYWQgcGFydGljbGVzSlMgbGlicmFyeVxyXG5wYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnYXNzZXRzL3BhcnRpY2xlcy1jb25maWcuanNvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XHJcbn0pO1xyXG5cclxuLy8gZXZlbnRzIHRvIHRyaWdnZXIgb24gcGFnZSBzY3JvbGxcclxuY29uc3Qgc2Nyb2xsRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXNvY2lhbFwiKTtcclxuICAgIHZhciBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJyb3dcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikub25zY3JvbGwgPSBmdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcclxuICAgICAgICBhcnJvdy5jbGFzc05hbWUgPSBcImhpZGVcIjtcclxuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gc21vb3RoIHNjcm9sbDogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9qcXVlcnkvc21vb3RoLXNjcm9sbGluZy9cclxuY29uc3Qgc21vb3RoU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgJCgnYVtocmVmKj1cIiNcIl0nKVxyXG4gICAgICAgIC5ub3QoJ1tocmVmPVwiI1wiXScpXHJcbiAgICAgICAgLm5vdCgnW2hyZWY9XCIjMFwiXScpXHJcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKVxyXG4gICAgICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbnNjcm9sbEV2ZW50cygpO1xyXG5zbW9vdGhTY3JvbGwoKTsiXX0=
