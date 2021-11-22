$(document).ready(function(){
    //fixed header
    let header = $('.header')
    let intro = $('.intro')
    let introH;
    let scrollPos = $(window).scrollTop()
    $(window).on('scroll load resize', function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop()

        if(scrollPos > introH){
            header.addClass('fixed')
        } else{
            header.removeClass('fixed')
        }
    })
    //scroll
    $('.header__logo').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })
    $('.header__content a').on('click', function(){
        var idName =  $(this).attr('id')
        var className = '.' + idName
        var pos = $(className).position();
        $('html, body').animate({
            scrollTop : pos.top
        }, 700)
    })
    //slick
    $('.photography').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        
       })
    $('.slick-prev').css({
        'top' : '90%',
        'z-index' : '99',
        'left' : '21px',
        'right' : 'auto',
        'height' : '50px',
        'width' : '50px'
    })
    $('.slick-next').css({
        'top' : '90%',
        'z-index' : '99',
        'left' : 'auto',
        'right' : '21px',
    })
    //burger
    let burger = $('.header__burger')
    burger.on('click', function(){
        $('.header').toggleClass('active')
        
    })
    $(window).on('resize', function(){
        if($(window).width() > 768){

            $('.header').removeClass('active')
        }
    })
})