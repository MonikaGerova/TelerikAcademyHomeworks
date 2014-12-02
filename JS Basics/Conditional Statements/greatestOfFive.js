function compareNums() {

    var count = document.getElementsByTagName("input").length;
    var greater = 0,
        temp = 0,
        i = 0,
        array = [],
        result = null;

    function comparsion(a, b) {
        if (a > b) {
            return greater = a;
        }
        else {
            return  greater = b;
        }

    }


    for(i;  i<count; i++ ){
        array[i]= document.getElementsByTagName("input")[i].value;
        array[i] = parseInt(array[i]);
        if(isNaN(array[i])){
          document.getElementById("result").innerHTML =   "Please insert a valid number!";
            throw new Error('Not a valid numbers!');
        }
    }
    i=0;
    greater = array[0];

    for(i ; i<count; i++ ){
        if(i!==0) {
           comparsion(greater, array[i]);
        }
    }

    result = "the greater number is " + greater;
    document.getElementById("result").innerHTML = result;


}