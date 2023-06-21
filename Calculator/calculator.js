
let inputNumber = new String("");
let lastInput = 0; //(0 = no numbers, 1 = number, 2 = operand)
let history = [null, null];
let lastOperator = "";
let resultValue = 0;
let decimalClicked = false;

//constructs the string of input numbers
function number(input) {
    if (decimalClicked && input=='.') {
        console.log("Error: decimal point already used");
        console.log(inputNumber);
        return;
    }
    if (input == '.') {
        decimalClicked = true;
    }
    inputNumber += input;
    lastInput = 1;
    document.getElementById('result').innerHTML = inputNumber;
    console.log(inputNumber);
    return;
}

//delete last input number
function backspace() {
    inputNumber = inputNumber.slice(0, -1);
    console.log(inputNumber);
}

//function for formula inputs when button is clicked
function operations(inputOperator) {
    if (lastInput == 0) {
        console.log("No numbers have been input");
        return;
    }
    if (lastInput == 2) {
        console.log("last input was operator");
        lastOperator = inputOperator;
        return;
    }
    lastInput = 2;
    decimalClicked = false;
    switch(inputOperator) {
        case('+'):
            formula();
            lastOperator = "+";
            inputNumber = "";
            break;
        case('-'):
            formula();
            lastOperator = "-";
            inputNumber = "";
            break;
        case('*'):
            formula();
            lastOperator = "*";
            inputNumber = "";
            break;
        case('/'):
            formula();
            lastOperator = "/";
            inputNumber = "";
            break;
        case('**'):
            formula();
            lastOperator = "**";
            inputNumber = "";
            break;
        case('='):
            formula();
            clearCal();
            break;
    }
}

//function for formula inputs
function formula() {
    if (history[0] == null) {
        history[0] = parseFloat(inputNumber);
        return;
    }
    else if (history[1] == null) {
        history[1] = parseFloat(inputNumber);
        switch(lastOperator) {
            case("+"):
                resultValue = history[0] + history[1];
                break;
            case("-"):
                resultValue = history[0] - history[1];
                break;
            case("*"):
                resultValue = history[0] * history[1];
                break;
            case("/"):
                resultValue = history[0] / history[1];
                break;
            case("**"):
                resultValue = history[0] ** history[1];
                break;
                
        }
        console.log(resultValue);
        history[0] = resultValue;
        history[1] = null;
        return;
    }
}

//resets selected operators and input variables
function clearCal() {
    history = [null ,null];
    lastOperator = "";
    inputNumber = "";
    decimalClicked = false;
    console.log("cleared");
    return;
}