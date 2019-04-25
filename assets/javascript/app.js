$(document).ready(function() {
    $(".arrow").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".main-content").offset().top
        }, 750);
    });
    $(".about").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutCard").offset().top
        }, 750);
    });
    $(".projects").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projectCard").offset().top
        }, 450);
    });
    $(".projects").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contactCard").offset().top
        }, 450);
    });
});
    