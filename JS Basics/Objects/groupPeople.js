(function () {
    var persons = [
        {'firstname': 'Gosho', lastname: 'Petrov', age: 32 },
        {'firstname': 'Gosho', lastname: 'Ivanov', age: 32 },
        {'firstname': 'Bay', lastname: 'Ivanov', age: 81},
        {'firstname': 'Ivan', lastname: 'Petrov', age: 12},
        {'firstname': 'Ivan', lastname: 'Draganov', age: 23},
        {'firstname': 'Ivan', lastname: 'Petkanov', age: 233}
    ];


    function group(arr, type) {
        var grouped = [];

        for (var i = 0, index = 0; i < arr.length; i += 1, index += 1) {
            if (grouped[arr[i][type]] === undefined) {
                grouped[arr[i][type]] = {};
                index = -1;
                i -= 1;
            } else {
                grouped[arr[i][type]][index] = arr[i];
            }
        }
        return grouped;
    }

    var grouped = group(persons, 'firstname');

    console.log(grouped);

}());