(function () {
    var $div = $('#div');
    var btnInsertBefore = $('#insertBefore');
    var btnInsertAfter = $('#insertAfter');

    btnInsertBefore.on('click', function () {
        insert(btnInsertBefore.attr('id'))
    });
    btnInsertAfter.on('click', function () {
        insert(btnInsertAfter.attr('id'))
    });

    function insert(id) {
        var $input = $('#input');
        var $id = id;

        $input = $input.val().split(', ');

        var $AddElement = $input[0];
        var selectedElement = $input[1];
        var select = $('#div ' + selectedElement);

        if (select.length === 0) {
            var $wrong = $('#wrong');

            $wrong.html(' you want to add <strong>' + $AddElement +'</strong>  before/after The element <strong>' + selectedElement + '</strong> but such element doesn\'t exist!');
        } else {
            var add = $('<' + $AddElement + '>');

            add.html($AddElement);
            if ($id === 'insertBefore') {
                add.insertBefore(select);
            } else {
                add.insertAfter(select);
            }
        }
    }


})();