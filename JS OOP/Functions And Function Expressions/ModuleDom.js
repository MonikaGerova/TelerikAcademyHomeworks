(function () {

    var module = (function () {
        var buffer = [];
        var fragment;
        var newSelector;

        function addChild(element, selector) {
            var createEl = document.createElement(element);
            var parent = document.querySelectorAll(selector);
            if (arguments[2]) {
                createEl.innerHTML = arguments[2];
            }
            for (var i = 0; i < parent.length; i++) {
                parent[i].appendChild(createEl.cloneNode(true));
            }
        }

        function removeChild(from, element) {
            var element = document.querySelectorAll(element);
            var parent = document.querySelectorAll(from);
            for (var i = 0; i < parent.length; i++) {
                parent[i].removeChild(element[i]);
            }
        }

        function attachHandler(selector, eventType, expression) {
            var selector = document.querySelectorAll(selector);

            for (var i = 0; i < selector.length; i += 1) {
                selector[i].addEventListener(eventType, expression);
            }
        }

        function appendToBuffer(selector, element) {
            var selector = document.querySelector(selector);

            if (buffer.length === 0) {
                fragment = document.createDocumentFragment();
                newSelector = addSelectorAndFragToBufferArr(selector, fragment)
                buffer.push(newSelector);
            } else {
                var isExist = false;

                for (var i = 0; i < buffer.length; i++) {
                    if (buffer[i].selector === selector) {
                        fragment = buffer[i].fragment;
                        isExist = true;
                        break;
                    }
                }
                if (isExist == false) {
                    fragment = document.createDocumentFragment();
                    newSelector = addSelectorAndFragToBufferArr(selector, fragment)
                    buffer.push(newSelector);
                }
            }

            fragment.appendChild(element);
            if (fragment.childNodes.length === 100) {
                selector.appendChild(fragment);
                fragment = '';
            }
        }

        return {
            addChild: addChild,
            removeChild: removeChild,
            attachHandler: attachHandler,
            appendToBuffer: appendToBuffer
        }
    })();

    var div = document.createElement("div");
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.backgroundColor = 'red';
    div.style.margin = '3px';
    div.style.display = 'inline-block';
    var li = document.createElement("li");

    module.addChild('ul', '#wrapper');
    module.addChild('ul', '#wrapper');
    module.addChild('li', 'ul', '1');
    module.addChild('li', 'ul', '2');

    for (var i = 0; i < 100; i++) {
       // module.appendToBuffer("ul", li.cloneNode(true));
        module.appendToBuffer("#wrapper", div.cloneNode(true));
    }

   // module.appendToBuffer("#wrapper", div.cloneNode(true));




    function addSelectorAndFragToBufferArr(selector, frag) {
        return{
            selector: selector,
            fragment: frag
        }
    }


})();



