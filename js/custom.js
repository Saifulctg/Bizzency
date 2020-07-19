$(function(){
    var menuOffSet = $('#header').offset().top
    var skillOffSet = $('#about').offset().top
    var serviceOffSet = $('#service').offset().top
    var backToTop = $('.backToTop')
    $(window).on('scroll', function(){
        var scrollSize =$(window).scrollTop()

        if(menuOffSet < scrollSize){
           $('#header').addClass('header_fixed')
        } else {
            $('#header').removeClass('header_fixed')
         }

        if(scrollSize > 200){
            backToTop.fadeIn(1000)
         } else{
            backToTop.fadeOut(1000)
         }

    })
 
    backToTop.on('click', function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })

    // $('.protfolio_items').slick({
    //     centerMode: true,
    //     centerPadding: -20,
    //     slidesToShow: 3,
        
    //   });
    
})