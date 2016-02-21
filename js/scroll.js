
// Detect scroll passed home section, change nav menu position

$(window).scroll(function() {

    var nextSect = $( ".code-section" );

    if ($(window).scrollTop() > nextSect.position().top) {
      $('nav').addClass("nav-sticky");
      $('nav').removeClass("nav-bottom");
    } else {
      $('nav').removeClass("nav-sticky");
      $('nav').addClass("nav-bottom");                    
    }
});


