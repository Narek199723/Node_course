const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

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
  
  socket.on("inputValue", (value) => {
    io.emit("inputToUsers", value);
  });

});

app.use("/", (req, res) => {});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
