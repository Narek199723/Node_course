const express = require("express");

const app = express();

//* app.com
app.get("/", (req, res) => res.send(`<h1>Weather</h1>`));

//* app.com/help
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
      age: 27,
    },
    { name: "Mike", age: 30 },
  ]);
});

// ! Coding challenge
// * Update routes
// 1. Setup about route to render a title with HTML
// 2. Setup weather route to send back JSON object with forecast and location strings
// 3. TEst your work by visiting both in the browser

//* app.com/about
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

//* app.com/weather
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "California",
  });
});


app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
