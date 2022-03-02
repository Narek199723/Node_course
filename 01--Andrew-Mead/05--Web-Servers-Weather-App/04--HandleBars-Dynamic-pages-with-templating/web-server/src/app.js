const path = require("path");
const express = require("express");

// * This is directory name
// console.log(__dirname);
// console.log(path.join(__dirname, "../public/index.html"));

// *Showing us the file Directory
// console.log(__filename);

const app = express();
// const publicDirPath = path.join(__dirname, "../public");

// * Here we are telling express which templating engine we installed , this allows us to set a value for a given express setting, and there a a few,
app.set("view engine", "hbs");

// *  It is a way to customize our server
// * express.static is a function which takes an argument the path that we want to serve up
// app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  // * Render is allowing us to render some views(some hbs)
  res.render("index", {
    title: "Weather App",
    name: "Andrew Mead",
  });
  // res.send("Hello")
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Emilia Blunt",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Margot Robbie",
  });
});

const publicAboutPath = path.join(__dirname, "../public/about.html");
const publicHelpPath = path.join(__dirname, "../public/help.html");

app.use(express.static(publicAboutPath));
app.use(express.static(publicHelpPath));

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
