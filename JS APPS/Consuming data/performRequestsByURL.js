(function () {
    var httpModule = (function () {
        var URL = 'http:localhost:300/students';
        var httpRequest;
        var request;

        var getHttpRequest = (function() {
            var xmlHttpFactories;
            xmlHttpFactories = [
                function() {
                    return new XMLHttpRequest();
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP");
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
            ];
            return function() {
                var xmlFactory, _i, _len;
                for (_i = 0, _len = xmlHttpFactories.length; _i < _len; _i++) {
                    xmlFactory = xmlHttpFactories[_i];
                    try {
                        return xmlFactory();
                    } catch (_error) {

                    }
                }
                return null;
            };
        })();

        request = function (options) {
            var httpRequest, requestUrl, type, success, error, contentType, accept, data;
            httpRequest = getHttpRequest();
            options = options || {};
            requestUrl = options.url;
            type = options.type || 'GET';
//        success = options.success || function () {};
//        error = options.error || function () {};
            contentType = options.contentType || '';
            accept = options.accept || '';
            data = options.data || null;

            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === 4) {
                    switch (Math.floor(httpRequest.status / 100)) {
                        case 2:
                            success(httpRequest.responseText);
                            break;
                        default:
                            error(httpRequest.responseText);
                            break;
                    }
                }
            };
            httpRequest.open(type, requestUrl, true);
            httpRequest.setRequestHeader('Content-Type', contentType);
            httpRequest.setRequestHeader('Accept', accept);
            return httpRequest.send(data);
        };

        var getJson = function(url,headers){
            var options = {
                url:  url,
                type: 'GET',
                contentType: 'application/json',
                accept: headers || {},
                data: null
            };
            return request(options);
        };

        var postJson = function (url, headers,data) {
            var options = {
                url: url,
                type: "POST",
                contentType: headers.contentType,
                accept: headers.contentType,
                data: JSON.stringify(data)
            }
            return request(options);
        };

        return {
            make: request,
            getJSON: getJson,
            postJSON: postJson
        };


    })();

    return httpModule;
}());




