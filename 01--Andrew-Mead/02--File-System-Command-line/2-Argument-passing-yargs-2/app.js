const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// ^ Customizing yargs version
yargs.version("1.1.0");

// * Add, remove, read, list

// * Creating Add Command
// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     title: {
//       describe: "Note Title",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log(`TItle: ${argv.title}`);
//   },
// });

// * Creating remove Command
// yargs.command({
//   command: "remove",
//   describe: "Removing a note",
//   handler: function () {
//     console.log("Removing note ");
//   },
// });

// !  Coding Challenge
// | Add two new Commands
// * 1).  Setup command to support "list" command (print placeholder message for now)
// * 2).  Setup command to support "read" command (print placeholder message for now)
// * 3).  Test your work by running both commands and ensure correct output

// ! Creating read Command
// yargs.command({
//   command: "read",
//   describe: "Reading a note",
//   handler: () => console.log("Reading a note"),
// });

// ! Creating list Command
// yargs.command({
//   command: "List",
//   describe: "Listing a note",
//   handler: () => console.log("Listing a note"),
// });

// ^ Coding Challenge
// * 1).  Setup a body option for the add command
// * 2).  Configure a description, make it required, and for it to be a string
// * 3).  Log the body value in the handler function
// * 4).  Test your work

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Node body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("TItle: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

yargs.parse();
