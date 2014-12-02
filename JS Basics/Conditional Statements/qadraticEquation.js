function calculate() {
    var a = document.getElementById("a").value,
        b = document.getElementById("b").value,
        c = document.getElementById("c").value,
        result = ""
        D = null,
        x1 = null,
        x2 = null,
        DSqrt = null;

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);


    if(isNaN(a) || isNaN(b) || isNaN(c)){
        result = "You must enter NUMBERS!";
    }
    else{
        D = b*b - 4*a*c;
        console.log("D = " + D);

        if(D<0){
            result = "No real roots";
        }
        else if(D===0){
            x1 = -b/2*a;
            console.log("x= " + x1);
            result = " The equation has only one root --> x = " + x1;
        }
        else if(D>0){
            DSqrt = Math.sqrt(D);
            x1 = (-b + DSqrt)/(2*a);
            x2 = (-b - DSqrt)/(2*a);
            result  =  " The equation have 2 roots ==> x1 = " + x1 + "   and  x2 = " +x2;
        }
    }



    document.getElementById("roots").innerHTML = result;
}