(function () {
    var canvas = document.getElementById('canvas'),
        c = canvas.getContext('2d');

    c.lineWidth = 1;

    //head
    c.beginPath()
    c.fillStyle = 'rgb(144,202,215)';
    c.strokeStyle = 'rgb(41,91,102)';
    c.arc(150,200,60,0,2*Math.PI);
    c.fill();
    c.stroke();

    //nose
    c.beginPath();
    c.moveTo(143,210);
    c.lineTo(130,210);
    c.lineTo(143,180);
    c.stroke();

    //mouth
    c.beginPath();
    c.save()
    c.rotate(Math.PI / 14);
    c.scale(2.5,0.8);

    c.arc(75,245,8,0,2*Math.PI);
    c.stroke();

    //right eye
    c.beginPath();
    c.restore();
    c.fillStyle = 'rgb(41,91,102)';
    c.save()
    c.scale(1.3,1);
    c.arc(90,190,7,0,2*Math.PI);
    c.stroke();

    c.beginPath();
    c.scale(1,1.7);
    c.arc(88,112,3.7,0,2*Math.PI);
    c.fill();


    //left eye
    c.beginPath();
    c.restore();
    c.scale(1.3,1);
    c.arc(135,190,7,0,2*Math.PI);
    c.stroke();

    c.beginPath();
    c.scale(1,1.7);
    c.arc(133,112,3.7,0,2*Math.PI);
    c.fill();

    //hat
    c.beginPath();
    c.fillStyle = 'rgb(57,102,147)';
    c.strokeStyle = 'black';
    c.scale(7,1);
    c.arc(16,92,7,0,2*Math.PI);
    c.stroke();
    c.fill();

    c.beginPath();
    c.restore();
    c.arc(16.5,88,4.8,0,2*Math.PI);
    c.stroke();


    c.beginPath();
    c.moveTo(12,86);
    c.lineTo(12,57);
    c.stroke();

    c. beginPath();
    c.moveTo(21,86);
    c.lineTo(21,57);
    c.stroke();

    c.beginPath();
    c.fillRect(12,57,9,30);

    c.beginPath();
    c.beginPath();
    c.restore();
    c.arc(16.5,56,4.5,0,2*Math.PI);
    c.stroke();
    c.fill()


})();