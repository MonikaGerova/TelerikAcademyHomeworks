(function () {
    function findYoungestPerson(arr) {
        var youngest = arr[0]
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i].age < arr[i - 1].age) {
                var youngest = arr[i];
            }
        }

        return youngest.firstname + ' ' + youngest.lastname;

    }

    var persons = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Bay', lastname: 'Ivan', age: 81},
        {firstname: 'Ivan', lastname: 'Petrov', age: 12}
    ];

    var youngestPerson = findYoungestPerson(persons);
    console.log('The youngest person is ' + youngestPerson);

}());