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

// ! Paginating
// *  limit is showing us the 10 tasks, if the skip=0 , it is going to show us the first 10 tasks(1-10), if skip = 1 it is going to show us the second 10 tasks(10-20)
// *  GET /tasks?limit=10&skip=0

// !  Sorting
// * FIrst argument of sortBy is the property which we want to sort out, second is the option sorting in ascending or descending order
// * GET /tasks?sortBy=createdAt:asc/desc
router.get("/tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};
  // *  Because what is provided in queries are always strings, req.query.completed will be true if something is provided
  if (req.query.completed) {
    if (req.query.completed === "true") match.completed = true;
    else if (req.query.completed === "false") match.completed = false;
  }
  if (req.query.sortBy) {
    const [partOne, partSecond] = req.query.sortBy.split(":");
    sort[partOne] = partSecond === "desc" ? -1 : 1;
  }
  console.log(sort);
  try {
    await req.user.populate({
      path: "tasks",
      // * THis is for matching completed = true or completed = false
      match,
      // * Options property can be used for pagination, cal also be used for sorting
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        // sort: {
        // *  this is the descending order, where newest comes first
        // createdAt: -1,

        // * sorting by completed -1, completed:true comes first
        // completed: -1,

        // * sorting by completed 1, completed:false comes first
        //   completed: 1,
        // },
        sort,
      },
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
