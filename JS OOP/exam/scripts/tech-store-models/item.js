define(function () {
    var Item = (function () {

        function Item(type, name, price) {
            this.type = type;
            this.name = name;
            this.price = price;

            checkType(this.type);
            checkName(this.name);

        }

        function checkType(type) {
            var arr = [
                'accessory',
                'smart-phone',
                'notebook',
                'pc',
                'tablet'
            ]
            var isExists = false;
            arr.forEach(function (item) {
                if(type === item){
                    isExists = true;

                }
            })
            if(!isExists){
                 throw new ReferenceError('the type doesnt exists!');
            }


        }

        function checkName(name) {

            if(name.length < 6 && name.length>30){
                 throw new RangeError('name must be between 6 and 30-characters-long ');
            }
        }

        return Item;
    })();
    return Item;
});