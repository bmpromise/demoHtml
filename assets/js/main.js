(function(){
  $(function(){
    var $window = $(window),$body = $('body');
    $body.addClass('is-loading');
    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });
    // move
    $("a").on('click',function(e){
      console.log(this.href);
      var txt = this.href,
          lastF = txt.lastIndexOf("#");
      if(lastF === -1){
        return;
      }
      txt = txt.slice(lastF);
      txt = txt.length===1 ? "#banner":txt;
      console.log($(txt).position().top)
      $('html,body').animate({scrollTop: $(txt).position().top},800);
      e.preventDefault();
    })
    $(this).on('scroll',function(){
      if($(this).scrollTop() >= $("#main").position().top){
        $('header').removeClass('alt');
      }else{
        $('header').addClass('alt');
      }
    })
  })
})()