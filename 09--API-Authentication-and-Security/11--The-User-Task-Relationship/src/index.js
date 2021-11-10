const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Service is temporary unavailable");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));

const Task = require("./models/Task");
const User = require("./models/User");

const main = async () => {
  const user = await User.findById("618134fb34807f98bbe9993c").populate(
    "tasks"
  );
  console.log(user.tasks);
};
main();
