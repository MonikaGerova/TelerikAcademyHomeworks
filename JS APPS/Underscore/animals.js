(function () {
    var Animal = (function () {

        function Animal(species, legs) {
            this.species = species;
            this.countOfLegs = legs;
        }
        return Animal;
    })();

    var turtle = new Animal('turtle',4);
    var lizard = new Animal('reptile',4);
    var lion = new Animal('mammal',4);
    var bird = new Animal('bird',2);
    var kangaroo = new Animal('mammal',2);
    var cat = new Animal('mammal', 4);
    var dog = new Animal('mammal',4);

    var arr = [turtle,lizard, lion,bird,kangaroo,cat,dog];


    //Task Four
    var sort  = _.sortBy(arr,'countOfLegs');
    var groupBy = _.groupBy(sort, 'species');

    console.log(groupBy);
    //Task Five
    var result = 0;
    var legs = _.each(arr, function (item) {
        return result+= item.countOfLegs;
    });


    console.log(result);





})();