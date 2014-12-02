(function () {
    window.onload = function () {
        var stage = new Kinetic.Stage({
            container: 'canvas-container',
            width: 1300,
            height: 700
        });

        var layer = new Kinetic.Layer();

        function createShape(){
            var shape = new Kinetic.Line({
                points: [
                    100,200,
                    200,200,
                    200,230,
                    100,230
                    // 170,200

                ],
                stroke: 'green',
                strokeWidth: 2,
                closed: true,
                tension: 0.2
            });
            return shape;
        }


        var text = new Kinetic.Text({
            x: 100,
            y:100,
            text: 'Sample',
            fontSize: 30,
            fill: 'green'

        });

        var shape1 = createShape();

        layer.add(shape1);
        layer.add(text);
        stage.add(layer);
    }
})();