const mongoose = require("../src/db/mongoose");
const Task = require("../src/models/Task");

// !  Coding challenge
// ^  Goal: Mess around with promise chaining

// * 1. Create promise-chaining-2.js
// * 2. Load in mongoose and task model
// * 3. Remove a given task by id
// * 4. Get and print the total number of incomplete tasks
// * 5. Test your work

Task.findByIdAndRemove("617f9250e74cef39529f6155")
  .then((user) => {
    console.log(user);
    return Task.countDocuments({ completed: false });
  })
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
