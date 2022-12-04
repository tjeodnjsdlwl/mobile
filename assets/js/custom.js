$(function(){
    /**
     * header 
     */
    $('.header .btn-menu').click(function (e) { 
        e.preventDefault();
        $('.sidenav').addClass('show');
    });

    $('.sidenav .btn-close').click(function (e) { 
        e.preventDefault();
        $('.sidenav').removeClass('show');
    });

    $('.sidenav .group-nav .nav').click(function(e){
        if($(this).siblings().length){
            e.preventDefault();
            $('.sidenav .group-nav .nav').removeClass('active');
            $(this).addClass('active');

            $('.sub-list').removeClass('active');
            $(this).siblings('.sub-list').addClass('active');
        }
    })



    /**
     * index
     *  
     * */

     var swiper = new Swiper("#main .slide1", {
        spaceBetween:20,
        pagination:{
            el:'.swiper-pagination'
        }
     });
     var swiper = new Swiper("#main .intro2 .slide1", {
        spaceBetween:20,
        pagination:{
            el:'.swiper-pagination'
        }
     });

     $('#main .sc-intro .group-nav a').click(function(e){
        e.preventDefault();
        target = $(this).attr('href');
        $(this).addClass('active').siblings().removeClass('active')
        $(target).addClass('active').siblings().removeClass('active')

     })


     var swiper = new Swiper("#main .slide2", {
        slidesPerView:'auto',
        loop:true,
        spaceBetween:10,
        centeredSlides:true,
        pagination:{
            el:'.swiper-pagination'
        }
     });


    // 
     $('#pay1 .radio-box label').click(function(){
        val = $(this).data('val');
        $('.method-wrap').css('display','none');
        $('#method'+val).css('display','block');

     })

})