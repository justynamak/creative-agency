$(document).ready(function(){
    
    var hamburger = $('.fa-bars');
    var menu = $('.nav');
    
    hamburger.bind('click', function(event){
       
        menu.stop().slideToggle(300);
    });
    
    $(window).resize(function(event){
        
        if (!hamburger.is(':visible')) {
            
            menu.removeAttr('style');
        }    
    });
    
    $('.nav__link').bind('click', function(event){
        
       if (hamburger.is(':visible')) {
           
           menu.stop().slideToggle();
       }
    });
});