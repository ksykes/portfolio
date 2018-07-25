/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles-config.json', function () {
    console.log('callback - particles.js config loaded');
});

(function() {
    var header = document.getElementById("header-social");
    var arrow = document.getElementById("arrow");
    document.getElementById("content").onscroll = function scrollFunction() {
        arrow.className = "hide";
        header.className = "hide";
    };
})();
