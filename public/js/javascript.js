let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function empty() {
    $('#numberField').text("");
}

function addToCalc(s) {
    let oldCalc = $('#numberField').text();
    if (oldCalc == "") {
        if (s == 0) {
        } else {
            addChar(oldCalc,s);
        }
        // Check whether the last char in the calc is a number --> true
    } else if (oldCalc[oldCalc.length - 1].charCodeAt(0) > 47) {
        addChar(oldCalc,s);

        // Last char isnt a number so check whether new char is a number --> add
    } else if (s.toString().charCodeAt(0)>47){
        addChar(oldCalc,s);
    }




}

function addChar(oldCalc,s) {
    let newCalc = oldCalc + s;
    $('#numberField').text(newCalc);
}

function calc() {
    let calc = $('#numberField').text();
    let res = "";
    try {
        res = eval(calc);
        $('#numberField').text(res);
    } catch (error) {
        $('#numberField').text("invalide syntax");
    }

}