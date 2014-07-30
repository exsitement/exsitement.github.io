$(function() {
    var pull 		= $('#pull');
        menu 		= $('nav ul');
        menuHeight	= menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});


$(window).load(function() {
    $('#slider').nivoSlider();
});

$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show(['vid/coffeecup.mp4','vid/creamer.mp4'],{ambient:true});
});
