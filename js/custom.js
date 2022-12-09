// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
       if(jQuery(this).scrollTop() > 200 ) {
       jQuery(".custom-header").addClass("fixed-top");
       jQuery(".header-top").slideUp();
       jQuery(".banner_socials").addClass("slide-left").removeClass("sticky-left");
      } else {
       jQuery(".custom-header").removeClass("fixed-top");
       jQuery(".header-top").slideDown();
       jQuery(".banner_socials").removeClass("slide-left");
      }
    });
    jQuery(window).scroll(function() {
       if(jQuery(this).scrollTop() > 400 ) {
        jQuery(".banner_socials").removeClass("slide-left").addClass("sticky-left");
       } else if(Math.round(jQuery(window).scrollTop()) + jQuery(window).innerHeight() == jQuery(document).height()) {
        loadPagination();
        alert("2210")
        jQuery(".banner_socials").removeClass("sticky-left").addClass("slide-left");
        
       }
      
    });
});