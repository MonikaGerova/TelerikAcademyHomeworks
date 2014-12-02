(function () {
    require.config({
        paths: {
            'jquery': './jquery-2.1.1',
            'handlebars': './handlebars-v2.0.0',
            'combo': './comboBox',
            'render': './render',
            'click': './clickable'
        }
    });

    require(['combo', 'jquery', 'handlebars', 'render', 'click'], function (Combo, $, H, rend, click) {

        var people = [
            {
                id: 1,
                name: 'Donco Minkov',
                imageUrl: './images/doncho.jpg',
                age: 18

            },
            {
                id: 2,
                name: "Nikolai Kostov",
                age: 19,
                imageUrl: "./images/niki.jpg"
            },
            {
                id: 3,
                name: "Ivo Kenov",
                age: 20,
                imageUrl: "./images/ivo.jpg"
            }
        ]

        var s = Combo(people);
        var scriptTemplate = $('#template');
        scriptTemplate.html(s);
        rend(people);
        click()
    })
})();
