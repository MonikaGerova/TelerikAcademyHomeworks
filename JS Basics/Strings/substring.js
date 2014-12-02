(function () {
    function substringContains(subStr, str) {
        var len = str.length;
        var subStrLen = subStr.length;
        var counter = 0;
        var temp = 0;

        str = str.toLowerCase();

        for (var i = 0; i < len; i += 1) {
            if (str.substr(i, subStrLen) === subStr) {
                counter += 1;
                i += subStrLen;
            }

// Second way to solve the problem... litle more long.. and i make my own substring thing :)

//            if (subStr[0] === str[i]) {
//                for (var j = 0, index = i; j < subStrLen; j += 1, index += 1) {
//                    if (subStr[j] !== str[index]) {
//                        break;
//                    } else {
//                        temp += 1;
//                    }
//                }
//
//                if (temp === subStrLen) {
//                    counter += 1;
//                }
//            }
//
//            temp = 0;


        }

        return counter;

    }

    var string = 'We are living in an yellow submarine. ' +
        'We don\'t have anything else. Inside the submarine is very tight.' +
        'So we are drinking all the day. We will move out of it in 5 days.';
    var word = 'in';
    var count = substringContains(word, string);

    console.log('STRING: ' + string);
    console.log('The word "' + word + '" is contained  ' + count + ' times in this string');

}());