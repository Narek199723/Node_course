const socket = io();

const input = document.querySelector("#input");
document.querySelector("#onSubmit").addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("inputValue", input.value);
});

socket.on("inputToUsers", (value) => {
  console.log(value);
});
