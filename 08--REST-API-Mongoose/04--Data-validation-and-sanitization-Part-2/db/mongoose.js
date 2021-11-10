const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// ^ DATA VALIDATION
// *  with data validation we can enforce that the data conforms to some rules.As an example i could say that the users age needs to be greater than or equal to 18

// ^ DATA SANITIZATION
// *  with data sanitization - it allows us to alter the data before saving it, An example of that would be removing empty spaces around the user's name

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
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const task = new Task({
//   description: "Learn the Mongoose library",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch(error => {
//     console.log(error);
//   });
