const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");


let displayValue = "0"; //ekranda görünen değer
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() {
    display.value = displayValue;
};


//tıklanan elementin buton olup olmadığını kontrol etme işlemi

keys.addEventListener("click", function (e) {

    const element = e.target;
    console.log(e.target)
    if (!element.matches("button")) return;

    switch (element.value) {
        // case "%":
        //     calculatePercentage();
        // case "+/-":
        //     plusMinus();

        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(element.value);
            break;
        case ".":
            inputDecimal();
            break;
        case "clear":
            clear();
            break;
        default:

            inputNumber(element.value);
    }

    updateDisplay();

});

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if (operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;

    } else if (operator) {
        const result = calculate(firstValue, value, operator);
        displayValue = parseFloat(result.toFixed(7));
        firstValue = result;
    }

    waitingForSecondValue = true; //2.değeri bekliyoruz.
    operator = nextOperator;
    console.log(displayValue, firstValue, operator, waitingForSecondValue);

}
function calculate(first, second, operator) {
    if (operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second
    } else if (operator === '/') {
        return first / second;
    }

    return second;
}

// function plusMinus() {
//     displayValue = -parseFloat(displayValue);
//     return result;
// }

// function calculatePercentage() {

//     return displayValue / 100;


// }


//sayıları displaye yanyana yazdıran fonksiyon
function inputNumber(num) {
    if (waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

//display nokta içermiyorsa nokta ekleten fonksiyon
function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

//displayi temizleten fonksiyon
function clear() {
    displayValue = '0';
}
updateDisplay();