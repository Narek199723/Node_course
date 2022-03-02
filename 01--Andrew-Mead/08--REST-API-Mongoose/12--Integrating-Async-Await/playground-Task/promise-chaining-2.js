const mongoose = require("../src/db/mongoose");
const Task = require("../src/models/Task");

Task.findByIdAndRemove("617f9250e74cef39529f6155")
  .then((user) => {
    console.log(user);
    return Task.countDocuments({ completed: false });
  })
  .then((count) => console.log(count))
  .catch((e) => console.log(e));

// ! Coding Challenge

// ^ Goal: use async/await

// * 1. Create deleteTaskAndCount as an async function
// * 2. Use await to delete task and count up incomplete tasks
// * 3. Return the count
// * 4. Call the function and atach then/catch to log results
// * 5. Test your work

const deleteTaskAndCount = async (id) => {
  const user = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("617f924be74cef39529f6153")
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
