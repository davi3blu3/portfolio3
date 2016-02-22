
// Declare global variables
var nextSect = $( ".code-section" ),
navHeight = $( "nav" ).height(),
previousScroll = 0;

$(window).scroll(function() {
  
    // declare function variable
    var currentScroll = $(this).scrollTop();
  
    // Detect when scroll passes home section - nav height, make nav sticky
    if ($(window).scrollTop() > nextSect.position().top - navHeight) {
      $('nav').removeClass("nav-bottom");
      $('nav').addClass("nav-sticky");
      
      // past home section, scroll direction affects navbar appearance
      if (currentScroll > previousScroll) {
        $('nav').fadeOut(1600);
      } else {
        $('nav').fadeIn('slow');
      }
    } else {
      $('nav').removeClass("nav-sticky");
      $('nav').addClass("nav-bottom");
    }
    previousScroll = currentScroll;

});


