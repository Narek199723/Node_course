const express = require("express");
require("./db/mongoose");
const User = require("./models/User");
const Task = require("./models/Task");
const app = express();

// * this is going to convert json to an object that we can easily use, default express feature
app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      console.log("user is created");
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});



app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((err) => {
      // *  If we send data and we dont send the status code browser assumes that the status code is 200, so we need to write status code manually
      res.status(400).send(err.message);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
