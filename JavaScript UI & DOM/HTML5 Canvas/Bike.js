(function () {
    var canvasBike = document.getElementById('bike'),
        c = canvasBike.getContext('2d');
    var width = canvasBike.width;
    var height = canvasBike.height;

    c.fillStyle = 'rgb(144,202,215)';
    c.strokeStyle = 'rgb(41,91,102)';
    c.lineWidth = 2;

    // gumi
    c.arc(80, height - 80, 60, 0, 2 * Math.PI);
    c.arc(width - 80, height - 80, 64, 0, 2 * Math.PI);
    c.fill();

    //pedali
    c.beginPath();
    c.moveTo(150,height-105);
    c.lineTo(210,height-55);
    c.stroke();

    c.beginPath();
    c.fillStyle = 'white';
    c.arc(180, height - 80, 20, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    c.fillStyle = 'rgb(144,202,215)';

    //ramka
    c.beginPath();
    c.moveTo(80, height - 80);
    c.lineTo(180, height - 80);
    c.lineTo(305, height - 170);
    c.lineTo(140, height - 170);
    c.closePath();
    c.stroke();

    //kormilo
    c.beginPath();
    c.moveTo(width - 80, height - 80);
    c.lineTo(width - 100, height - 220);
    c.lineTo(width - 65, height - 255);
    c.lineTo(width - 100, height -220);
    c.lineTo(width-140,height-195);
    c.stroke();

    //sedalka
    c.beginPath();
    c.moveTo(180, height - 80);
    c.lineTo(130, height - 190);
    c.lineTo(100,height-190);
    c.lineTo(160,height-190);
    c.stroke();
})();