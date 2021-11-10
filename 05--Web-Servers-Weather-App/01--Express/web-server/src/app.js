const express = require("express");

const app = express();

//* app.com
app.get("/", (req, res) => {
  res.send("Hello express!");
});

//* app.com/help
app.get("/help", (req, res) => {
  res.send("Help page");
});

// ! Coding challenge 
// * setup new routes, for /about, /weather

//* app.com/about
app.get("/about", (req, res) => {
  res.send("About");
});

//* app.com/weather
app.get("/weather", (req, res) => {
  res.send("Your weather");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
