(function () {
    var arr = [1, 3, 4, 5,63, 13, 23, 2, 3, 1],
        counter = 1,
        maxLen = 1,
        startingIndex,
        mostFrequendNums = [],
        floor = 0;

    for (var i = 1; i < arr.length; i += 1) {
        if (arr[i] === arr[i - 1]) {
            counter += 1;
            if (counter > maxLen) {
                maxLen = counter;
                startingIndex = i - 1;
            }
        } else {
            counter = 1;
        }
    }

    console.log("max len = " + maxLen);
    console.log("start index =" + startingIndex);

    if (maxLen === 1) {
        console.log("there are no sequences of equal elements");
    } else {
        floor = Math.floor(maxLen / 2)
        for (var j = 0, index = startingIndex - floor; j < maxLen; j += 1, startingIndex += 1) {
            mostFrequendNums[j] = arr[index];
        }
        console.log(mostFrequendNums);
    }
}());