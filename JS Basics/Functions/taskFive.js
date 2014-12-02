(function () {
    test();

    function test() {
        var array = [1, 2, 34, 5, 6, 78, 321, 1, 2, 3, 4, 5, 4, 333, 3, 4, 3, 3, 4, 3, 3],
            number = 3;

        var result = howManyTimesItAppears(number, array);

        console.log("ARRAY: " + array);
        console.log("NUMBER: " + number);
        console.log('Number "' + number + '" is appeared ' + result + ' times');
    }

    function howManyTimesItAppears(number, array) {
        if (number === undefined || array === undefined) {
            return  "please give parameters!";
        } else {
            var counter = 0;

            for (var i = 0; i < array.length; i += 1) {
                if (number === array[i]) {
                    counter += 1;
                }
            }

            return counter;
        }
    }
}());