var f = 423,
    s = 5,
    t = 333;

console.log("First number = " + f + "    Second number = " + s + "    Third number = " + t);


if(f>s){
    if(t>f){
        console.log("In descending order  numbers are : " +t + ">" + f + ">" + s );
    }
    else{
        if(t>s){
            console.log("In descending order  numbers are : " +f + ">" + t + ">" + s );
        }
        else{
            console.log("In descending order  numbers are : " +f + ">" + s + ">" + t );
        }
    }
}
else{
    if(t>s){
        console.log("In descending order  numbers are : " +t + ">" + s + ">" + f );
    }
    else{
        if(t>f){
            console.log("In descending order  numbers are : " +s + ">" + t + ">" + f );
        }
        else{
            console.log("In descending order  numbers are : " +s + ">" + f + ">" + t );
        }
    }