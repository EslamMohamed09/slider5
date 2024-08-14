$(document).ready(function(){

  $('.slider').owlCarousel({
    loop:true,
    autoplay:true,
    nav:true,
    dots:false,
    animateOut:"fadeOut",
    autoplayTimeout:10000,
    items:1,
    center:false,
    navText: [
        '<i class="fa fa-angle-left" id="back-btn"></i>',
        '<i class="fa fa-angle-right" id="next-btn"></i>',
    ],    
   

});    


 })(jQuery);



 
