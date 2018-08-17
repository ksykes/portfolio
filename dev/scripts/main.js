'use strict';

// load particlesJS library
particlesJS.load('particles-js', 'assets/particles-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// events to trigger on page scroll
const scrollEvents = () => {
    var header = document.getElementById("header-social");
    var arrow = document.getElementById("arrow");
    document.getElementById("content").onscroll = function scrollFunction() {
        arrow.className = "hide";
        header.className = "hide";
    };
};

scrollEvents();