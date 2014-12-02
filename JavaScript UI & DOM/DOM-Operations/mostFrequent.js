(function () {

    var tags = ["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css",
        "cms", "xaml", "js", "cms", "cms",
        "ASP.NET MVC", "asp.net MVC", "ASP.NET MVC", ".net", "javascript", "js", "cms", "cms",
        "CMS", "js", "js", "CMS"
    ];

    var tagCloud = generateTagCloud(tags, 10, 100);

    function generateTagCloud(tags, minFont, maxFont) {

        var counter = 1;
        var arr = [];
        var maxCount = 1;

        for (var i = 0; i < tags.length; i += 1) {
            tags[i] = tags[i].toLowerCase();

        }

        for (var i = 0; i < tags.length; i += 1) {

            if (arr[tags[i]]) {
                continue;
            }

            for (var j = i + 1; j < tags.length; j += 1) {
                if (tags[i] === tags[j]) {
                    counter += 1;
                }
            }

            arr[tags[i]] = {
                tag: tags[i],
                count: counter
            };

            if (counter > maxCount) {
                maxCount = counter;
            }

            counter = 1;
        }

        //var multipleBy = Math.floor(maxFont / maxCount);
        var deduct = maxFont - minFont;
        var multiply = deduct/maxCount;

        console.log(multiply);


        for (var index in arr) {
            var tag = arr[index].tag;
            var count = arr[index].count;
            var createTag = document.createElement('span');
            var size = minFont;


            size = Math.floor( minFont + (count)*multiply)+ 'px';
            createTag.innerHTML = ' ' + tag + ' ';
            createTag.style.fontSize = size;

            document.body.appendChild(createTag);
        }
    }
})();