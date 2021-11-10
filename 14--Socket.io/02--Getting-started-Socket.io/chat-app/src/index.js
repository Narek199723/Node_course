const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(publicDirectoryPath));
let count = 0;

// ^  Server (emit) --> client (receive) - countUpdate
// ^  client (emit) --> server (receive) - increment

io.on("connection", (socket) => {
  console.log("New Web socket connection");
  // *  Sending data from server to the client
  socket.emit("countUpdated", count);

  //* getting data from client to server
  socket.on("increment", () => {
    count++;
    io.emit("countUpdated", count);
  });
});

app.use("/", (req, res) => {});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
