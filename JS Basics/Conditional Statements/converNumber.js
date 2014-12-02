function automat(){
    var number = document.getElementById("num").value,
        lengthOfNum = number.length,
        hundreds = "",
        tens = " ",
        units = " ",
        result = " ";

    number = parseInt(number);


    if(isNaN(number) || lengthOfNum>3){
        document.getElementById("result").innerHTML = "insert a valid number in the range [0...999]";
        throw new Error('Not a valid number!');
    }

    number = number.toString();
    if(lengthOfNum===3) {

        var fDigit = parseInt(number[0]),
            sDigit = parseInt(number[1]),
            tDigit = parseInt(number[2]);


        switch (fDigit){
            case 1: hundreds = "One hundred";break;
            case 2: hundreds = "Two hundred";break;
            case 3: hundreds = "Three hundred";break;
            case 4: hundreds = "Four hundred";break;
            case 5: hundreds = "Five hundred";break;
            case 6: hundreds = "Six hundred";break;
            case 7: hundreds = "Seven hundred";break;
            case 8: hundreds = "Eight hundred";break;
            case 9: hundreds = "Nine hundred";break;
        }

        if(sDigit===0) {

            if (tDigit !== 0) {

            hundreds += " and ";
            }
            switch (tDigit){
                case 1: units = "one"; break;
                case 2: units = "two"; break;
                case 3: units = "three"; break;
                case 4: units = "four"; break;
                case 5: units = "five"; break;
                case 6: units = "six"; break;
                case 7: units = "seven"; break;
                case 8: units = "eight"; break;
                case 9: units = "nine"; break;
            }

            result = hundreds + units;

        }
        else if(sDigit ===1) {
            hundreds += " and ";

            switch(tDigit){
                case 1: tens = "eleven"; break;
                case 2: tens = "twelve"; break;
                case 3: tens = "thirteen"; break;
                case 4: tens = "fourteen"; break;
                case 5: tens = "fifteen"; break;
                case 6: tens = "sixteen"; break;
                case 7: tens = "seventeen"; break;
                case 8: tens = "seventeen"; break;
                case 9: tens = "seventeen"; break;
            }
            result = hundreds + tens;
        }
        else{
            switch(sDigit){
                case 2: tens = "twenty"; break;
                case 3: tens = "thirty"; break;
                case 4: tens = "forty"; break;
                case 5: tens = "fifty"; break;
                case 6: tens = "sixty"; break;
                case 7: tens = "seventy"; break;
                case 8: tens = "eighty"; break;
                case 9: tens = "ninety"; break;
            }
            switch (tDigit){
                case 1: units = "one" ;  break;
                case 2: units = "two"; break;
                case 3: units = "three"; break;
                case 4: units = "four"; break;
                case 5: units = "five"; break;
                case 6: units = "six"; break;
                case 7: units = "seven"; break;
                case 8: units = "eight"; break;
                case 9: units = "nine"; break;
            }

            result  = hundreds + " " +  tens + " " + units;
        }
    }
    else if(lengthOfNum===2){
        var fDigit = parseInt(number[0]),
            sDigit = parseInt(number[1]);

        if(fDigit === 1 ){
            switch(sDigit){
                case 1: tens = "eleven"; break;
                case 2: tens = "twelve"; break;
                case 3: tens = "thirteen"; break;
                case 4: tens = "fourteen"; break;
                case 5: tens = "fifteen"; break;
                case 6: tens = "sixteen"; break;
                case 7: tens = "seventeen"; break;
                case 8: tens = "seventeen"; break;
                case 9: tens = "seventeen"; break;
            }
            result = tens;
        }
        else{
            switch(fDigit){
                case 2: tens = "twenty"; break;
                case 3: tens = "thirty"; break;
                case 4: tens = "forty"; break;
                case 5: tens = "fifty"; break;
                case 6: tens = "sixty"; break;
                case 7: tens = "seventy"; break;
                case 8: tens = "eighty"; break;
                case 9: tens = "ninety"; break;
            }
            switch (sDigit){
                case 1: units = "one" ;  break;
                case 2: units = "two"; break;
                case 3: units = "three"; break;
                case 4: units = "four"; break;
                case 5: units = "five"; break;
                case 6: units = "six"; break;
                case 7: units = "seven"; break;
                case 8: units = "eight"; break;
                case 9: units = "nine"; break;
            }
            result = tens + " " + units;
        }
    }
    else{

        number = parseInt(number);
        switch (number){
            case 1: units = "one" ;  break;
            case 2: units = "two"; break;
            case 3: units = "three"; break;
            case 4: units = "four"; break;
            case 5: units = "five"; break;
            case 6: units = "six"; break;
            case 7: units = "seven"; break;
            case 8: units = "eight"; break;
            case 9: units = "nine"; break;
        }
        result  = units;
    }

    document.getElementById("result").innerHTML = result;
    console.log(hundreds);
}
