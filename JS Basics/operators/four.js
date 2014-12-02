
console.log("TASK FOUR!!! --------");


var number = 123456789;
console.log("number is " + number);
var numToString = number.toString();

var lengh  =  numToString.length;

var thirdDigit = parseInt(numToString[lengh-3]);

if(thirdDigit ===7){
    console.log("The third digit (from right to left)  of the number " + number + " is equal to 7" );
}
else{
    console.log("The third digit (from right to left)  of the number " + number + " is NOT equal to 7" );
}

