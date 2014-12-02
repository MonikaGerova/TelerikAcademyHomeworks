
var x= -1;
var y = -1.2;
var radius = 3;

if(   (x*x + y*y )<= radius*radius ){

        if( y<-1 || (x>1 && x<-1) ){
            console.log("Point with coordinates (" + x +","+y +") is in the circle K((1,1) ,3) and out of the rectangle");
        }
    else{
            console.log("Point with coordinates (" + x +","+y +") is in the circle K((1,1) ,3) BUT also in  the rectangle");
        }


}
else{
    console.log("Point with coordinates (" + x +","+y +") is NOT in the range K((1,1), 3))");
}