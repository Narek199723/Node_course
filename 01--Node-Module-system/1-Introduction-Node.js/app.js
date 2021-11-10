const fs = require("fs");

// * Creating notes.txt and inserting text inside
// fs.writeFileSync("notes.txt", "My name is Andrew");

// * Coding Challenge

// ! Challenge: Append a message to notes.txt

// ! 1).  Use appendFileSync to append to the file
// ! 2).  Run the script
// ! 3).  Check your work by opening the file and viewing the appended text

// *  Solving Problem
//  THis won't overwrite the code written in notes.txt it will just add this after
// fs.appendFileSync('notes.txt', ' This is my first challenge on Node.js')

// require("./utils.js");
// const name = "Andrew";
// console.log(name);

// ! importing name variable from utills.js

// const firstName = require("./utils.js");
// console.log(firstName);

// ! importing function
// const add = require("./utils.js");
// const sum = add(4, -2);
// console.log(sum);

// ! Challenge: Define and use a function in a new file
//* 1). Create new file called notes.js
//* 2). Create getNotes function that returns "Your notes ..."
//* 3).Export getNotes function
//* 4).From app.js, load in and call the function printing message to console

// const getNotes = require("./notes");
// const notes = getNotes("This is my notes:...");

// console.log(notes);
