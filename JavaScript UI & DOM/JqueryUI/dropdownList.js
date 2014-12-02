(function ($) {
    $.fn.dropdown = function () {
        var $this = $(this);
        $this.css('display', 'none');

        var $Dropdown = $('<div>');
        var $listOptions = $('<ul>');

        $Dropdown.addClass('dropdown-list-container');
        $listOptions.addClass('dropdown-list-options');

        var $lengthOfOptions = $this.children('option');

        for (var i = 0; i < $lengthOfOptions.length; i++) {
            var $option = $('<li>');

            $option.addClass('dropdown-list-option');
            $option.html($lengthOfOptions[i].textContent);
            $option.attr('data-value', i);
            $option.appendTo($listOptions);
        }

        $Dropdown.append($listOptions);
        $Dropdown.appendTo(document.body);

        var $listOptionsLi = $('.dropdown-list-option');

        for (var j = 0; j < $lengthOfOptions.length; j++) {
            var opt = $($lengthOfOptions[j]);
            var selectedOptLi = '';
            if (opt.attr('selected')) {
                selectedOptLi = $($listOptionsLi[j]);
                selectedOptLi.addClass('selected');
                var index = j;
            } else {
                selectedOptLi = $($listOptionsLi[j]);
                selectedOptLi.addClass('not-selected');
            }
        }

        var openSelect = '';

        $listOptionsLi.on('click', function () {
            var $clickedOpt = $(this);
            var newIndex = $clickedOpt.attr('data-value');
            var $notSelectedItems = $('.not-selected');

            if (openSelect) {
                var clickedBefore = $('.selected');
                var $selectedInSelect = $($('#dropdown').find('option')[index]);
                var $newSelected = $($('#dropdown').find('option')[newIndex]);

                $newSelected.attr('selected', 'selected');
                $selectedInSelect.removeAttr('selected');

                clickedBefore.addClass('not-selected');
                clickedBefore.removeClass('selected');

                $clickedOpt.addClass('selected');
                $clickedOpt.removeClass('not-selected');

                $notSelectedItems = $('.not-selected');
                $notSelectedItems.css('display', 'none');

                openSelect = false;
            } else {
                $notSelectedItems.css('display', 'block');

                openSelect = true;
            }
        });

        return $this;
    };

    $('#dropdown').dropdown();

})(jQuery);