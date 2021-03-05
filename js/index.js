// 네비게이션 depth2 //
$('.nav .depth1 > li').hover(
    function(){
        if($('html').hasClass('pc')){
        $(this).addClass('on')
        $(this).find('.depth2').css({
            opacity:0
        }).animate({
            opacity:1
        }, 200)
    }
    },
    function(){
        if($('html').hasClass('pc')){
        $(this).find('.depth2').animate({
            opacity:0
        }, 200,
        function(){
        $(this).parent().removeClass('on')
        })
    }
    }
)

var sct2 = 0;
$(window).on('scroll', function(){
    var sct1 = $(this).scrollTop()
    if ( sct1>0 && !$('html').hasClass('down') ) {
        $('html').addClass('down').removeClass('up')
        $('#header').stop().slideUp(300)
    } 
    if ( sct1<sct2 && !$('html').hasClass('up')) {
        $('html').addClass('up').removeClass('down')
        $('#header').stop().slideDown(300)
    }
    sct2 = sct1
})

// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    var htmlWidth= $('html').width()
    return htmlWidth
}
var scrollX = scrollOX('hidden')
var scrollO = scrollOX('scroll')
var swd = scrollX - scrollO
if(swd>0){
    deviceSize1 -= swd
    deviceSize2 -= swd
}

var ww = $(window).width()
function init(){
    ww = $(window).width()
    if (ww > deviceSize1 && !$('html').hasClass('pc')){
        $('html').addClass('pc').removeClass('tablet')
        $('#header .nav .depth1 li').removeClass('on')

    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('#header .nav').slideUp(300)
        $('#header .nav .depth1 li').removeClass('on')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on') 
    
    } else if ( ww<=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet')
        $('#header .nav').slideUp(300)
        $('#header .nav .depth1 li').removeClass('on')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
    
    }
}
init()
$(window).on('resize', function(){
    init()
})
// 여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램

// 네비 열고닫기
$('#header .open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().slideDown(300)
    $(this).next().next().addClass('on')
    $(this).next().find('i').addClass('on')
})
$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().slideUp(300)
    $(this).prev().prev().addClass('on')
    $(this).prev().find('i').removeClass('on')
})

// $('.depth1 > li').hover(
//     function(){
//     if($('html').hasClass('pc')){
//         $(this).addClass('on')
//     }
// },
//     function(){
//         if($('html').hasClass('pc')){
//             $(this).removeClass('on')
//         }
//     }
// ) 
$('.depth1 > li').on('click', function(e){
    if($('html').hasClass('mobile') || $('html').hasClass('tablet')){
        e.preventDefault()
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    }
})

$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})
