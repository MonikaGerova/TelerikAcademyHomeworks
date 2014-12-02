(function () {
    var canvas = document.getElementById('canvas'),
        c = canvas.getContext('2d');

    var x = 10;
    var y = 10;
    var dx = 12;
    var dy = 2;

    c.fillStyle = '#94ff00';

    //c.arc(x,y,10,0,2*Math.PI);

    function animation() {

        c.clearRect(0, 0, canvas.width, canvas.height);

        c.beginPath();
        c.arc(x, y, 10, 0, 2 * Math.PI);
        c.fill();

        if (x < 2 || x > canvas.width-10) {
            dx = -dx;
        }
        if (y < 2 || y > canvas.height-10) {
            dy = -dy;

        }
        x += dx;
        y += dy;

        requestAnimationFrame(animation);
    }

    animation();




})();