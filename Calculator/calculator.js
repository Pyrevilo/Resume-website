
let inputNumber = new String("");
let resultValue = null;
let tempValue = 0;
let lastButtonIsOperand = true;

//gets input number as string
function number(input) {
    inputNumber += input;
    console.log(inputNumber);       //TO SEND TO OUTPUT
    lastButtonPressedisNumerical();
}

//switch cases to perform operand calculations
function operations(inputOperator) {
    if (lastButtonIsOperand) {
        console.log("Error last button pressed was an operator");
        return;
    }
    //makes sure there is a number to perform operand with        
    if (resultValue == NaN) {
        push(inputNumber);
        console.log("no first value");
        lastButtonPressedisOperand();
        return;
    }
    switch(inputOperator) {
        case '+':
            tempValue = resultValue;
            push(inputNumber);
            resultValue += tempValue;
            tempValue = 0;
            lastButtonPressedisOperand();
            console.log(resultValue);       //TO SEND TO OUTPUT
            break;
        case '-':
            tempValue = resultValue;
            push(inputNumber);
            resultValue = tempValue - resultValue;
            tempValue = 0;
            lastButtonPressedisOperand();
            console.log(resultValue);       //TO SEND TO OUTPUT
        default:
            console.log("default");
            break;
    }
}

//converts string input into a float and assigns it to result value and resets
function push(input) {
    lastButtonIsOperand = false;
    inputNumber = parseFloat(input);
    resultValue = inputNumber;
    inputNumber = "";
}


//checks if the last button pressed is numerical or an operand.
//if operand prompts an error
function lastButtonPressedisNumerical() {
    lastButtonIsOperand = false;
}
function lastButtonPressedisOperand() {
    lastButtonIsOperand = true;
}