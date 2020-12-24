$("#arrow").click(function (){
    $("html, body").animate({
        scrollTop: 0
    },1000)
})

$(".menu-bars").click(animateBars)

$('.menu-bars').click(clickMenuButton)

$('.menu-item').click(animateBars,closeMenu)

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('#arrow').css({opacity: '1'});
    } else {
        $('#arrow').css({opacity: '0'});
    }
});

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function clickMenuButton() {
    if($('.menu').height() === 0) {
        openMenu()
    } else {
        closeMenu()
    }
}

function openMenu(){
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
}

function closeMenu(){
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

function animateBars(){
    $(".menu-bars").toggleClass("change")
}