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
hbs.registerPartials(partialPath);

const publicAboutPath = path.join(__dirname, "../public/about.html");
const publicHelpPath = path.join(__dirname, "../public/help.html");

app.use(express.static(publicAboutPath));
app.use(express.static(publicHelpPath));

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

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

// ? This is going to match any url which is starting /help/ and everything what the user is writing, in other words whatever will be entered there what is starting /help/ .... will work
// app.get(`"/help/*"`, (req, res) => {
//   res.send("Help article not found");
// });

// app.get("*", (req, res) => {
//   res.send("My 404 page");
// });

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

// ^  Coding Challenge
// *  Create and render 404 page with handlebars

// * 1).    Setup the template to render the header and footer
// * 2).    Setup the template to render an error message in a paragraph
// * 3).    Render the template for both 404 routes
// *  - Page not found
// *  - Help article not found

// * 4).Test your work. visit /what and /help/units

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sia",
    errorMessage: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sia",
    errorMessage: "Page not found",
  });
});
