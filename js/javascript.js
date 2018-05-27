var numbers = [];
var kindofcalculation = "";
var current = "";

function pressButtonNumber(number) {

    current = document.getElementById("numberField").innerHTML;

    // Increase the last result was undef or no other special key was pressed change empty current field!
    if (current === "undef") {
        current = "";
        numbers.empty();
    }
    current += number;
    var testForNull = current.split('');
    var i = 0;

    /*Deleting leading zeros */
    for (; i < testForNull.length; i++) {
        if (testForNull[i] === "0" && testForNull[i+1] !== "." && testForNull.length > 1) {
            testForNull.splice(0, 1);
            i = 0;
        } else {
            break;
        }
    }

    document.getElementById("numberField").innerHTML = testForNull.join("");


}


function empty() {

    numbers = [];
    document.getElementById("numberField").innerHTML = "0";
    kindofcalculation = "";

}

function setPoint() {
    current = document.getElementById("numberField").innerHTML;
    if (checkForPoint(current)) {

    } else {

        if (current === "0") {
            current = "0."
        } else (
            current += "."
        );

        document.getElementById("numberField").innerHTML = current;
    }
}

function checkForPoint(current) {
    var checkForPointArr = current.split("");
    for (var i = 0; checkForPointArr.length > i; i++) {
    if(checkForPointArr[i] === "."){
        return true;
    }
    }

}

function specialKeys(key) {
    if(numbers.length >1){

    }


    /*If key === 5 result is beeing calculated, else next number is added*/
    if (key === 5) {
        var result = "";
        current = document.getElementById("numberField").innerHTML;
        numbers.push(current);


        //Calculations
        switch (kindofcalculation) {


            /*devide*/
            case 1:
                result = devide(numbers[numbers.length -2], numbers[numbers.length -1]);

                break;

            /*multiply*/
            case 2:
                result = multiply(numbers[numbers.length -2], numbers[numbers.length -1]);

                break;

            /*minus*/
            case 3:
                result = minus(numbers[numbers.length -2], numbers[numbers.length -1]);

                break;

            /*plus*/
            case 6:
                result = plus(numbers[numbers.length -2], numbers[numbers.length -1]);

                break;

            /*default*/
            default:

                result = "ERROR";

                break;


        }
        //Round result to 5 decimal places and delete following zeros
        var resultFixed = (result.toFixed(5)).split("");
        var timesDeleted = 0;
        for(var i = resultFixed.length-1; i >-1; i--){
            if(resultFixed[i]==="0") {
                resultFixed.splice(i, 1);
                timesDeleted+=1;
                if(timesDeleted === 5){
                    resultFixed.splice(i-1,1);
                }
            }else{
                timesDeleted = 0;
                break;
            }
        }

        //show result
        document.getElementById("numberField").innerHTML = resultFixed.join("");

    } else {
        current = document.getElementById("numberField").innerHTML;
        numbers.push(current);
        kindofcalculation = key;
        document.getElementById("numberField").innerHTML = "0";

    }


}

function devide(a, b) {
    if (b === "0") {
        return "undef";
    } else {
        return parseInt(a) / parseInt(b);
    }

}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);

}

function minus(a, b) {
    return parseInt(a) - parseInt(b);

}

function plus(a, b) {
    return parseInt(a) + parseInt(b);

}
