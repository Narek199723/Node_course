const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// * this is going to convert json to an object that we can easily use, default express feature
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

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
