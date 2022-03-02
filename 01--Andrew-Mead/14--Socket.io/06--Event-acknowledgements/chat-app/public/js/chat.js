const socket = io();

// ^ server (emit) --> client(receive) -- acknowledgement --> server
// ^ client (emit) --> server(receive) -- acknowledgement --> clients
socket.on("message", (input) => console.log(input));

document.querySelector("#onSubmit").addEventListener("submit", (e) => {
  const input = document.querySelector("#input").value;
  e.preventDefault();

  socket.emit("sendMessage", input, (error) => {
    if (error) {
      return console.log(error);
    }

    console.log("The message was delivered");
  });
});

document.getElementById("geolocation").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "geolocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log("location shared");
      }
    );
  });
});

socket.on("geo", (geolocation) => console.log(geolocation));
