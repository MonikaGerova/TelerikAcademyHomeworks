(function () {
    function replaceWhiteSpaces(str) {

        for (var i = 0; i < str.length; i += 1) {
            if (str[i] === ' ') {
                str = str.replace(' ', '&nbsp;');
            }
        }
        return str;
    }

    var string = 'We are living in an yellow submarine. We don\'t have anything else. ' +
        'Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
    var replaceSpaces = replaceWhiteSpaces(string);

    console.log(string);
    console.log(replaceSpaces);

}());