console.log("TASK FIVE!!! --------");


var num = 100;
var i = 0;
var bits = [];

var refToNum = num;
while( refToNum >=1){
    var reminder = refToNum % 2;
    refToNum =  Math.floor(refToNum /=2);

    bits[i]  = reminder;
    i +=1;

    console.log ("reminder = " + reminder);
}

var lengthOfBits = bits.length;
var thirdBit = bits[2];


console.log('the third bit of ' + num + ' is ' + thirdBit);
