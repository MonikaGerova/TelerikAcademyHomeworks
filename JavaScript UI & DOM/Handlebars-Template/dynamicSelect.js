(function () {


    var items = [
        {
            value: 1,
            text: 'One'
        },
        {
            value: 2,
            text: 'Two'
        },
        {
            value: 2,
            text: 'Two'
        },
        {
            value: 2,
            text: 'Two'
        }
    ];

    var SelectHTML = selectTemplate(items);

    function selectTemplate(items) {
        var template = document.getElementById('template').innerHTML;
        var compileTemplate = Handlebars.compile(template);
        document.getElementById('result').innerHTML += compileTemplate({options: items});
    }


})();