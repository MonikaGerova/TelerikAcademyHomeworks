define(['jquery'], function () {

    function Click() {

        var $box = $('.person-box');

        for (var i = 0; i < $box.length; i++) {
            $box.addClass('not-selected')
        }
        var selected = $('#person-item-1');
        selected.addClass('selected');
        selected.removeClass('not-selected');
        selected.css({
            'background-image': 'url(./images/arrow-down.png)'
        })

        $('.not-selected').hide();
        var isClicked = false;
        $box.on('click', function () {
            if (isClicked) {
               var $lastSelected = $('.selected');
                $lastSelected.addClass('not-selected');
                $lastSelected.removeClass('selected');
                $this = $(this);

                $this.addClass('selected');
                $this.removeClass('not-selected');

                $('.not-selected').hide()
                isClicked = false;
            } else {
                var childs = $(this).parent().find('.person-box');
                childs.show()
                isClicked = true;
            }
        });
    }
    return Click;
});