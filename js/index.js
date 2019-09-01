$('#content').delay(20).fadeIn(1000);

$('footer').delay(20).fadeIn(1000);

(function($) {
  $(function() {
    $('.toggleOverlay').click(function() {
      $('aside').toggleClass('open');
    });
  });
})(jQuery);