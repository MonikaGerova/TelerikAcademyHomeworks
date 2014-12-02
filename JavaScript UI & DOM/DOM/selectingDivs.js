(function () {

    console.log('QUERY SELECTOR');


    // with querySellector

    var querySelect = document.querySelectorAll('div  div');

    for (var i = 0, len = querySelect.length; i < len; i += 1) {
        // if(querySelect[i].parentNode.nodeName == 'DIV'){
        console.log(querySelect[i]);
        //}
    }


    console.log('Get elements by TAG name');

    // with getElement...

    var elementSelectorDivs = document.getElementsByTagName('div');



    for (var i = 0, len = elementSelectorDivs.length; i < len; i += 1) {
        if(elementSelectorDivs[i].parentNode.nodeName == 'DIV'){
            console.log(elementSelectorDivs[i]);
        }
    }

})();