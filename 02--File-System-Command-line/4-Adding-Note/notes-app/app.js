const chalk = require("chalk");
const fs = require("fs");
const yargs = require("yargs");

const notes = require("./notes.js");

// ! Customizing yargs version
yargs.version("1.1.0");

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
    notes.addNote(argv.title, argv.body);
  },
});

// !  Challenge: Setup command option and function
// *  1). Setup the remove command to take a required "--title" option
// *  2). Create and export a removeNote function from notes.js
// *  3). Call removeNote in remove command handler
// *  4). Have removeNote log the title of the note to be removed
// *  5). Test your work using: node app.js remove --title="some title"

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: argv => {
    notes.removeNote(argv.title);
  },
});

// ! Challenge Wire up removeNote

// *  1). Load existing notes
// *  2). useArray filter method to remove the matching note (if any)
// *  3). Save the newly created array
// *  4). Test your work with a title that exists and a little that doesn't exist

// !  Challenge Use chalk to provide useful logs for remove
// * 1). If a not is removed, print "Note removed!" with a green background
//  * 2) If no note is removed, print "no note found!" with a red background

//! Coding challenge
// * 1). Create and export listNotes from notes.js - your notes using chalk - Print note title for each note
// * 2). Call listNotes from command handler
// * 3). Test your work

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function (argv) {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read your notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
