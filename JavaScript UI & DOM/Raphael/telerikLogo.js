(function () {
    var paper = Raphael('paper', 500, 500);


    var rect = paper.rect(0, 0, 380, 140);

    rect.attr({
        stroke: '#E0FFA3',
        'stroke-width': 3
    });

    var logo = paper.path('M23 40 L40 23 L80 63 L58 86 L33 63 L73 23 L90 40 L84 47' +
        'L73 37 L47 63 L57 74 L67 63 L40 37 L30 46 Z');

    logo.attr({
        fill: '#5CE600',
        stroke: 'none'
    });

//        paper.rect(100,40,45,10);
//        paper.rect(117.5,40,10,50);
    var telerik =     paper.text(200,60,'Telerik');


    telerik.attr({
        'font-size': '75px',
        'font-family': "Calibri, Consolas, Arial",
        fill : '#282828'
    })

    var develop =   paper.text(200,100,'Develop experiences');
    develop.attr({
       'font-size':  '20px',
        "font-family": "Calibri, Consolas, Arial"
    });

    paper.setStart();
        paper.circle(310,55,5,0,2*Math.PI);
        paper.text(310,55, 'R');


    var set = paper.setFinish();

    set.attr({
        'font-size': '8px',
        'font-weight': 'bold',

    })

})();