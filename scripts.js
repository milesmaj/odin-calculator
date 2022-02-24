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
    return parseFloat(x) * parseFloat(y);
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
        default:
            console.error("Wrong operator.");
    }
}

// Function to add number to input.
const enterNum = (num) => {
    document.getElementsByTagName('input')[0].value += num;
}

const clear = () => {
    document.getElementsByTagName('input')[0].value = '';
}