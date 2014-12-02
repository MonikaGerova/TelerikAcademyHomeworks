(function () {
    var $input = $('#students');
    var $btn = $('#btn');
    var $result = '';
    $btn.on('click', function () {
        getValueOfInput($input);
    });

    function getValueOfInput(input) {
        var value = input.val();
        var arr = [];
        value = value.split(', ');
        for (var i = 0; i < value.length; i++) {
            var data = value[i].split(' ');

            arr[i] = {
                fname: data[0],
                lname: data[1],
                grade: data[2]
            }
        }

        var $wrapper = $("#wrapper");

        if ($wrapper.html() === '') {
            var table = $('<table>');
            table.appendTo($wrapper);
        } else {

            var table = $('table');

        }
        $('<tr>')
            .append(
            $('<td>')
                .html('First Name'),
            $('<td>')
                .html('First Name'),
            $('<td>')
                .html('First Name')
        )
            .appendTo(table);

        for (var rows = 0; rows < arr.length; rows++) {
            var row = $('<tr>');
            var fname = $('<td>').text(arr[rows].fname);
            var lname = $('<td>').text(arr[rows].lname);
            var grade = $('<td>').text(arr[rows].grade);

            row.append(fname);
            row.append(lname);
            row.append(grade);
            row.appendTo(table);
        }

    }


})();