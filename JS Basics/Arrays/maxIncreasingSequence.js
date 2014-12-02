(function () {
    var array = [ 3, 2, 3, 1, 2, 3, 4],
        count = 1,
        maxLen = 1,
        startingIndex,
        maxLenFloor,
        result = [];

    console.log("array: " + array);
    for (var i = 1; i < array.length; i += 1) {
        if (array[i] > array[i - 1]) {
            count += 1;
            if (count > maxLen) {
                maxLen = count;
                startingIndex = i - 1;
            }
        } else {
            count = 1;
        }
    }

    if (maxLen === 1) {
        console.log("there are no increasing sequences in this array ");
    } else {
        maxLenFloor = Math.floor(maxLen/2);
        for (var j = 0, index = startingIndex - maxLenFloor; j < maxLen; j += 1, index += 1) {
            result[j] = array[index];
        }
        console.log(result);
    }

}());
