(function () {
    var first = 'az';
    var second = 'aaz';

    if (first.length > second.length) {
        console.log("the second array is smaller");
    } else if (first.length < second.length) {
        console.log("the first array is smaller");
    } else {
        for (var i = 0; i < first.length; i += 1) {
            if (first[i] > second[i]) {
                console.log("the second array is smaller");
                break;
            } else if (first[i] < second[i]) {
                console.log("the first array is smaller");
                break;
            }
        }
        if (first === second) {
            console.log("the arrays are equal one to another");
        }
    }
}());