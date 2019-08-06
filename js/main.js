$(document).ready(function() {
  //Adjust Header Height

  var myHeader = $(".header");
  //var mySlider = $(".slider");

  myHeader.height($(window).height());

  $(window).resize(function() {
    myHeader.height($(window).height());

    // Adjust Bx Slider Div Items center

    $(".slider").each(function() {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".slider div").height()) / 2
      );
    });
  });

  //Links Add Active Class

  $(".links li a").on("click", function() {
    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // Adjust Bx Slider Div Items center

  $(".slider").each(function() {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".slider div").height()) / 2.5
    );
  });

  //Trigger The Bx Slider
  $(".slider").bxSlider({
    pager: false
  });

  // Smooth Scroll To Div

  $(".links li a").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top
      },
      1000
    );
  });


  //Our Auto Slider Code
  (function autoSlider(){

    $('.mySlider .active').each(function(){

      if(!$(this).is(":last-child")){

        $(this).delay(2000).fadeOut(1000,function(){

          $(this).removeClass("active").next().addClass("active").fadeIn();
          autoSlider();

        });
      }else{

        $(this).delay(2000).fadeOut(1000,function(){
          $(this).removeClass("active");
          $(".mySlider div").eq(0).addClass("active").fadeIn();
          autoSlider();
        })


      }

    })

  }());

  // Trigger MixItUp

  $("#container").mixItUp();

  //Adjust Shuffle Links

  $(".shuffle li").on("click",function(){

    $(this).addClass("selected").siblings().removeClass("selected");

  });

  //Trigger Nice Scroll
  $("html").niceScroll({

    cursorcolor : "#19ba99",
    cursorwidth : "10px",
    cursorborder : "1px solid #19ba99"
  });


  //End
});
