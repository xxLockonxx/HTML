$(function(){
    
    var best = $('aside > .recent_index');
    $(window).scroll(function(){

        var t = $(this).scrollTop();

        if( t > 230 ){
            best.css({
                'position':'fixed',
                'top': '0'       
            })
        }else{
            best.css({'position':'static'})
        }    
    });

});