define(function () {
    var Store = (function () {
        function Store(name) {
            this.name = name;
            this._items = [];
        }

        Store.prototype = {
            addItem: function (Item) {
                this._items.push(Item);
            },
            getAll: function () {
                return sortByName(this._items)
            },
            getSmartPhones: function () {
                return getElements(this._items, 'smart-phone');
            },
            getMobiles: function () {
                return getElements(this._items, ['smart-phone', 'tablet']);
            },
            getComputers: function () {
                return getElements(this._items, ['pc', 'notebook']);
            },
            filterItemsByType: function (filterType) {
                return getElements(this._items, 'accessory');
            },
            filterItemsByPrice: function (options) {
                var min, max;
                var Items = sortByPrice(this._items);
                var priceItems = [];

                if (options) {
                    min = options.min || 0;
                    max = options.max || +Infinity;
                } else {
                    min = 0;
                    max = +Infinity;
                }

                Items.forEach(function (item) {
                    if (item.price >= min && item.price <= max) {
                        priceItems.push(item);
                    }
                })

                return priceItems;
            },
            filterItemsByName: function (partOfName) {
                var items = this._items;
                var partLen = partOfName.length;
                var arrOfItems = [];

                items.forEach(function (item) {
                    var name = item.name;
                    name = name.toLocaleLowerCase();
                    for (var i = 0; i < name.length; i++) {
                        if (name.substr(i, partLen) === partOfName) {
                            arrOfItems.push(item);
                        }
                    }
                });

                return sortByName(arrOfItems);
            },
            countItemsByType: function () {
                var arr = {
                    'accessory': 0,
                    'smart-phone': 0,
                    'notebook': 0,
                    'pc': 0,
                    'tablet': 0
                };
                var items = this._items;

                for (var i = 0; i < items.length; i++) {
                    var type = items[i].type;
                    arr[type] += 1;
                }

                return arr;
            }
        };

        function sortByName(items) {
            items.sort(function (f, s) {
                return f.name.localeCompare(s.name);
            });
            return items.slice(0)
        }

        function sortByPrice(items) {
            items.sort(function (f, s) {
                return f.price - s.price;
            })
            return items.slice(0);
        }

        function getElements(items, Type) {
            var items = sortByName(items);
            var smartPhones = [];

            if (Type instanceof Array) {
                for (var i = 0; i < Type.length; i++) {
                    items.forEach(function (item) {
                        if (item.type == Type[i]) {
                            smartPhones.push(item);
                        }
                    });
                }
            } else {
                items.forEach(function (item) {
                    if (item.type == Type) {
                        smartPhones.push(item);
                    }
                });
            }


            return smartPhones;
        }

        return Store;
    })();
    return Store;
});