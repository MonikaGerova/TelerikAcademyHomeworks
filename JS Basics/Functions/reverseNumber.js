(function () {
    var number = 1215,
        temp,
        reversed = "";

    console.log("number: " + number);
    number = number.toString();
    for (var i = 0, j = number.length - 1; i < number.length; i += 1, j -= 1) {
        reversed += number[j];
    }

    console.log("Reversed number: " + reversed);
}());
