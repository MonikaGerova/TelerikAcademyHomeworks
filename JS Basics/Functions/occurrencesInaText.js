(function () {
    var text = "Hi, How are you? So you didn't tell me how are you actually.... how how hwwww ";
    var word = "hi";
    var result;
    var occurrance = occurrencesOfWord(text,word);

    console.log("TEXT: " + text);
    console.log("WORD: " + word);
    console.log('The word "'+ word + '" is occurred in the text ' + occurrance + ' times');

    function occurrencesOfWord(text, word) {
        if (text === undefined || word === undefined) {
            return "You must input the both parameters!!";
        } else {
            text = text.toLowerCase();
            word = word.toLowerCase();
            var arrayOfWords = text.split(/[,.:!?;"\s ]/),
                count = 0;

            for (var i = 0; i < arrayOfWords.length; i += 1) {
                if (arrayOfWords[i] === "") {
                    arrayOfWords.splice(i, 1);
                }
            }

            for (var i = 0; i < arrayOfWords.length; i += 1) {
                if (word === arrayOfWords[i]) {
                    count += 1;
                }
            }
        }
        return count;
    }
}());