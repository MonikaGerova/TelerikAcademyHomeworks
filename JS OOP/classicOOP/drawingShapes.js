(function () {

    var canvas = document.getElementById('canvas');

    var DrawShape = (function () {

        function DrawShape(canvas) {
            this.canvas = canvas;
            this.c = this.canvas.getContext('2d');
        }

        DrawShape.prototype = {
            drawCircle: function
                (x, y, radius) {
                this.x = x;
                this.y = y;
                this.r = radius;
                this.c.beginPath();
                this.c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
                this.c.fillStyle = 'blue';
                this.c.fill();
                console.log('circle')
            },
            drawRect: function (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.c.fillStyle = 'red';
                this.c.fillRect(this.x, this.y, this.width, this.height);

                console.log('rect')
            },
            drawLine: function (x1, y1, x2, y2) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;

                this.c.beginPath();
                this.c.moveTo(this.x1, this.y1);
                this.c.lineTo(this.x2, this.y2);
                this.c.strokeStyle = 'green';
                this.c.stroke();
            }

        }


        return DrawShape;
    })();

    var module = new DrawShape(canvas);
    module.drawCircle(30,30,50);
    module.drawLine(1,2,800,500);
    module.drawRect(40,40,500,500)


})();