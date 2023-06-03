$(document).ready(function(){
    $('#demo').on('click', function(){
        $('.navbar-right').animate({
            right: ""
        })
    });
    $('#demo1').on('click', function(){
        $('.navbar-right').animate({
            right: "-100%"
        })
    });
    $('.slick-banner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.product-detail').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                // settings: "unslick",
            }

        ]
    });
    // $(document).ready(function(){
    // });
});
