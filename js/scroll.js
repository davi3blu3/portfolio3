
// Detect scroll passed home section, change nav menu position

$(window).scroll(function() {

    var aboutSect = $( ".about-section" );

    if ($(window).scrollTop() > aboutSect.position().top) {
      $('nav').addClass("nav-sticky");
      $('nav').removeClass("nav-bottom");
    } else {
      $('nav').removeClass("nav-sticky");
      $('nav').addClass("nav-bottom");                    
    }
});


