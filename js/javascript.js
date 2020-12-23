$("#arrow").click(function (){
    $("html, body").animate({
        scrollTop: 0
    },1000)
})

$(".menu-bars").click(function (){
    $(".menu-bars").toggleClass("change")
})


$('.menu-bars').click(function() {
    if($('.menu').height() === 0) {
        $('.menu').css({
            height: '100%',
            zIndex: '100'
        })
        $('.menu-bars').css({
            zIndex: '110'
        })
        $('html').css({
            overflow: 'hidden'
        })
        $("html, body").animate({
            scrollTop: 0
        })
    } else {
        $('.menu').css({
            height: '0%'
        })
        $('html').css({
            overflow: 'scroll'
        })
        $('.menu-bars').css({
            zIndex: '3'
        })
    }
})

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);