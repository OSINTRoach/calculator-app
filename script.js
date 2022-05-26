// REFORMAT AS CLASS, ADD ONKEY

// Getting all elements and mapping event listeners
const screen = document.querySelector("#result");
[...document.querySelectorAll(".number")].map(number => {
    number.addEventListener('click', handleNumberClick, false);
});
[...document.querySelectorAll(".operator")].map(operation => {
    operation.addEventListener('click', handleOperation, false);
});
document.querySelector(".equal").addEventListener('click', handleCalculation);
document.querySelector('.decimal').addEventListener('click', handleDecimal);
document.querySelector('.ac').addEventListener('click', ac);

// Creating basic variables for storing data
let operator = null;
let currentValue = "";
let prevValue = "";

// Functionality and handling of events
function handleNumberClick(){
    currentValue += this.innerHTML;
    screen.value = currentValue;
}
function handleOperation(){
    operator = this.innerHTML;
    prevValue = currentValue;
    currentValue = "";
    screen.value = operator;
}
function handleCalculation(){
    currentValue = calculate(prevValue, operator, currentValue).toFixed(3);
    screen.value = currentValue;
    prevValue = currentValue;
}
function handleDecimal(){
    currentValue += ".";
    screen.value = currentValue;
}
// Basic calculate function
function calculate(v1, operator, v2){
    switch(operator){
        case '+':
            return parseFloat(v1) + parseFloat(v2)
        case '-':
            return parseFloat(v1) - parseFloat(v2)
        case '*':
            return parseFloat(v1) * parseFloat(v2)
        case '/':
            return parseFloat(v1) / parseFloat(v2)
    }
}
//Reseting
function ac(){
 currentValue = "";
    operator = null;
    prevValue = "";
    screen.value = 0;
}

