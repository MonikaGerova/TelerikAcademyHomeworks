(function () {
    var $errorMessage, $successMessage, addStudent, reloadStudents, resourceUrl, deleteStudent;

    resourceUrl = 'http://localhost:3000/students/';

    $successMessage = $('.messages .success');

    $errorMessage = $('.messages .error');

    addStudent = function (data) {
        return $.ajax({
            url: resourceUrl,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {
                $successMessage
                    .html('' + data.name + ' successfully added')
                    .show()
                    .fadeOut(2000);
                reloadStudents();
            },
            error: function (err) {
                $errorMessage
                    .html('Error happened: ' + err)
                    .show()
                    .fadeOut(2000);
            }
        });
    };

    reloadStudents = function () {
        $.ajax({
            url: resourceUrl,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                var student, $studentsList, i, len;
                $studentsList = $('<ul/>').addClass('students-list');
                for (i = 0, len = data.students.length; i < len; i++) {
                    student = data.students[i];
                    $('<li />')
                        .addClass('student-item')
                        .append($('<strong /> ')
                            .html(student.name))
                        .append($('<span />')
                            .html(student.grade))
                        .append($('<button />')
                            .addClass('delete-students')
                            .attr('id', student.id)
                            .text('X')
                            .on('click', function () {
                                var student;
                                student = {
                                    id: this.id
                                }
                                deleteStudent(student);
                            })
                        )

                        .appendTo($studentsList);
                }
                $('#students-container').html($studentsList);
            },
            error: function () {
                $errorMessage
                    .html("Error happened: " + err)
                    .show()
                    .fadeOut(2000);
            }
        });
    };

    deleteStudent = function (data) {
        $.ajax({
            url: resourceUrl + data.id ,
            type:'POST',
            data: {_method: 'delete'},
            success: function (data) {
                $successMessage
                    .html('Successfully deleted')
                    .show()
                    .fadeOut(2000);
                reloadStudents();
            },
            error: function (err) {
                $errorMessage
                    .html('Error happened: ' + err)
                    .show()
                    .fadeOut(2000);
            }

        });

    };

    $(function () {
        reloadStudents();
        $('#btn-add-student').on('click', function () {
            var student;
            student = {
                name: $('#tb-name').val(),
                grade: $('#tb-grade').val()
            };
            addStudent(student);
        });
    });


})();