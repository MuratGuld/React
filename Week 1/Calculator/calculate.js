// We write my 4 operation functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

// We export our functions to be able to use them outside.
module.exports = {
    add, subtract, multiply, divide
}