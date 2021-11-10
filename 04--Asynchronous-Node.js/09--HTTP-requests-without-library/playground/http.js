const http = require("http");
const url = `http://poapi.weatherstack.com/current?access_key=87c80f5919af8733daff02012b18f234&query=37.8267,-122.4233&units=f`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("An Error", error);
});
request.end();
