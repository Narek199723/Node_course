const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const multer = require("multer");

// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, callback) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return callback(new Error("Please upload a Word document"));
//     }
//     callback(undefined, true);
//   },
// });

// // * upload.single() requires a single argument which is a string
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// const upload = multer({
//   dest: "images",
//   limits: {
//     // *  1.000.000 = 1mb
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, callback) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       return callback(
//         new Error("Please upload a image with jpg,jpeg or with png format")
//       );
//     }
//     callback(undefined, true);
//   },
// });

// app.post(
//   "/users/me/avatar",
//   upload.single("avatar"),
//   (req, res) => {
//     res.send("Your image is uploaded");
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
