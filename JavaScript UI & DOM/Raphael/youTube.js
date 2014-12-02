(function () {
    var paper = Raphael('paper', 500, 500);

    var you = paper.text(100, 100, "You");
    you.attr({
        "font-weight": "bold",
        "font-size": 100,
        "font-family": "Calibri, Consolas, Arial",
        fill: "#4A4A4A"
    });

    var rect = paper.rect(150, 65, 160, 80,25);
    rect.attr({
        fill: "#EC262A"
    });

    var tube = paper.text(230, 100, "Tube");
    tube.attr({
        "font-weight": "bold",
        "font-size": 70,
        "font-family": "Calibri, Consolas, Arial",
        fill: "white"
    });
})();