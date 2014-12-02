(function () {
    function removeTags(str) {
        var startIndex;
        var endIndex;

        for (var i = 0; i < str.length; i += 1) {
            if(str[i]==='<'){
                startIndex = i;
            }else if(str[i]==='>'){
                endIndex = i;
            }

            if(startIndex !==undefined && endIndex!==undefined){
                var tag = str.substring(startIndex,endIndex +1);
                str = str.replace(tag,'');

                startIndex = undefined;
                endIndex =  undefined;
                i=-1;
            }
        }
        return str;
    }


    var string = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
    var newStr = removeTags(string);

    console.log(newStr)
}());