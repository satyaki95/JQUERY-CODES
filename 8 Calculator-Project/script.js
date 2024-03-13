var resultField = $("#result");

function insertNumber(number){
    var existingNumber = resultField.val();
    resultField.val(existingNumber + number);
}

function clearResult(){
    resultField.val('');
}

function calculate(){
    var result = eval(resultField.val());
    resultField.val(result);
}

function deleteNumber(){
    var presentValue = resultField.val();
    if(presentValue != ""){
        resultField.val(resultField.val().slice(0,-1));
    }
}

function squreNumber(){
    var result = eval(resultField.val());
    resultField.val(result * result);
}