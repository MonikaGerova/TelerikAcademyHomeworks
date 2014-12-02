(function () {
    var array = [3, 1, 1, 4, 2, 1, 3, 4, 1, 2, 4, 9, 3],
        counter = 1,
        maxLen = 1,
        mostFrequent;

    for (var i = 0; i < array.length - 1; i += 1) {
        for (var j = i + 1; j < array.length; j += 1) {
            if (array[i] === array[j]) {
                counter += 1;
                if(maxLen<counter){
                    maxLen = counter;
                    mostFrequent = array[j];
                }
            }
        }
        counter = 1;
    }

    console.log("Most frequent number is " + mostFrequent + " ("+ maxLen + " times )");

}());