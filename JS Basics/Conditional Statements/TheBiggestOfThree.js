var first = 300,
    second =143,
    third = 40;

console.log("First number = " + first + "    Second number = " + second + "    Third number = " + third);

if(first>second){
    if(first>third){
        console.log("The First Number is the biggest");
    }
    else{
        console.log("The Third Number is the biggest");
    }
}else{
    if(second>third){
        console.log("The Second Number is the biggest");
    }
    else{
        console.log("The Third Number is the biggest");
    }
}



