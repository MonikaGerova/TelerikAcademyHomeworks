(function () {
    function parseURL(str) {
        var string = str;
        var endIndex = 0;
        var protocol;
        var server;
        var resource;
        var object = {};

        str = str.split('://');
        protocol = str[0];

        str.splice(0, 1);
        str = str.toString();

        for (var i = 0; i < str.length; i += 1) {
            if (str[i] === '/') {
                endIndex = i;

                break;
            }
        }

        server = str.substring(0, endIndex);
        resource = str.substring(endIndex, str.length);

        object = {
            protocol: protocol,
            server: server,
            resource: resource
        }
        return object;
    }

    var url = 'http://www.devbg.org/forum/index.php';
    var data = parseURL(url);

    console.log(url);
    console.log(data);
}());