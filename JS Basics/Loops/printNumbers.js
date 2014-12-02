function numbersFromZeroToN(){
    var number = document.getElementById("num").value,
        i = 0,
        result = " ";
    number = parseInt(number);
    if(!isNaN(number)){
        for(i;i<=number ; i++){
           result +=  i;
            if(i!==number){
                result += ", ";

            }
        console.log(i);
        }
         document.getElementById("result").innerHTML = result;
    }
    else{
        document.getElementById("result").innerHTML = "Please insert a valid number";
    }
}