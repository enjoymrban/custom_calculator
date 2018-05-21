var secondNumber = false;
var calFinish = false;
var kindofcalculation = "";


function pressButtonNumber(number) {

    if (calFinish){


    }else{



    if (secondNumber) {

        document.getElementById("typeFieldNumbersOne").style.display = "none";

        var typeField = document.getElementById("typeFieldNumbersTwo").innerHTML;
        if (typeField == "0") {

            document.getElementById("typeFieldNumbersTwo").innerHTML = number;
        } else {


            document.getElementById("typeFieldNumbersTwo").innerHTML = typeField + number;

        }

    } else {

        var typeField = document.getElementById("typeFieldNumbersOne").innerHTML;
        if (typeField == "0") {

            document.getElementById("typeFieldNumbersOne").innerHTML = number;
        } else {


            document.getElementById("typeFieldNumbersOne").innerHTML = typeField + number;

        }
    }
}

}

function setPoint(){



    if(calFinish){}else{

        var typeField = document.getElementById("typeFieldNumbersTwo").innerHTML;


        if(secondNumber){

            if(typeField ==""){

                document.getElementById("typeFieldNumbersTwo").innerHTML = "0.";



            }else{

                document.getElementById("typeFieldNumbersTwo").innerHTML = typeField +".";

            }



        }else{

            var typeField = document.getElementById("typeFieldNumbersOne").innerHTML;

            if(typeField == ""){

                document.getElementById("typeFieldNumbersOne").innerHTML = "0.";



            }else{

                document.getElementById("typeFieldNumbersOne").innerHTML =  typeField +".";

            }





        }



    }
}

function empty(){


    document.getElementById("typeFieldNumbersOne").innerHTML = "";
    document.getElementById("typeFieldNumbersTwo").innerHTML = "";
    secondNumber = false;
    calFinish = false;
    kindofcalculation ="";
    document.getElementById("typeFieldNumbersOne").style.display = "inline";



}

function specialKeys(key) {

    if(key == 5){

        var firstField = parseInt(document.getElementById("typeFieldNumbersOne").innerHTML);
        var secondField = parseInt(document.getElementById("typeFieldNumbersTwo").innerHTML);
        document.getElementById("typeFieldNumbersOne").innerHTML ="";
        document.getElementById("typeFieldNumbersTwo").innerHTML ="";
        secondNumber = false;
        calFinish = true;

        switch (kindofcalculation){

            case 1:


                document.getElementById("typeFieldNumbersOne").innerHTML = (firstField/secondField).toString();
                document.getElementById("typeFieldNumbersOne").style.display = "inline";
                kindofcalculation ="";
                break;

            case 2:

                document.getElementById("typeFieldNumbersOne").innerHTML = (firstField*secondField).toString();
                document.getElementById("typeFieldNumbersOne").style.display = "inline";
                kindofcalculation ="";
                break;

            case 3:

                document.getElementById("typeFieldNumbersOne").innerHTML = (firstField-secondField).toString();
                document.getElementById("typeFieldNumbersOne").style.display = "inline";
                kindofcalculation ="";
                break;

            case 6:

                document.getElementById("typeFieldNumbersOne").innerHTML = (firstField+secondField).toString();
                document.getElementById("typeFieldNumbersOne").style.display = "inline";
                kindofcalculation ="";
                break;


        }




    }else {

        kindofcalculation = key;
        secondNumber = true;

    }




    }





