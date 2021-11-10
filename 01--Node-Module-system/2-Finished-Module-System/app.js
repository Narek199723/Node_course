const validator = require("validator");

// const getNotes = require("./notes");

// const msg = getNotes("Your notes ...");

// console.log(msg);

// !  Using Email validator
// console.log(validator.isEmail("andre@exampl.com")); // true
// console.log(validator.isEmail("andre@example")); //false

// ! Using URL validator
// console.log(validator.isURL("https://narek199723.github.io/")); //true
// console.log(validator.isURL("https://narek199723")); //false


//! Challenge : Use the chalk library in your project
// * 1). Install version 2.4.1 of chalk
// * 2). Load chalk into app.js
// * 3). Use it to print the string "Success" to the console in green
// * 4). Test your work
// * Bonus Use docs to mess around with other styles, Make text bold and inVersed.

const chalk = require("chalk");

const error = chalk.bold.red;
const warning = chalk.bold.keyword("yellow");
const success = chalk.bold.green.inverse("Success!");
// const success = chalk.bold.green("Success!");

console.log(error("Error!"));
console.log(warning("Warning!"));
console.log(success);
