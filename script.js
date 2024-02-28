$(document).ready(function(){

  ////SHADOWBOX
    //toggle '.active' on elements with '.shadowbox'
    $('.shadowbox').on('click', function() {
        const image = $('.shadowbox img');
        var standee = $('<div>');
        standee.css('width', image.width());
        standee.css('height', image.height());
        standee.addClass('temporary');
        console.log(`${standee.width()}, ${standee.height()}`);

        //switch shadowbox
        $(this).toggleClass('active');

        //remove temporary elements
        $('div.temporary').detach();

        //if shadowbox is active, insert standee
        if($(this).hasClass('active')) {
            $(this).before(standee);
        }
    });

});