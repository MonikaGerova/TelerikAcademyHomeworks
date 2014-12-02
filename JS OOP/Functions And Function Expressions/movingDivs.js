(function () {
    var movingDiv = (function () {

        function add(movement) {
            var div = document.createElement('div');
            div.style.width = '20px';
            div.style.height = '20px';
            div.style.backgroundColor = randomColor();
            div.style.border = '2px solid ' + randomColor();


            if(movement==='rect'){
                setTimeout(function () {
                    div.style.position = 'absolute';
                    for (var i = 10; i < 100; i++) {
                        div.style.left =i+ 'px';

                    }


                } ,1000)
            }
            document.body.appendChild(div);


        }

        return{
            add: add
        }
    })();
        movingDiv.add('rect');
        movingDiv.add('ellipse');

    function randomColor() {
        var color = '#' + Math.random().toString(16).slice(2, 8);
        return color;
    }
})();