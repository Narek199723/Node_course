const express = require("express");
const User = require("../models/User");

const router = new express.Router();

// !  Coding challenge
// ^ Goal: Have signup send back auth token
// * 1. Generate a token for the saved user
// * 2. Send back both the token and the user
// * 3. Create a new user from Postman and confirm the token is there

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (error) {
    res.status(400).send("server error");
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById({ _id });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.patch("/users/:id", async (req, res) => {
  // ^ This would be something that user can update, lets say country , height body weight and things like that,
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  const { name } = req.body;
  try {
    // const user = await User.findByIdAndUpdate(
    //   req.params.id,
    //   { name },
    //   { new: true, runValidators: true }
    // );
    // ^  we will have problem with hashing password so we have to do some changes ,some restructuring
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }

    // *  We need to make it like this to be able to hash password from User model which is better practice less code and so on
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send({ error: "User not Found" });
    }
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
