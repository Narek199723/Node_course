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

// %  ENCRYPTION
// ^  THis is encryption which means we can reverse the password like this
// *  123456-->nmasdjhqjwelqwejhhgbdkasnbdm-->123456 // THis is called encryption because we can encrypt the password and then get the value back

// %  HASHING

// % This is called hashing password which means when we hash password there is not chance to get the original password back which is more secure, it is one way algorithm , no reversible

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
