(function () {
    function findPalindromes(str) {
        var arr = str.split(/[,.!?:;"'\s ]/);
        var reversed = '';
        var palindromes = [];


        for (var i = 0; i < arr.length; i += 1) {
            if (arr[i] === '') {
                arr.slice(i, 1);
                continue;
            }

            for (var j = arr[i].length - 1; j >= 0; j -= 1) {
                reversed += arr[i][j];
            }

            if (reversed === arr[i]) {
                palindromes.push(reversed);
            }
            reversed = '';
        }

        return palindromes;
    }

    var string = 'There are many palindromes. There are some of them : amma, aba, acca';
    var findPalindromes = findPalindromes(string);

    console.log(findPalindromes);
}());