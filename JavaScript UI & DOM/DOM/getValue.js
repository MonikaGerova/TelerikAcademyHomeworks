function clicked() {
    var textInputs = document.getElementsByTagName('input');

    for (var i = 0, len = textInputs.length; i < len; i += 1) {
        if (textInputs[i].type == 'text') {
             console.log(textInputs[i].value);
        }
    }
}

