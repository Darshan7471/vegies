//this is for login popup
$(function () {
    $('a.btn-login').on('click',function () {
        $('.login-sec').toggleClass('active-popup');
    });
});

//this is for header
$(function() {
    $(window).on("scroll ", function() {
      if ($(window).scrollTop() > 1) {
          $(".header").addClass("header-fixed");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
          $(".header").removeClass("header-fixed");
      }
    });
    });

//this is for mobile

$(document).ready(function(){
    if ($(window).width() <= 991) {  
        $(".hero-banner").addClass("mobile-banner");
        }  
    });

    $(function() {
        $(window).on("scroll ", function() {
          if ($(window).scrollTop() > 1) {
              $(".mobile-banner").addClass("mobile-banner-new");
          } else {
              //remove the background property so it comes transparent again (defined in your css)
              $(".mobile-banner ").removeClass("mobile-banner-new");
          }
        });
        });

