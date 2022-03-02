const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
// || Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// || Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// ^ Registering partials
// *  It takes path to the directory to the path where partials live
hbs.registerPartials(partialPath);

// || Setup Static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  // * Render is allowing us to render some views(some hbs)
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});
app.get("/about", (req, res) => {
  res.render("about", { 
    title: "About me",
    name: "Emilia Blunt",
  });
});
app.get("/help", (req, res) => {
  res.render("help", { 
    helpText: "This is some helpful text",
    title: "Help",
    name: "Emma Stone",
  });
});

const publicAboutPath = path.join(__dirname, "../public/about.html");
const publicHelpPath = path.join(__dirname, "../public/help.html");

app.use(express.static(publicAboutPath));
app.use(express.static(publicHelpPath));

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

// ^ Coding Challenge
// *  Create a partial for the footer

// * 1). Setup the template for the footer partial "Created by some Name"
// * 2). Render the partial at the bottom of all three pages
// * 3). Test your work by visiting all three pages
