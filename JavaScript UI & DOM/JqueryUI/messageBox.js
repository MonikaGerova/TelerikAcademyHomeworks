(function ($) {
    $.fn.messageBox = function () {
        var $btn = $('button');
        $btn.on('click', function () {
            $this = $(this)
            var id = $this.attr('id');
            var createMessage = $('<div>');

            createMessage.css({
                'border': '1px solid black',
                'border-radius': '15px',
                'width': '300px',
                'height': '50px',
                'font-size': '36px',
                'text-align': 'center',
                'margin': '5px'
            });
            createMessage.fadeIn(1000, function () {
                createMessage.css('opacity', 1);

            });

            if (id === 'success') {
                createMessage.css('background-color', '#84D76C');
                createMessage.html('Success Message');
            } else if(id==='error'){
                createMessage.css('background-color', '#E04343');
                createMessage.html('Error Message');
            }else{
                createMessage.css('background-color', '#FFC700');
                createMessage.html('Warning Message');
            }

            createMessage.appendTo('#message-box');

            setInterval(function () {
                createMessage.fadeOut(1000, function () {
                    createMessage.css('opacity', 0)
                })
            }, 3000)

        })
    };

    $('#message-box').messageBox();

})(jQuery);