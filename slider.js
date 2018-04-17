
$(document).ready(function(){
  $('#nav').on("click", "li", function(e) {
    e.preventDefault();
    var target = $(this).attr('data-target');
    $(this).parent('#nav').find(".to_focus").removeClass('to_focus');
    $(this).addClass('to_focus');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
  });

  $(window).scroll(function(){
    menuscroll();
  });
  function menuscroll(){
    var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
    $('.box').each(function (index) {
      if (windowTop > ($(this).position().top - 300))
      {
        $('#nav li:eq('+ index +')').addClass('to_focus').siblings().removeClass('to_focus');
      }
    });
  }
  menuscroll();
});
