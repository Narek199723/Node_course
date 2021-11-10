const mongoose = require("../src/db/mongoose");
const User = require("../src/models/User");

// 617f8da7b221d8eeb1078ed4

User.findByIdAndUpdate("617f8ef0c882fb66362b7f6e", { age: 24 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 111 });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// !  Coding challenge
// ^  Goal: Mess around with promise chaining

// * 1. Create promise-chaining-2.js
// * 2. Load in mongoose and task model
// * 3. Remove a given task by id
// * 4. Get and print the total number of incomplete tasks
// * 5. Test your work


