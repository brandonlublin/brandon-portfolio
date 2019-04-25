$(document).ready(function() {
    $(".arrow").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".main-content").offset().top
        }, 750);
    });
    $(".about").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".aboutBreak").offset().top
        }, 750);
    });
    $(".projects").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projectBreak").offset().top
        }, 750);
    });
    $(".contact").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contactBreak").offset().top
        }, 750);
    });
});
    