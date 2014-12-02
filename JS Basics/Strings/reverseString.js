(function () {
    var string = 'sample';


    function reverseString(str) {
        var reversed = '';
        for (var i = str.length - 1; i >= 0; i -= 1) {
            reversed += str[i];
        }
        return reversed;
    }


   var reversed = reverseString(string);
    console.log('Reversed: ' + reversed);
}());