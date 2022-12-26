$(function(){

    //팝업열기 닫기기능
    /**
     * @popFrame 아이디값을 넣으세요
     *  */
    function popClose(popFrame){
        $(popFrame).css('display','none');
    }

    function popOpen(popFrame){
        $(popFrame).css('display','block');
    }




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



     //전체 약관
     











    //  #monthly

    $('#monthly .info-area2 .arrow').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('.sub-list').toggle()
    })

    $('#monthly .info-area3 .title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.wrap').find('.table').toggleClass('on');
    })
    $('#exservice2 .list .more').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('.desc-wrap').toggleClass('on');
    })


    $('#joinForm1 .btn-arrow').click(function(e){
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).parents('li').find('.desc').toggle()

    })

    $('#join1 .btn-arrow').click(function(e){
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).parents('li').find('.desc').toggle()

    })



    $('#self1 .qna-wrap .tab').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('.sub-area').toggleClass('active');
    });


    $('.radio-chk').click(function (e) { 
        $(this).addClass('active').siblings('.radio-chk').removeClass('active');
    });



    // 4-0신청내역조회
    // appli1
    $('#appli1 .radio-box label').click(function(){

        if($(this).siblings('input').val() == 'phone'){
            $('#phone').css('display','flex')
            $('#mail').css('display','none')
        }else{
            $('#mail').css('display','flex')
            $('#phone').css('display','none')
        }
    })


    $('#pay2 .identity label').click(function(){

        target = $(this).siblings('input').val();
        $('#'+target).addClass('active').siblings().removeClass('active')
    })


    $('#exservice2 .addservice label').click(function(){
        target = $(this).siblings('input').val();
        $('#'+target).addClass('active').siblings().removeClass('active')
    })


    $('#joinFrom1 #sort label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinFrom1 #'+target).css('display','block').siblings().css('display','none')
    })

    $('#joinFrom1 #isSim label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinFrom1 #'+target).css('display','block').siblings().css('display','none')

        if(target == 'has1'){
            $('#joinFrom1 #has1-1').css('display','block').siblings().css('display','none')
        }else{
            $('#joinFrom1 #has1-2').css('display','block').siblings().css('display','none')

        }
       
    })




    $('#joinFrom1 #has1-1 label').click(function(){
        target = $(this).siblings('input').val();
        $('#'+target).css('display','block').siblings().css('display','none')
    })
    $('#joinFrom1 #has1-2 label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinFrom1 #'+target).css('display','block').siblings().css('display','none')
    })



    $('#joinFrom1 .fix-total .btn.top').click(function(){
        $('html,body').animate({scrollTop:0},300);
        return false;
    })



    // 17-1 온라인_가입신청서2
    $('#joinFormWrap .group-nav2 a').click(function(e){
        e.preventDefault();
        target = $(this).data('target');
        $(this).addClass('active').siblings().removeClass('active')
        $(target).addClass('on').siblings().removeClass('on')
    })
    // 실명 확인 증빙 자료
    $('#joinForm01 .id-radio1 label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm01 #'+target).css('display','block').siblings().css('display','none')
    })
    $('#joinForm2 .id-radio2 label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })
    $('#joinForm2 .id-radio3 label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })

    //본인인증 방법
    $('#joinForm01 .auth1-chk label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm01 #'+target).css('display','block').siblings().css('display','none')
    })


    $('#joinForm2 .auth2-chk label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })
    $('#joinForm2 .auth3-chk label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })
    $('#joinForm2 .auth4-chk label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })

    // 납부 수단별 노출
    $('#joinFormData .method-area label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinFormData #'+target).css('display','block').siblings().css('display','none')
    })


    // selfform1
    // 셀프 개통가입신청서
    $('#joinForm2 .id-radio4 label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })
   

    $('#joinForm2 .method-area label').click(function(){
        target = $(this).siblings('input').val();
        $('#joinForm2 #'+target).css('display','block').siblings().css('display','none')
    })



})