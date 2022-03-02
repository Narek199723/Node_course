const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=87c80f5919af8733daff02012b18f234&query=37.8267,-122.4233&units=f`;

// request({ url, json: true }, (error, response) => {
//   console.log(response.body.current);
// });

// !  Goal: Print a small forecast to the user
//* 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
//* 2. Test you work

request({ url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions}, It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});
