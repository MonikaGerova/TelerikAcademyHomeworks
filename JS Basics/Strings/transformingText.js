(function () {
    function convertInRegions(str) {
        var startIndex = 0;
        var endIndex = 0;
        var startingArr = [ '<mixcase>', '<lowcase>', '<upcase>'];
        var endArr = ['</mixcase>', '</lowcase>', '</upcase>'];

        for (var i = 0; i < str.length; i += 1) {
            if (str.substr(i, 9) === '<mixcase>' || str.substr(i, 9) === '<lowcase>' || str.substr(i, 8) === '<upcase>') {
                if (str.substr(i, 8) === '<upcase>') {
                    var startTag = str.substr(i, 8);
                    var lenOfTag = 8;
                } else {
                    var startTag = str.substr(i, 9);
                    var lenOfTag = 9;
                }

                var endTag = startTag.replace('<', '</');

                startIndex = i;
                str = str.replace(startTag, '');

                var j = i;
                while (j < str.length) {
                    if (str.substr(j, lenOfTag + 1) === endTag) {
                        str = str.replace(endTag, '');
                        endIndex = j;
                        break;
                    }
                    j += 1;
                }

                var inBrackets = str.substring(startIndex, endIndex);
                var changed = inBrackets;

                if (startTag === '<mixcase>') {
                    changed = changed.split('');
                    for (var index = 0; index < inBrackets.length; index += 1) {
                        if (index % 2 == 0) {
                            changed[index] = inBrackets[index].toUpperCase();
                        }
                    }

                    changed = changed.join('')
                } else if (startTag === '<lowcase>') {
                    changed = inBrackets.toLowerCase();
                } else {
                    changed = inBrackets.toUpperCase();
                }

                str = str.replace(inBrackets, changed);
            }
        }
        return str;
    }

    var string = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. ' +
        'We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
    var converted = convertInRegions(string);

    console.log(string);
    console.log(converted);

}());