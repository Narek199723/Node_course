const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// !  FILTERING
// * GET /tasks/?completed=false
router.get("/tasks", auth, async (req, res) => {
  const match = {};
  // *  Because what is provided in queries are always strings, req.query.completed will be true if something is provided
  if (req.query.completed) {
    if (req.query.completed === "true") match.completed = true;
    else if (req.query.completed === "false") match.completed = false;
  }
  try {
    await req.user.populate({
      path: "tasks",
      match,
    });
    res.send(req.user.tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send("Task not Found");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

// *  Any properties that doesn't exist on user will be completely ignored

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ errors: "Invalid Updates" });
  }
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send();
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send({ errors: "Task not Found" });
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
