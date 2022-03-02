const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: "Margot",
  age: 20,
});
me.save()
  .then(me => console.log(me))
  .catch(err => console.log("Error: ", err));
