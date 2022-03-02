const path = require("path");
const express = require("express");

const app = express();

// ^ Customizing the views Directory
const viewsPath = path.join(__dirname, "../templates");

// ^ Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

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
    title: "Help",
    name: "Margot Robbie",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
