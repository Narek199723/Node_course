const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// * this is going to convert json to an object that we can easily use, default express feature
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "RED123456";
//   // *  Second parameter of the bcryptjs is the number of rounds we want to perform, 8 is recommended by it's creator, not so easy to crack not so heavy to run
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);
//   // *  Comparing password for finding out if the passwords are matching or not
//   const isMatch = await bcrypt.compare("RED123456", hashedPassword);
//   console.log(isMatch);
// };
// myFunction();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
