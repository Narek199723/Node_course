const path = require("path");
const express = require("express");

// * This is directory name
// * We are going to use __dirname to get the correct path to the public directory
// console.log(__dirname,"----DIRNAME");
// The path.join() method joins the specified path segments into one path.
// You can specify as many path segments as you like.
// The specified path segments must be strings, separated by comma.
// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
// Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.

console.log(path.join(__dirname, "../public/index.html"));

// *Showing us the file Directory
//*  THis is very similar to dirname but instead of  providing the path to the directory the file lives in, it provides the path to the file itself
// console.log(__filename);

const app = express();
const publicDirPath = path.join(__dirname, "../public");

// *  It is a way to customize our server
// * express.static is a function which takes an argument the path that we want to serve up
app.use(express.static(publicDirPath));

// !  Coding Challenge
// *  Create two more HTML files

// *   1). Create a html page for about with "About" title
// *   2). Create a html page for help with "Help" title
// *   3). Remove the old route handlers for both
// *   4). Visit both in the browser to test your work

const publicAboutPath = path.join(__dirname, "../public/about.html");
const publicHelpPath = path.join(__dirname, "../public/help.html");

app.use(express.static(publicAboutPath));
app.use(express.static(publicHelpPath));

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
