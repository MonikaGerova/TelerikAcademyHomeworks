(function () {
    var doc = document,
        largestDocumentProperty = '',
        smallestDocumentProperty = '',
        documentArray = [],
        i = 0;

    for(property in doc){
       documentArray.push(property);
    }

    documentArray.sort();
    largestDocumentProperty = documentArray[0];
    smallestDocumentProperty = documentArray[documentArray.length -1];

    console.log("largest and smallest lexicography properties for documents are  " + largestDocumentProperty + "  and   " + smallestDocumentProperty);
...
//    for (var property in doc) {
//        if (property > largestDocumentProperty) {
//            largestDocumentProperty = property;
//
//        }
//
//        if (property < smallestDocumentProperty) {
//            smallestDocumentProperty = property;
//        }
//    }
//
//    var resultForDocument = "min = " + smallestDocumentProperty + "  <br/>  max = " + largestDocumentProperty;
//    document.getElementById("result").innerHTML = resultForDocument;
}());