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

var ww;
function init(){
    var ww = $(window).width()
    if (ww > deviceSize1 && !$('html').hasClass('pc')){
        $('html').addClass('pc').removeClass('tablet')
        $(".slide_group2").slick({
            autoplay: true, // 자동재생
            autoplaySpeed: 4000, // 간격시간
            dots: true, // 동그라미버튼
            speed: 800, // 바뀌는시간(생략가능)
            slidesToShow: 4, // 보여질슬라이드수(생략가능)
            slidesToScroll: 1, // 이동슬라이드수(생략가능)
            pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
            pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
            pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
            cssEase: 'linear', // 속도함수(생략가능)
            draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
            fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
            arrows: false, // 좌우화살표 사용여부(생략가능)
            prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
        })
    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('.depth1 > li').removeClass('on')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
        $(".slide_group2").slick({
            autoplay: true, // 자동재생
            autoplaySpeed: 4000, // 간격시간
            dots: true, // 동그라미버튼
            speed: 800, // 바뀌는시간(생략가능)
            slidesToShow: 3, // 보여질슬라이드수(생략가능)
            slidesToScroll: 1, // 이동슬라이드수(생략가능)
            pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
            pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
            pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
            cssEase: 'linear', // 속도함수(생략가능)
            draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
            fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
            arrows: false, // 좌우화살표 사용여부(생략가능)
            prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
        })
    } else if ( ww<=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
        $(".slide_group2").slick({
            autoplay: true, // 자동재생
            autoplaySpeed: 4000, // 간격시간
            dots: true, // 동그라미버튼
            speed: 800, // 바뀌는시간(생략가능)
            slidesToShow: 2, // 보여질슬라이드수(생략가능)
            slidesToScroll: 1, // 이동슬라이드수(생략가능)
            pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
            pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
            pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
            cssEase: 'linear', // 속도함수(생략가능)
            draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
            fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
            arrows: false, // 좌우화살표 사용여부(생략가능)
            prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
        })
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
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
    $(this).next().find('i').addClass('on')
})
$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().prev().addClass('on')
    $(this).prev().find('i').removeClass('on')
})

$('.depth1 > li').hover(
    function(){
    if($('html').hasClass('pc')){
        $(this).addClass('on')
    }
},
    function(){
        if($('html').hasClass('pc')){
            $(this).removeClass('on')
        }
    }
) 
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


// article1 슬라이드 //
$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
})

//article4 슬라이드 //
// $(".slide_group2").slick({
//     autoplay: true, // 자동재생
//     autoplaySpeed: 4000, // 간격시간
//     dots: true, // 동그라미버튼
//     speed: 800, // 바뀌는시간(생략가능)
//     slidesToShow: 4, // 보여질슬라이드수(생략가능)
//     slidesToScroll: 1, // 이동슬라이드수(생략가능)
//     pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
//     pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
//     pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
//     cssEase: 'linear', // 속도함수(생략가능)
//     draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
//     fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
//     arrows: false, // 좌우화살표 사용여부(생략가능)
//     prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
//     nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
// })

// article4 내부 글씨 //




// article6 //
$('.article6 i').on('click', function(){
    if($(this).hasClass('fa-angle-down')){
        $(this).removeClass('fa-angle-down').addClass('fa-angle-up')
        $(this).parent().parent().addClass('on')
        $(this).parent().parent().next().slideDown(200)
        $(this).parents('li').siblings().children('p').slideUp(200)
        $(this).parents('li').siblings().children('p').removeClass('on')
        $(this).parents().siblings().find('i').removeClass('on').removeClass('fa-angle-up').addClass('fa-angle-down')
     
    } else{
        $(this).addClass('fa-angle-down').removeClass('fa-angle-up')
        $(this).parent().parent().removeClass('on')
        $(this).parent().parent().next().slideUp(200)
    }
    
})

// article8 슬라이드 //
$(".slide_group3").slick({
    autoplay: false, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: false, // 동그라미버튼
    speed: 500, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
})


