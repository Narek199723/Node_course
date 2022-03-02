const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// const msg = getNotes();
// console.log(msg);

// const greenMsg = chalk.green.bold("Success");
// console.log(greenMsg);

// *argv = argument vector
// console.log(process.argv);

// const command = process.argv[2];

// if (command === "add") {
//   console.log(chalk.green.inverse("Adding Note"));
// } else if (command === "remove") {
//   console.log(chalk.red.inverse("Removing Note"));
// }
// console.log(chalk.blue.inverse(`Hello Mr. ${process.argv[2]}`));

// Running this in the terminal it will add the fourth argument to the process.argv
//* node app.js add --title="This is my title"

// ! Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

// * It gives us:
// * commands and (grouped) options (my-program.js serve --port=5000).
// * a dynamically generated help menu based on your arguments:

// console.log(process.argv);
// console.log(yargs.argv);

// ^ Customizing yargs version
// yargs.version("1.1.0");

// ! Add, remove, read, list

// ! Creating Add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// * node app.js --help
// ! Creating remove Command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function () {
    console.log("Removing note ");
  },
});

// !  Coding Challenge
// | Add two new Commands
// * 1).  Setup command to support "list" command (print placeholder message for now)
// * 2).  Setup command to support "read" command (print placeholder message for now)
// * 3).  Test your work by running both commands and ensure correct output

// * Creating read Command
// yargs.command({
//   command: "read",
//   describe: "Reading a note",
//   handler: () => console.log("Reading a note"),
// });

// // * Creating list Command
// yargs.command({
//   command: "List",
//   describe: "Listing a note",
//   handler: () => console.log("Listing a note"),
// });

console.log(yargs.argv);
