const mongoose = require("../src/db/mongoose");
const User = require("../src/models/User");

// 617f8da7b221d8eeb1078ed4

// User.findByIdAndUpdate("617f8ef0c882fb66362b7f6e", { age: 24 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 111 });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("617fa574719cd54bed37054a", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => console.log(e));
