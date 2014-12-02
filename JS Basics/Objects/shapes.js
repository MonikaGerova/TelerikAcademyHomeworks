(function () {
    function BuildPoint(name, x, y) {

        return {
            name: name,
            xCoordinate: x,
            yCoordinate: y,
            getPoint: function () {
                return this.name + '(' + this.xCoordinate + ' , ' + this.yCoordinate + ')';
            }
        }
    };
    function BuildLine(firsPoint, secondPoint) {
        return {
            point1: firsPoint,
            point2: secondPoint,
            size: distanceBetweenPoints(firsPoint, secondPoint),
            getLine: function () {
                return 'L(' + this.point1.getPoint() + ' , ' + this.point2.getPoint() + ')';
            }
        }

    }

    function distanceBetweenPoints(fPoint, sPoint) {

        var xP1 = fPoint.xCoordinate,
            yP1 = fPoint.yCoordinate,
            xP2 = sPoint.xCoordinate,
            yP2 = sPoint.yCoordinate;

        if (xP1 > xP2) {
            var side1 = xP1 - xP2;
        } else {
            var side1 = xP2 - xP1;
        }

        if (yP1 > yP2) {
            var side2 = yP1 - yP2;
        } else {
            var side2 = yP2 - yP1;
        }

        var distance = Math.sqrt(side1 * side1 + side2 * side2);

        return distance.toFixed(1);
    }

    function formTriangle(line1, line2, line3) {
        var a = line1.size,
            b = line2.size,
            c = line3.size;

        console.log('line1 size = ' + a);
        console.log('line2 size = ' + b);
        console.log('line3 size = ' + c);

        if (a <= (b + c) && b <= (a + c) && c <= (a + b)) {
            return 'These three lines can form a triangle';
        } else {
            return ' These three lines can\'t form a triangle ';
        }

    }


    var pointOne = new BuildPoint('A', 1, 1);
    var pointTwo = new BuildPoint('B', 5, 4);
    var pointThree = new BuildPoint('C', 3, 6);
    var pointFour = new BuildPoint('D', 5, 3);
    var pointFive = new BuildPoint('E', 9, 2);
    var pointSix = new BuildPoint('F', 3, 1);

    var lineOne = new BuildLine(pointOne, pointTwo);
    var lineTwo = new BuildLine(pointThree, pointFour);
    var lineThree = new BuildLine(pointFive, pointSix);

    console.log('POINTS: ');
    console.log('Point1: ' + pointOne.getPoint());
    console.log('Point2: ' + pointTwo.getPoint());
    console.log('Point3: ' + pointThree.getPoint());
    console.log('Point4: ' + pointFour.getPoint());
    console.log('Point5: ' + pointFive.getPoint());
    console.log('Point6: ' + pointSix.getPoint());
    console.log('LINES');
    console.log('Line1: ' + lineOne.getLine());
    console.log('Line2: ' + lineTwo.getLine());
    console.log('Line3: ' + lineThree.getLine());

    var distance = distanceBetweenPoints(pointOne, pointTwo);
    console.log('Distance between ' + pointOne.getPoint() + ' and ' + pointTwo.getPoint() + ' is ' + distance);

    var formTriangle = formTriangle(lineOne, lineTwo, lineThree);
    console.log(formTriangle);

}());