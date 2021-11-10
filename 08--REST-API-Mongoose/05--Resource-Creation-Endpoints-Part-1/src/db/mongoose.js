const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// ^ DATA VALIDATION
// *  with data validation we can enforce that the data conforms to some rules.As an example i could say that the users age needs to be greater than or equal to 18

// ^ DATA SANITIZATION
// *  with data sanitization - it allows us to alter the data before saving it, An example of that would be removing empty spaces around the user's name

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
