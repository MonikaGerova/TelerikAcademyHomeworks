(function () {
    var array = [10, 2, 45, 65, 2, 3, 5, 2, 4, 3, 5, 342, 63],
        givenPosition = 12;
    var result = biggerThanNeighbors(array,givenPosition);

    console.log('ARRAY: ' + array);
    console.log(result);

    function biggerThanNeighbors(arr, index) {
        var length = arr.length;
        if (index < length) {
            if (index === 0) {
                if (arr[index] > arr[index + 1]) {
                    return 'The number at position ' + index + ' with value ' + arr[index] + ' is bigger than his neighbor';
                } else {
                    return 'The number at position ' + index + ' with value ' + arr[index] + ' is smaller than his neighbor';
                }
            } else if (index === length - 1) {
                if (arr[index] > arr[index - 1]) {
                    return 'The number at position ' + index + ' with value ' + arr[index] + ' is bigger than his neighbor';
                } else {
                    return 'The number at position ' + index + ' with value ' + arr[index] + ' is smaller than his neighbor';
                }
            } else {
                if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
                    return 'The number at position ' + index + ' with value ' + arr[index] + ' is bigger than his neighbors';
                } else {
                    return 'The number at position ' + index + ' with value ' + arr[index] + ' is smaller than his neighbors';
                }
            }
        }
        else {
            return "This index doesn't exist in the given array";
        }
    }
}());