function biggestAndSmallestNum() {

    var nums = document.getElementById("nums").value,
        trimmed = nums.trim(),
        splitted = trimmed.split(" "),
        max = parseInt(splitted[splitted.length -1]),
        min = parseInt(splitted[0]),
        length = nums.length;


        console.log(splitted);

    for( index in splitted){

          if(splitted[index] == "" ){
              delete splitted[index];
          }
          else{
              splitted[index] = parseInt(splitted[index]);
              if(isNaN(splitted[index])) {
                  document.getElementById("result").innerHTML = "insert a valid number ";
                  throw new Error('Not a valid number!');
              }
          }
    }
    console.log(splitted);

    for( var i = 0; i<length;i++){
        if(splitted[i]> max){
            max = splitted[i];
        }
        if( splitted[i] < min){
            min = splitted[i];
        }

    }
    var result = " min = " + min + " and max = " + max;
    document.getElementById("result").innerHTML = result;



}