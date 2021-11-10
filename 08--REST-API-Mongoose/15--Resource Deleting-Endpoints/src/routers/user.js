const express = require("express");
const User = require("../models/User");

const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
    console.log("Getting all users");
  } catch (error) {
    res.status(400).send(err.message);
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
    console.log("user");
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).send();
    }
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
