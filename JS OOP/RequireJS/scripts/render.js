define(['jquery', 'handlebars'],function ($,H) {

    var render = function(items) {
        var template = $('#template').html();
        var compileTemplate = H.compile(template);
        var res = $('#result');
        res.html(compileTemplate({options:items}));
    }
    return render;
})