(function () {
    function checkTheBrackets(str) {
        var len = str.length,
            count = 0,
            result;

        for (var i = 0; i < len; i += 1) {
            if (str[i] === '(') {
                count += 1;
            } else if (str[i] === ')') {
                count -= 1;
            }else{
                continue;
            }

            if( count <0){
                result = 'The brackets are NOT put correctly!';
                return result;
            }
        }

        if(count>0 ||  count<0){
            result = 'The brackets are NOT put correctly!';
            return result;
        } else{
            result = 'The brackets are put correctly!';
            return result;
        }
    }

    var string = '((2/23)*3)(5-d))';
    var brackets = checkTheBrackets(string);

    console.log('STRING: ' + string);
    console.log(brackets);


}());