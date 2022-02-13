const calculate = require("./calculate"); // We import calculate.js in our file

// ANALYSIS SECTION
//=================
// We create our methods for addition, subtraction, multiplication and division operations in the calculate.js file.
// We export by typing the name of our methods in module.export.
// So now our methods can be used by other files.
// We import the calculate.js file in index.js with require.
// This way methods in calculate.js can now be called and used in index.js

// Examples of operations are printed to the console. if you type "node index.js" in terminal line, the results will appear
console.log(calculate.add(4, 2));
console.log(calculate.subtract(4, 2));
console.log(calculate.multiply(4, 2));
console.log(calculate.divide(4, 2));
