var numbers = [];
var kindofcalculation = "";
var current = "";

function pressButtonNumber(number) {

    document.getElementById("numberField").innerHTML += number;


}


function empty() {

    numbers = [];
    document.getElementById("numberField").innerHTML = "0";
    kindofcalculation = "";

}

function specialKeys(key) {

    /*If key === 5 result is beeing calculated, else next number is added*/
    if (key === 5) {


        switch (kindofcalculation) {

            /*devide*/
            case 1:
                current = document.getElementById("numberField").innerHTML;
                document.getElementById("numberField").innerHTML = numbers[numbers.length - 1] / current;

                break;

            /*multiply*/
            case 2:


                break;

            /*minus*/
            case 3:


                break;

            /*plus*/
            case 6:


                break;


        }


    } else {
        current = document.getElementById("numberField").innerHTML;
        numbers.push(current);
        kindofcalculation = key;
        document.getElementById("numberField").innerHTML = "0";

    }


}





