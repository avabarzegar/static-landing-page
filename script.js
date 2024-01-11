$(document).ready(function(){
    // start-of-navbar   
    $(".div-big-burger-menu").click(function(){
       $(".overlay").css({"width":"100%"});
       $("html,body").css("overflow-y","hidden");
    })
 
    $("#bbnd").click(function(){
      $(".overlay").css({"width":"0%"});
      $("html,body").css("overflow-y","auto");
    });
 
    var zero = 0;
     $(window).on('scroll', () => {
         if ($(window).scrollTop() > zero) {
             $(".navbar").addClass('nav-background')}
          else {
             $(".navbar").removeClass('nav-background') 
          }
     })
    //  end-of-navbar
  });
 
 
 
 
 
 