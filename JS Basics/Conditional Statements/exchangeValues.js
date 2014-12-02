
var firstNum = 214,
    secondNum = 10,
    temp = 0;

console.log("First number = " + firstNum + " and Second number = " + secondNum);

if(firstNum > secondNum){
    temp = secondNum;
    secondNum = firstNum;
    firstNum = temp;

    console.log("The First num is bigger than the second, so we exchange their values: ");
    console.log("First Num =  " + firstNum + " and Second Num = " + secondNum);
}
else{
    console.log("The second number is bigger");
}


