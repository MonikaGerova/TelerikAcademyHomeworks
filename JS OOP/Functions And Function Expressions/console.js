(function () {
    var specialConsole = (function () {

        function writeLine(text) {
            var text = text;
            var params = takeParams(arguments);
            var newText = write(text, params);
            console.log(newText);
        }

        function writeError(text) {
            var text = text;
            var params = takeParams(arguments);
            var newText = write(text, params);
            console.log(newText);
        }

        function writeWarning(text) {
            var text = text;
            var params = takeParams(arguments);
            var newText = write(text, params);
            console.log(newText);
        }

        return{
            writeLine: writeLine,
            writeError: writeError,
            writeWarning: writeWarning
        }
    })();

    function takeParams(arguments) {
        var params = [];
        for (var i = 1; i < arguments.length; i++) {
            params.push(arguments[i]);
        }
        if (params.length === 0) {
            params = '';
        }
        return params;
    }

    function write(text, params) {
        var index = 0,
            substr;

        if (!params) {
            return text;
        } else {
            for (var i = 0; i < text.length; i++) {
                if (text[i] === '{') {
                    substr = text.substr(i, 3);
                    index = parseInt(substr[1]);
                    text = text.replace(substr, params[index]);
                    i += params[index].length - 1;
                }
            }
        }
        text = text.toString();
        return text;
    }

    specialConsole.writeLine("Message: {0} {1}!", 'hello', 'world');
    specialConsole.writeWarning("Warning: {0}", "A warning");
    specialConsole.writeError("Error: {0}", "Something happened");


})();