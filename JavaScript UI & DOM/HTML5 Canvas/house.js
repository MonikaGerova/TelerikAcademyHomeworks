(function () {
    var canvasBike = document.getElementById('house'),
        c = canvasBike.getContext('2d');

    c.fillStyle = 'rgb(151,91,91)';
    c.strokeStyle = 'black';
    c.lineWidth = 2;
    c.lineCap = 'round';

    c.fillRect(22, 172, 290, 216);
    c.strokeRect(22, 172, 290, 216);

    //roof
    c.beginPath();
    c.moveTo(22, 172);
    c.lineTo(168, 22);
    c.lineTo(312, 172);
    c.closePath();
    c.fill();
    c.stroke();

    c.beginPath();
    c.moveTo(225,144);
    c.lineTo(225,64);
    c.lineTo(258,64);
    c.lineTo(258,144);
    c.fill();
    c.stroke();

    c.fillStyle = 'black';

    //windows

    c.fillRect(46, 210, 48, 32);
    c.fillRect(96, 210, 48, 32);
    c.fillRect(46, 244, 48, 32);
    c.fillRect(96, 244, 48, 32);

    c.fillRect(184, 210, 48, 32);
    c.fillRect(184, 244, 48, 32);
    c.fillRect(234, 210, 48, 32);
    c.fillRect(234, 244, 48, 32);

    c.fillRect(184, 302, 48, 32);
    c.fillRect(184, 336, 48, 32);
    c.fillRect(234, 336, 48, 32);
    c.fillRect(234, 302, 48, 32);

    //door
    c.beginPath();
    c.moveTo(56, 388);
    c.lineTo(56, 320);
    //c.moveTo(56,316)
    c.quadraticCurveTo(86, 290, 116, 320);
    c.lineTo(116, 388);
    c.closePath();

    c.moveTo(86, 388);
    c.lineTo(86, 305);
    c.stroke();

    c.beginPath();
    c.arc(76, 360, 3, 0, 2 * Math.PI);
    c.stroke();

    c.beginPath();
    c.arc(96, 360, 3, 0, 2 * Math.PI);
    c.stroke();

})();