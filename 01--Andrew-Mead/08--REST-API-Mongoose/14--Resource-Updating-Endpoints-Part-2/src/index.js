const express = require("express");
require("./db/mongoose");
const User = require("./models/User");
const Task = require("./models/Task");

const app = express();

// * this is going to convert json to an object that we can easily use, default express feature
app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
    console.log("Getting all users");
  } catch (error) {
    res.status(400).send(err.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/users/:id", async (req, res) => {
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

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(err.message);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(err.message);
  }
});

app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send("Task not Found");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

// *  Any properties that doesn't exist on user will be completely ignored
app.patch("/users/:id", async (req, res) => {
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

// ! Coding Challenge
// ^  Goal: Allow for task updates

// * 1. Setup router handler
// * 2. Send error if unknown updates
// * 3. Attempt to update the task
// *      --  Handle task not found
// *      --  Handle validation errors
// *      --  Handle success
// * 4. Test your work

app.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ errors: "Invalid Updates" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send();
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));

// % GET
//* The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

// % POST
// *   The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

// % PUT
// *   The PUT method replaces all current representations of the target resource with the request payload.

// % DELETE
// *   The DELETE method deletes the specified resource.

// % PATCH
// *   The PATCH method applies partial modifications to a resource.
