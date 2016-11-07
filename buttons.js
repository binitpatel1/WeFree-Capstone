$("#devbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#developers").offset().top
    }, 2000);
});