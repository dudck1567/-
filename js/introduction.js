function draw(jumsu, cname) {
  var count=0;
  var stop = setInterval(function(){
      count++
      if (count<=jumsu) {
          $(cname).find('.scoretxt').text(count+'%')
      } else {
          clearInterval(stop)
          return false
      }
  },10)
}

var article2Near = $('.article2').offset().top

$(window).on('scroll', function(){
  var sct = $(this).scrollTop()
  if (sct>=200) {
    if ( !$('.skillContainer').hasClass('on') ) {
      $('.skillContainer').addClass('on')
      draw(92, '.HTML')
      draw(97, '.CSS')
      draw(88, '.JQUERY')
      draw(80, '.JAVA')
    }
  } else {
    $('.skillContainer').removeClass('on')
  }
  if(sct>=article2Near && !$('.article3').hasClass('on')){
    $('.article3').addClass('on')
    counter(350, ".count1")
    counter(1500, ".count2")
    counter(875, ".count3")
    counter(984, ".count4")
  }
  if(sct<article2Near && $('.article3').hasClass('on')){
    $('.article3').removeClass('on')
  }

})

function counter(num, cname){
  var count=0;
  var atc3 = setInterval(function(){
    count=count+5
    if(count<=num){
      $(cname).text(count);
    } else{
      clearInterval(atc3)
      return false
    } 
  }, 10);
}