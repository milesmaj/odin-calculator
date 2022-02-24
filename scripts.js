const inputVar = document.getElementsByTagName('input')[0];

// Adds two numbers.
const add = (x, y) => {
    return parseFloat(x) + parseFloat(y);
}

// Subtracts two numbers.
const subtract = (x, y) => {
    return parseFloat(x) - parseFloat(y);
}

// Multiplies two numbers.
const multiply = (x, y) => {
    return parseFloat(x) * parseFloat(y);
}

// Divide two numbers.
const divide = (x, y) => {
    return parseFloat(x) / parseFloat(y);
}

const modulus = (x, y) => {
    return parseFloat(x) % parseFloat(y);
}

// Does an operation based on the operator, and 2 numbers.
const operate = (operator, x, y) => {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        case '%':
            return modulus(x, y);
        default:
            console.error("Wrong operator.");
    }
}

// Function to add number to input.
const enterCh = (num) => {
    inputVar.value += num;
}

// Function to change input.
const changeInput = (inputStr) => {
    inputVar.value = inputStr;
}

const backspace = () => {
    changeInput(inputVar.value.substring(0,));
}

const calculate = () => {
    let equation = inputVar.value;

    let arr = equation.split('');

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(parseFloat(arr[i]))) {
            changeInput(operate(arr[i], equation.substring(0, i), equation.substring(i + 1)));
        }
    }
}