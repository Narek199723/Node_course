const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const multer = require("multer");

const upload = multer({
  dest: "images",
});

// * upload.single() requires a single argument which is a string 
app.post("/upload", upload.single('upload'), (req, res) => {
  res.send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
