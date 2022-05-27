// REFORMAT AS CLASS, ADD ONKEY

// Getting all elements and mapping event listeners
const screen = document.querySelector('#result');

[...document.querySelectorAll('[number]')].map(number => {
    number.addEventListener('click', (e)=>{
        if(e.target.innerHTML === '.' && !haveDot) haveDot = true;
        else if(e.target.innerHTML === '.' && haveDot) return;
        currentValue += e.target.innerText;
        screen.value = currentValue;
    });
});

[...document.querySelectorAll('[operator]')].map(operation => {
    operation.addEventListener('click', handleOperation, false);
});

document.querySelector('[equal]').addEventListener('click', handleCalculation);
document.querySelector('[ac]').addEventListener('click', ac);

// Creating basic variables for storing data
let operator = null;
let currentValue = "";
let prevValue = "";

let haveDot = false;

// Functionality and handling of events
function handleOperation(){
    if(currentValue === "") return;
    operator = this.innerHTML;
    prevValue = currentValue;
    currentValue = "";
    screen.value = operator;
}
function handleCalculation(){
    if(currentValue === "" || prevValue === "" || operator === null) return;
    currentValue = calculate(prevValue, operator, currentValue)
    screen.value = currentValue;
    prevValue = currentValue;
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

