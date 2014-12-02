(function () {
    var array = [1, 2, 2, 34, 4, 653, 5, 213, 5641, 2, 3, 5, 6, 2],
        searchedNum = 63,
        minIndex = 0,
        maxIndex = array.length - 1,
        isExisting = false;

    function orderBy(a, b) {
        return (a == b) ? 0 : (a > b) ? 1 : -1;
    };

    console.log(array);
    array = array.sort(orderBy);
    console.log(array);

    for (var i = 1; i < array.length; i += 1) {
        if (array[i] === array[i - 1]) {
            array.splice(i, 1);
            i -= 1;
        }
    }

    console.log(array);
    while (maxIndex >= minIndex) {
        var midIndex = Math.floor((maxIndex / 2) + (minIndex / 2));
        if (array[midIndex] === searchedNum) {
            console.log("The index of the num you enter is " + midIndex);
            break;
        } else if (array[midIndex] < searchedNum) {
            minIndex = midIndex + 1;
        } else if (array[midIndex] > searchedNum) {
            maxIndex = midIndex - 1;
        }
        else {
            console.log("number " + searchedNum + " doesn't exist in the array");
            break;
        }
    }
}());