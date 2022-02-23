const getTime = require("./getTime")

// ANALYSIS SECTION
//=================
// We create a file named get time.
// We create a function inside this file.
// We create date object inside this function.
// Using this date object we find the current hour, minute and second.
// we import this file to our main file named app.js.
// With the setInterval method in app.js, we run the method that returns the clock every second.

// We use setInterval for the function that returns the current time to run every second.
setInterval(getTime,1000)