const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const Filter = require("bad-words");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(publicDirectoryPath));
// let count = 0;

// ! Coding challenge
// ^  Goal: Send a welcome message to new users
// * 1. Have server emit "message" when new client connects
// *        -- Send welcome as the event data
// * 2. Have client listen for "message" event and print the message to console
// * 3. Test you work

// io.on("connection", (socket) => {
//   console.log("New Web socket connection");
// *  Sending data from server to the client
// socket.emit("countUpdated", count);

// //* getting data from client to server
// socket.on("increment", () => {
//   count++;
//   io.emit("countUpdated", count);
// });

//   socket.emit("message", "Welcome");
// });

// ! Coding challenge
// ^  Goals:allow clients to send messages
// *  1.  Create a form with an input and button
// *          --  similar to the weather data
// *  2.  Setup event listener for form submission
// *          --  Emit "sendMessage" with input string as message data
// *  3.  Have server listen for "sendMessage"
// *          --  Send message to all connected clients
// *  4.  Test your work

io.on("connection", (socket) => {
  // ^ emitting everybody that new user has joined
  socket.broadcast.emit("message", "A new user has joined");
  socket.emit("message", "Welcome!");

  // ^ when we send a message we will call callback which will trigger the function in chat.js so it will tell the user that message was delivered
  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback("Profanity is not allowed!");
    }
    io.emit("message", message);
    callback("Delivered!");
  });

  // !  Coding challenge
  // ^  Goal:setup acknowledgement

  // * 1. Setup client acknowledgement function
  // * 2. Setup the server to send back the acknowledgement
  // * 3. Have the client print location shared --when acknowledged
  // * 4. Test your work

  socket.on("geolocation", (geolocation, callback) => {
    io.emit(
      "geo",
      `https://google.com/maps?q=${geolocation.latitude},${geolocation.longitude}`
    );
    callback("")
  });
  socket.on("disconnect", () => {
    io.emit("message", "A user has left");
  });
});

app.use("/", (req, res) => {});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
