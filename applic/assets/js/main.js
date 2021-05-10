jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });

    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop,.home-button a').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 900,
    });

    /*-----------------------------
        MENU HAMBERGER ICON
    ------------------------------*/
    var hamberger = $('.header-top-area svg');
    $('.menu-toggle.full').on('click', function () {
        var menuclass = $('#main-nav').attr('class');
        if ('stellarnav light mobile active' == menuclass) {
            hamberger.addClass('active');
        } else if ('stellarnav light mobile' == menuclass) {
            hamberger.removeClass('active');
        }
    });
    $(window).on('resize', function () {
        var menuclass = $('#main-nav').attr('class');
        if ('stellarnav light desktop' == menuclass) {
            hamberger.removeClass('active');
        }
    });

    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on('scroll', function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    /*---------------------------
        FEATURES SLIDER
    -----------------------------*/
    var serviceCarousel = $('.features-slider');
    if (serviceCarousel.length > 0) {
        serviceCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    nav: false,
                    dots: true,
                    items: 1
                },
                600: {
                    nav: false,
                    dots: true,
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }


    /*-----------------------------
        LETER EFFECT
    -------------------------------*/
    var elements = $('[data-chaffle]');
    elements.each(function () {
        $(this).appear(function () {
            Array.prototype.forEach.call(elements, function (el) {
                const chaffle = new Chaffle(el, {
                    speed: 100,
                    delay: 80,
                });
                chaffle.init();
            });
        });
    });

}(jQuery));

jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);

    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init({
        boxClass: 'wow',
        offset: 50,
        mobile: false,
        live: true
    });
});