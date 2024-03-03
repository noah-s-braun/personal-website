$(document).ready(function(){

  ////SHADOWBOX
    //toggle '.active' on elements with '.shadowbox'
    $('.shadowbox').on('click', function() {
        const image = $(this);
        console.log(image.width());
        var standee = $('<div>');
        standee.css('width', image.width());
        standee.css('height', image.height());
        standee.addClass('temporary');

        //remove temporary elements
        $('div.temporary').detach();

        //switch shadowbox
        $(this).toggleClass('active');

        //if shadowbox is active, insert standee
        if($(this).hasClass('active')) {
            $(this).before(standee);
        }
    });

    ////NO TRANSITION ON WINDOW RESIZE
    $(window).on('resize', function(){
        $('*').css('transition', '0s');
    });
    $(document).on('mouseenter', function(){
        $('a.button-primary, a.button-secondary, .card, .card-background').css('transition', '300ms ease-out');
    });

});