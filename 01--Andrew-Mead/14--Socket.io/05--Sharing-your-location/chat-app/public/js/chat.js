const socket = io();

const input = document.querySelector("#input");
document.querySelector("#onSubmit").addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("inputValue", input.value);
});

socket.on("inputToUsers", (value) => {
  console.log(value);
});

socket.on("message", (value) => console.log(value));

document.getElementById("geolocation").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit("geolocation", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
});

socket.on("geo", (geolocation) => console.log(geolocation));
