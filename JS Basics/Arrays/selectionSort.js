(function () {
    var minIndex = 0,
        array = [1, 23, 465, 656, 68, 7],
        temp;

    console.log(array);
    for (var i = 0; i < array.length - 1; i += 1) {
        minIndex = i;
        for (var j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    console.log(array);
}());