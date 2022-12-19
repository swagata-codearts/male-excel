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

jQuery('#our-team-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1024:{
            items:3
        },
        1400:{
            items:4
        }
    }
  })

jQuery('#testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
       if(jQuery(this).scrollTop() > 200 ) {
       jQuery(".custom-header").addClass("fixed-top");
       jQuery(".header-top").slideUp();
    //    jQuery(".banner_socials").addClass("slide-left")
      } else {
       jQuery(".custom-header").removeClass("fixed-top");
       jQuery(".header-top").slideDown();
    //    jQuery(".banner_socials").removeClass("slide-left");
      }
    });

    jQuery('.count-number').each(function () {
        jQuery(this).prop('Counter',0).animate({
            Counter: jQuery(this).text()
        }, {
          
          //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });
});