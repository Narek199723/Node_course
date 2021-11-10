const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = new express.Router();

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

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      ({ token }) => token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// !  Coding challenge
// ^  Goal: Create a way to logout of all sessions
// *  1.  Setup POST /users/logoutAll
// *  2.  Create the router handler ti wipe the tokens array
// *          -Send 200 or 300
// *  3.  Test your work
// *          -Login a few times and logout of all.Check database

router.post("/users/logoutall", auth, async (req, res) => {
  try {
    console.log(req.user.tokens);
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send();
  } catch (error) {}
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
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
