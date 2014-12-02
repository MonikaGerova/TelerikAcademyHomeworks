(function () {
    var $input = $('#change');

    $input.on('change',function changeBackground(){
        var $body = $('body');
        var color = $input.val();

        $body.css('backgroundColor', color);
    })
})();