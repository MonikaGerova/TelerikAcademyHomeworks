
var a=-5,
    b=2,
    c=3;

console.log("a = " + a + "   b = " + b + "   c = "+ c);

if(a<0 && b<0 && c<0 ){
    console.log("The sign of the sum is  -" );
}
else if(a<0 || b<0 || c<0){
    if(a<0){
        var sum = b+c;
        if(sum<-a){
            console.log("The sign of the sum is  -" );
        }
        else if(sum=-a){
            console.log("The sum is 0");
        }
        else{
            console.log("The sign of the sum is  +" );
        }
    }
    else if(b<0){
        var sum = a+c;
        if(sum<-b){
            console.log("The sign of the sum is  -" );
        }
        else if(sum=-b){
            console.log("The sum is 0");
        }
        else{
            console.log("The sign of the sum is  +" );
        }
    }else if(c<0){
        var sum = a+b;
        if(sum<-c){
            console.log("The sign of the sum is  -" );
        }
        else if(sum=-c){
            console.log("The sum is 0");
        }
        else{
            console.log("The sign of the sum is  +" );
        }
    }
}
else{
    console.log("The sign of the sum is  +" );
}


