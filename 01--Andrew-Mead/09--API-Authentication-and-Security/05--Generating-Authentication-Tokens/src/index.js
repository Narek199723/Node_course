const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// * this is going to convert json to an object that we can easily use, default express feature
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

const jwt = require("jsonwebtoken");
const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse");
  console.log(token);
  const data = jwt.verify(token, "thisismynewcourse", {
    expiresIn: "0 second",
  });
  console.log(data);
};
myFunction();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
