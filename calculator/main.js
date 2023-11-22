let currentVal = 0;
let result = 0;
let isClickSymbol = false;
let isClickNumber = false;
let selectSymbol = 0;

function ClickNumber(val) {
    if (isClickSymbol && !isClickNumber) {
        document.getElementById("inputVal").innerHTML = 0;
    }
    let inputVal = document.getElementById("inputVal").innerHTML;

    if (inputVal == 0) {
        document.getElementById("inputVal").innerHTML =val;
    }
    else {
        document.getElementById("inputVal").innerHTML = inputVal + "" + val;
    }

     isClickNumber = true;
}

function ClickSymbol(val) {
    let inputVal = document.getElementById("inputVal").innerHTML;
    switch (val) {
        case 1:
            currentVal = 0;
            result = 0;
            document.getElementById("inputVal").innerHTML = 0;
            break;

        case 2:
            document.getElementById("inputVal").innerHTML = inputVal * (-1);
            break;

        case 3:
            selectSymbol = 3;
            document.getElementById("inputVal").innerHTML = inputVal / 100;
            break;

        case 4:
            selectSymbol = 4;
            if (!isClickSymbol) {
                currentVal = inputVal
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) / (parseFloat(inputVal));
                currentVal = result;
                document.getElementById("inputVal").innerHTML = result;

            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 5:
            selectSymbol = 5;
            if (!isClickSymbol) {
                currentVal = inputVal
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) * (parseFloat(inputVal));
                currentVal = result;
                document.getElementById("inputVal").innerHTML = result;

            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 6:
            selectSymbol = 6;
            if (!isClickSymbol) {
                currentVal = inputVal
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) - (parseFloat(inputVal));
                currentVal = result;
                document.getElementById("inputVal").innerHTML = result;

            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 7:
            selectSymbol = 7;
            if (!isClickSymbol) {
                currentVal = inputVal
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) + parseFloat(inputVal);
                currentVal = result;
                document.getElementById("inputVal").innerHTML = result;

            }
            isClickSymbol = true;
            isClickNumber = false;
            break;

        case 8: 
            ClickSymbol(selectSymbol);
            break;

        case 9:
            if (!inputVal.includes('.')) {
                inputVal = inputVal + '.';
                document.getElementById("inputVal").innerHTML = inputVal;
            }
            break;

    }
}