$(function(){
    
    var menu = $('header > .menu > div > ul');
    $(window).scroll(function(){

        var t = $(this).scrollTop();

        if( t > 620 ){
            menu.css({
                'position':'fixed',
                'top': '0'  
            })
        }else{
            menu.css({'position':'static'})
        }
    });

});