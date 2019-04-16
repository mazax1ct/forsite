function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

$(document).ready(function() {
  $('html').removeClass('no-js');

  //открытие/закрытие главного меню
  $(".js-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $("body").toggleClass("overflow");
    $(".main-menu").toggleClass("is-open");
    $(".main-menu-block").toggleClass("is-open");
    return false;
  });

  // дропдаун у главного меню
  if(isTouchDevice()===true) {
    $('.root-link').click(function(){
      if(!$(this).parent().hasClass('is-hover')){
        var sub = $(this).next('.main-menu__dropdown');
        if(sub.is(':visible')){
          $('.main-menu__dropdown').removeClass('open');
          return true;
        } else {
          $('.main-menu__dropdown').removeClass('open');
          sub.addClass('open');
          return false;
        }
      }
    });
  } else {
    $('.root').hover(
      function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeIn(200);
      }, function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeOut(200);
      }
    );
  }
});
