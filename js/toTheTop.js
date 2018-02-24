$(document).ready(function(){ 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('#goTop').fadeIn(200);
        } else {
            $('#goTop').fadeOut(200);
        }
    });

    $('#goTop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
    });