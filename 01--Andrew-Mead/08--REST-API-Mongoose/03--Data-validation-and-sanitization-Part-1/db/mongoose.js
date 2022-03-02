const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// ^ DATA VALIDATION
// *  with data validation we can enforce that the data conforms to some rules.As an example i could say that the users age needs to be greater than or equal to 18

// ^ DATA SANITIZATION
// *  with data sanitization - it allows us to alter the data before saving it, An example of that would be removing empty spaces around the user's name

// !  Coding challenge
// ^  Goal Add a password field to user
// *   1. Setup the field as a required string
// *   2. Ensure the length is greater than 6
// *   3. Trim the password
// *   4. Ensure that password doesn't contain "password"
// *   5. Test your work
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    // *  Removing spaces
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can't contain a name password");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    // *  Validating age field with mongoose which is not the best idea but anyway mongoose provides us with that functionality
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

const me = new User({
  name: "Andrew",
  email: "maYk@GMail.com",
  password: "narek1997",
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });

// ! Coding Challenge
// ^ Goal: Add validation and sanitization to task

// * 1. Trim the description and make it required
// * 2. Make completed optional and default it to false
// * 3. Test your work with and without errors

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "  Learn the Mongoose library   ",
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(error => {
    console.log(error);
  });
