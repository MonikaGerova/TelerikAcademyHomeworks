(function () {
    var array = [1, 2, 45, 65, 2, 3, 5, 2, 4, 3, 5, 342, 63];
    var firstBigger  = firstBiggerThanItsNeighbors(array);

    console.log(array);
    console.log("The first number bigger than its neighbors is " + firstBigger);

    function firstBiggerThanItsNeighbors(arr) {
        var biggerOrNot;
        for (var i = 0; i < arr.length; i += 1) {
            biggerOrNot = biggerThanItsNeighbors(arr, i);
            if (biggerOrNot) {
                return 'array['+i+'] = ' +arr[i]  ;
            }
        }
    }

    function biggerThanItsNeighbors(arr, index) {
        var isBigger = false;

        if (index === 0) {
            if (arr[index] > arr[index + 1]) {
                isBigger = true;
                return isBigger;
            } else {
                return isBigger;
            }
        } else if (index === length - 1) {
            if (arr[index] > arr[index - 1]) {
                isBigger = true;
                return  isBigger;
            } else {
                return isBigger;
            }
        } else {
            if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
                isBigger = true;
                return isBigger;
            } else {
                return isBigger;
            }
        }
    }

})
();