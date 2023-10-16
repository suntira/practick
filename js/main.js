$(document).ready(function() {
    $(".slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        centerPadding:  "40px",
    });
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
})