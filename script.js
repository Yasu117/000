document.addEventListener("DOMContentLoaded", function() {
    const operationDisplay = document.getElementById("operation");
    const resultDisplay = document.getElementById("result");
    let currentOperation = "";
    let currentResult = "";
    let lastResult = "";

    function updateDisplay() {
        operationDisplay.innerText = currentOperation;
        resultDisplay.value = currentResult;
    }

    document.querySelector(".buttons").addEventListener("click", function(e) {
        const buttonValue = e.target.innerText;

        if (['+', '-', '×', '÷', '%'].includes(buttonValue) && lastResult) {
            currentOperation = lastResult;
            lastResult = "";
        }

        if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
            currentOperation += buttonValue;
            currentResult += buttonValue;
        } else if (['+', '-', '×', '÷', '%'].includes(buttonValue)) {
            if (buttonValue === '×') {
                currentOperation += '*';
            } else if (buttonValue === '÷') {
                currentOperation += '/';
            } else if (buttonValue === '%') {
                currentOperation += '/100';
            } else {
                currentOperation += buttonValue;
            }
            currentResult = "";
        } else if (buttonValue === '±') {
            if (currentResult && !isNaN(currentResult)) {
                currentResult = (-1 * parseFloat(currentResult)).toString();
                currentOperation = currentResult;
            }
        } else if (buttonValue === '=') {
            try {
                currentResult = eval(currentOperation).toString();
                lastResult = currentResult;
                currentOperation += ` = ${currentResult}`;
            } catch (err) {
                currentResult = "Error";
            }
        } else if (buttonValue === 'C') {
            currentOperation = "";
            currentResult = "";
            lastResult = "";
        }
        updateDisplay();
    });
});


