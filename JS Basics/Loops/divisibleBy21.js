function fromZeroToN(){
    var number = document.getElementById("n").value,
        i = 1,
        result = "";

    number = parseInt(number);
    if(!isNaN(number)){
        for(i;i<=number ; i++){
            if(i%21) {
                result += i;

                if(i!==(number)){
                    result += ", ";
                }
            }
        }
        console.log(result);
        document.getElementById("result").innerHTML = result;
    }
    else{
        document.getElementById("result").innerHTML = "Please insert a valid number";
    }

}