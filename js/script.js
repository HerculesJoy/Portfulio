$(document).ready(function () {

    $('.home').click(function () {
        $('.home').addClass('menu-active');
        $('.about,.work,.services,.contact,.team').removeClass('menu-active');
    });

    $('.about').click(function () {
        $('.about').addClass('menu-active');
        $('.home,.work,.services,.contact,.team').removeClass('menu-active');
    });

    $('.work').click(function () {
        $('.work').addClass('menu-active');
        $('.home,.about,.contact,.services,.team').removeClass('menu-active');
    });

    $('.services').click(function () {
        $('.services').addClass('menu-active');
        $('.home,.work,.about,.contact,.team').removeClass('menu-active');
    });

    $('.team').click(function () {
        $('.team').addClass('menu-active');
        $('.home,.work,.services,.about,.contact').removeClass('menu-active');
    });

    $('.contact').click(function () {
        $('.contact').addClass('menu-active');
        $('.home,.services,.about,.work,.team').removeClass('menu-active');
    });



    //=================== Mixitup=======================
    jQuery(".work-photo").mixItUp();


    $('.all').click(function () {
        $('.all').addClass('mix-active');
        $('.web-design,.web-development,.portfolios').removeClass('mix-active');
    });

    $('.web-design').click(function () {
        $('.web-design').addClass('mix-active');
        $('.all,.web-development,.portfolios').removeClass('mix-active');
    });

    $('.web-development').click(function () {
        $('.web-development').addClass('mix-active');
        $('.all,.web-design,.portfolios').removeClass('mix-active');
    });

    $('.portfolios').click(function () {
        $('.portfolios').addClass('mix-active');
        $('.all,.web-design,.web-development').removeClass('mix-active');
    });


    //===================== wow js======================
    new WOW().init();

    //==================== data aos=====================
    AOS.init();

    //==================== pretty Photo=================
    $("a[rel^='prettyPhoto']").prettyPhoto();

    //================== Owl carousel===================

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        responsive: {
            769: {
                items: 1
            },
            575: {
                items: 2
            },
            320: {
                items: 1
            },
        }
    });

});

// ===================magnific Popup=============

$('.work-photo').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },

});


//================= Counter Up===================


$(window).scroll(function () {
    var a = 0;
    var oTop = $('#counter').offset().top - window.innerHeight;
    console.log($('#counter').offset().top);
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});


//================== Stellar==================
$(window).stellar();

//================= Team Area==================

"use strict";
$(".team-list").on("click", "a", function (a) {
    a.preventDefault();
    var e = $(this).data("team");
    $(".team-single").removeClass("active"), $(".team-list li").removeClass("active"), $("#" + e).addClass("active"), $(this).parent().addClass("active")
});



//============ team intro Area=================



//================= mobile Menu=================

$('.mobile-nav').click(function () {
    $('.main-menu').toggleClass('Navclose');
});
$('.close-mobile-nav').click(function () {
    $('.main-menu').addClass('Navclose');
});