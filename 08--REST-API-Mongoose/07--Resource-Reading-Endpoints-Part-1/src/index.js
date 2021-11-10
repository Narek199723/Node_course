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

app.get("/users", (req, res) => {
  // * THis is going to fetch all users in the database
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

app.get("/users/:id", (req, res) => {
  // * For getting individual user we are going to use req.params to fetch an individual user by his id
  // console.log(req.params);
  const _id = req.params.id;
  // *  Here we don't need to convert id to new ObjectId because mongoose does that for us
  User.findById({ _id })
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send();
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
      res.status(500).send(err.message);
    });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
