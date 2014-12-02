(function () {
    var row = [
        {
            num: '0',
            title: 'Course Introduction',
            date1: '01.10.2014',
            date2: '20.01.2015'
        },
        {
            num: '1',
            title: 'Document Object Model',
            date1: '28.05.2014',
            date2: '29.05.2015'
        },
        {
            num: '2',
            title: 'Document Object Model',
            date1: '28.05.2014',
            date2: '29.05.2015'
        }
    ]

    var template = document.getElementById('template').innerHTML;
    var compileHandlebars = Handlebars.compile(template);
    document.getElementById('result').innerHTML += compileHandlebars({rows: row});

})();