function empty() {
    $('#numberField').text("");
}

function addToCalc(s) {
    let oldCalc = $('#numberField').text();
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