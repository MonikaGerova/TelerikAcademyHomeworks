(function () {
    var Book = (function () {
        function Book(author, book) {
            this.author = author;
            this.book = book;
        }
        return Book;
    })();

    var b1 = new Book('Stephen KIng', 'It');
    var b2 = new Book('Stephen KIng', 'the shining');
    var b3 = new Book('Charles Dickens', 'David Copperfield');
    var b4 = new Book('Charles Dickens', 'David Copperfield');
    var b5 = new Book('Charles Dickens', 'David Copperfield');


    var arr = [b1,b2,b3,b4,b5];
    var result ={};

    // Task six
    var each = _.each(arr, function (item) {
        var author = item.author;
      if(!result[author]){
          return result[author] = 1;
   }else{
          return result[author] +=1;
      }
    });

    var max =  _.max(result);
    var result = _.invert(result);
    var res =  result[max];

    console.log(res);



})();