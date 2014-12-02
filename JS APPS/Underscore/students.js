(function () {

    var Person = (function () {
        function Person(fname, lname, age, highestMark) {
            this.fname = fname;
            this.lname = lname;
            this.age = age;
            this.mark = highestMark;

        }

        return Person;
    })();

    var p1 = new Person('Doncho', 'Minkov', 18, 6);
    var p2 = new Person('Nikolay', 'Kostov', 23, 2);
    var p3 = new Person('Nikolay', 'Stoyanov', 19, 5);
    var p4 = new Person('Todor', 'Kenov', 50, 3);
    var p5 = new Person('Todor', 'Stoyanov', 23, 4);

    var arr = [p1, p2, p3, p4, p5];


    //Task One!
    var filtered = _.filter(arr, function (p) {
        return p.fname < p.lname;
    });
    //console.log(filtered.reverse());

    //task Two!


    findBetween(arr)
    function findBetween(arr) {
        var filter = _.filter(arr, function (item) {
            return item.age >= 18 && item.age <= 24;
        });

        var fnames = _.pluck(filter, 'fname');
        var lnames = _.pluck(filter, 'lname')

        console.log(fnames)
        console.log(lnames);

    }

    // task three

    highestGrade(arr)
    function highestGrade(arr) {
        var maxGrade = 0;
        var pluck = _.pluck(arr, 'mark');

        for (var i = 0; i < pluck.length; i++) {
            if (pluck[i] > maxGrade) {
                maxGrade = pluck[i];
            }
        }
        var result = _.where(arr, {mark: maxGrade});

        console.log(result);
    }

    // task Seven
    var names = {

        fName: {},
        lName: {}
    };

    console.log(names)
    var s = _.each(arr, function (item) {
        var firstName = item.fname;
        var lastName = item.lname;
        if (!names.fName[firstName]) {
            names.fName[firstName] = 1;
        } else {
            names.fName[firstName] += 1;
        }

        if(!names.lName[lastName]){
            names.lName[lastName] = 1;
        }else{
            names.lName[lastName] += 1;
        }

    });
    console.log(names);
    var mostCommonFirstName = _.max(names.fName);
    var mostCommonLastName = _.max(names.lName);
    var invertedFName = _.invert(names.fName);
    var invertedLName = _.invert(names.lName);

    if(mostCommonFirstName ===1){
        console.log('there is no most common first name');
    }else{
        console.log("The most common first name is " + invertedFName[mostCommonFirstName]);
    }

    if(mostCommonLastName ===1){
        console.log('there is no most common last name');
    }else{
        console.log('The most common last name is ' + invertedLName[mostCommonLastName])
    }





})();