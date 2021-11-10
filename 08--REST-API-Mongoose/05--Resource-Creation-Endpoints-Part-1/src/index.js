const express = require("express");
require("./db/mongoose");
const User = require("./models/User");
const app = express();

// * this is going to convert json to an object that we can easily use, default express feature
app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      console.log("user is created");
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});


// !  Coding challenge
// ^  Goal: Setup the task creation endpoint
// * 1. Create separate file for the task model (load it into index.js)
// * 2. Create the task creation endpoint (handle success and error)
// * 3. Test the endpoint from postman with good and bad data

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
