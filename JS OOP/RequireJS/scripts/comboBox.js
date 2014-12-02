define(['jquery'], function ($) {
    var newArr = [];

    function combo(arr) {
        var $div = $('<div>');
        var $title = $('<strong>');
        var $age = $('<p>');
        var $img = $('<img>');
        var $box = $('<div>');
        var $textBox = $('<div>');

        $img.css(
            {
                width: '100px',
                height: '130px'
            }
        );
        $img.attr('src', "{{imageUrl}}");

        $age.addClass('person-age');
        $age.html('{{age}}');

        $title.html('{{name}}');
        $title.addClass('person-name');

        $textBox.addClass('text-box');
        $textBox.css({
            'display': 'inline-block',
            'margin': '5px',
            'margin-left': '25px'
        });

        $box.css('width', '250px');
        $box.addClass('person-box');
        $box.attr('id', 'person-item-{{id}}');


        $textBox.append($title);
        $textBox.append($age);
        $box.append($img);
        $box.append($textBox);
        $box.appendTo($div);

        var start = '{{#options}}';
        var divHtml = $div.html()
        var end = '{{/options}}';
        var result = start + divHtml + end;

        return result;
    }

    return combo
});