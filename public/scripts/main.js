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

scrollEvents();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7O0FBQ0EsWUFBWSxJQUFaLENBQWlCLGNBQWpCLEVBQWlDLDhCQUFqQyxFQUFpRSxZQUFZO0FBQ3pFLFlBQVEsR0FBUixDQUFZLHVDQUFaO0FBQ0gsQ0FGRDs7QUFJQTtBQUNBLElBQU0sZUFBZSxTQUFmLFlBQWUsR0FBTTtBQUN2QixRQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQWI7QUFDQSxRQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsUUFBbkMsR0FBOEMsU0FBUyxjQUFULEdBQTBCO0FBQ3BFLGNBQU0sU0FBTixHQUFrQixNQUFsQjtBQUNBLGVBQU8sU0FBUCxHQUFtQixNQUFuQjtBQUNILEtBSEQ7QUFJSCxDQVBEOztBQVNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBsb2FkIHBhcnRpY2xlc0pTIGxpYnJhcnlcclxucGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJ2Fzc2V0cy9wYXJ0aWNsZXMtY29uZmlnLmpzb24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xyXG59KTtcclxuXHJcbi8vIGV2ZW50cyB0byB0cmlnZ2VyIG9uIHBhZ2Ugc2Nyb2xsXHJcbmNvbnN0IHNjcm9sbEV2ZW50cyA9ICgpID0+IHtcclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zb2NpYWxcIik7XHJcbiAgICB2YXIgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFycm93XCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLm9uc2Nyb2xsID0gZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyb3cuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xyXG4gICAgfTtcclxufTtcclxuXHJcbnNjcm9sbEV2ZW50cygpOyJdfQ==
