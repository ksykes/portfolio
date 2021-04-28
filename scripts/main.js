'use strict';

// load particlesJS library
particlesJS.load('particles-js', 'particles/particles-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// events to trigger on page scroll
const scrollEvents = () => {
    // var header = document.getElementById("header-social");
    var arrow = document.getElementById("arrow");
    document.getElementById("content").onscroll = function scrollFunction() {
        arrow.className = "hide";
        // header.className = "hide";
    };
};

// smooth scroll: https://css-tricks.com/snippets/jquery/smooth-scrolling/
const smoothScroll = () => {
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
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
}

scrollEvents();
smoothScroll();