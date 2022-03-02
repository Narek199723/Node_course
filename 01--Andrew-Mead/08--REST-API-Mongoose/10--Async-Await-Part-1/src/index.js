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
      res.status(500).send(err.message);
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

// ! Coding Challenge
// ^  Goal: Setup the task reading endpoints
// * 1. Create endpoint or fetching all tasks
// * 2. Create an endpoint for fetching a task by its id
// * 3. Setup new requests in Postman and test your work
app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send("Task Node Found");
      }
      res.send(task);
    })
    .catch((err) => {
      console.log("/tasks/:id");
      res.status(500).send();
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
