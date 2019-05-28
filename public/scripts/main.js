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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7O0FBQ0EsWUFBWSxJQUFaLENBQWlCLGNBQWpCLEVBQWlDLDhCQUFqQyxFQUFpRSxZQUFZO0FBQ3pFLFlBQVEsR0FBUixDQUFZLHVDQUFaO0FBQ0gsQ0FGRDs7QUFJQTtBQUNBLElBQU0sZUFBZSxTQUFmLFlBQWUsR0FBTTtBQUN2QixRQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQWI7QUFDQSxRQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsUUFBbkMsR0FBOEMsU0FBUyxjQUFULEdBQTBCO0FBQ3BFLGNBQU0sU0FBTixHQUFrQixNQUFsQjtBQUNBLGVBQU8sU0FBUCxHQUFtQixNQUFuQjtBQUNILEtBSEQ7QUFJSCxDQVBEOztBQVNBO0FBQ0EsSUFBTSxlQUFlLFNBQWYsWUFBZSxHQUFNO0FBQ3ZCLE1BQUUsY0FBRixFQUNLLEdBREwsQ0FDUyxZQURULEVBRUssR0FGTCxDQUVTLGFBRlQsRUFHSyxLQUhMLENBR1csVUFBVSxLQUFWLEVBQWlCO0FBQ3BCLFlBQ0ksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEtBQXdDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBN0IsQ0FBeEMsSUFFQSxTQUFTLFFBQVQsSUFBcUIsS0FBSyxRQUg5QixFQUlFO0FBQ0UsZ0JBQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EscUJBQVMsT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEdBQXlCLEVBQUUsV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBZ0MsR0FBbEMsQ0FBbEM7QUFDQSxnQkFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDZixzQkFBTSxjQUFOO0FBQ0Esa0JBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUNwQiwrQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFEUCxpQkFBeEIsRUFFRyxJQUZILEVBRVMsWUFBWTtBQUNqQix3QkFBSSxVQUFVLEVBQUUsTUFBRixDQUFkO0FBQ0EsNEJBQVEsS0FBUjtBQUNBLHdCQUFJLFFBQVEsRUFBUixDQUFXLFFBQVgsQ0FBSixFQUEwQjtBQUN0QiwrQkFBTyxLQUFQO0FBQ0gscUJBRkQsTUFFTztBQUNILGdDQUFRLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0EsZ0NBQVEsS0FBUjtBQUNIO0FBQ0osaUJBWEQ7QUFZSDtBQUNKO0FBQ0osS0EzQkw7QUE0QkgsQ0E3QkQ7O0FBK0JBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuLy8gbG9hZCBwYXJ0aWNsZXNKUyBsaWJyYXJ5XG5wYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnYXNzZXRzL3BhcnRpY2xlcy1jb25maWcuanNvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xufSk7XG5cbi8vIGV2ZW50cyB0byB0cmlnZ2VyIG9uIHBhZ2Ugc2Nyb2xsXG5jb25zdCBzY3JvbGxFdmVudHMgPSAoKSA9PiB7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXNvY2lhbFwiKTtcbiAgICB2YXIgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFycm93XCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5vbnNjcm9sbCA9IGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xuICAgICAgICBhcnJvdy5jbGFzc05hbWUgPSBcImhpZGVcIjtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuICAgIH07XG59O1xuXG4vLyBzbW9vdGggc2Nyb2xsOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2pxdWVyeS9zbW9vdGgtc2Nyb2xsaW5nL1xuY29uc3Qgc21vb3RoU2Nyb2xsID0gKCkgPT4ge1xuICAgICQoJ2FbaHJlZio9XCIjXCJdJylcbiAgICAgICAgLm5vdCgnW2hyZWY9XCIjXCJdJylcbiAgICAgICAgLm5vdCgnW2hyZWY9XCIjMFwiXScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5zY3JvbGxFdmVudHMoKTtcbnNtb290aFNjcm9sbCgpOyJdfQ==
