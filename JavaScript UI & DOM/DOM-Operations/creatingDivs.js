/**
 * Created by Radoslav on 29.8.2014 г..
 */
function loadDivs() {
    var wrapper = document.getElementById('wrapper');

    wrapper.style.width = '900px';
    wrapper.style.height = '500px';

    var wrapperFragment = document.createDocumentFragment('div');
    var countOfDivs = document.getElementById('count').value;

    countOfDivs = parseInt(countOfDivs);

    var div = document.createElement('div');
    var strong = document.createElement('strong');

    strong.innerHTML = 'div';
    div.appendChild(strong);

    for (var i = 0; i < countOfDivs; i += 1) {
        div.style.width = randomPixels(20, 100);
        div.style.height = randomPixels(20, 100);
        div.style.backgroundColor = randomColor();
        div.style.color = randomColor();
        div.style.borderWidth = randomPixels(1, 20);
        div.style.borderRadius = randomPixels(1, 20);
        div.style.borderStyle = 'solid';
        div.style.borderColor = randomColor();
        randomPosition(div);
        wrapperFragment.appendChild(div.cloneNode(true));
    }

    wrapper.appendChild(wrapperFragment);


    function randomPixels(min, max) {
        var random = Math.floor(Math.random() * (max - min) + min);
        return random + 'px';
    }

    function randomColor() {
        var color = '#' + Math.random().toString(16).slice(2, 8);
        return color;
    }


    function randomPosition(el) {
        var h = wrapper.style.height;
        var w = wrapper.style.width;
        w = parseInt(w);
        h = parseInt(h);
        el.style.position = 'absolute';
        el.style.top = randomPixels(0, h);
        el.style.left = randomPixels(0, w);
        return el;
    }


    // var absolute = randomPosition(div);


    // wrapper.appendChild(absolute);

};