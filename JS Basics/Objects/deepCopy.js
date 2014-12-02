(function () {
    function deepCopy(element) {

        if (typeof element === 'object') {
            var brackets = {};

            if (element instanceof Array) {
                brackets = [];
            }

            var newObject = brackets;
            for (var prop  in element) {

                if (typeof element[prop] === 'object') {
                    newObject[prop] = deepCopy(element[prop]);
                } else {
                    newObject[prop] = element[prop];
                }
            }
        } else {
            var newElement = element;
            return newElement;
        }

        return newObject;
    }

    var obj = {
        name: 'pesho',
        age: 135,
        head:{
            hair:{
                color: 'black',
                size: 'long'
            },
            eyes:{
                color: 'yellow'
            }
        }
    };

    var deep = deepCopy(obj);

    console.log(obj);
    console.log(deep);


    obj.name = 'IVAN';
    obj.head.hair.color = 'green';

    console.log(obj);
    console.log(deep);

}());