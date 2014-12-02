(function () {
    function hasProperty(object, value) {
        isContained = false
        if (typeof object === 'object') {
            for (prop in object) {
                if (prop === value) {
                    isContained = true;
                    return isContained;
                }
            }

            return isContained;
        } else {
            throw { name: 'FatalError', message: 'u must give a object!' };
        }
    }

    var obj = {
      name: 'dasda'
    };

    var hasProp = hasProperty(obj, 'hair');

    console.log(' is the property you want existing in the given object? ==> ' + hasProp );


}());