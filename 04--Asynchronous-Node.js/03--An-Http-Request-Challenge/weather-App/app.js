const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=87c80f5919af8733daff02012b18f234&query=37.8267,-122.4233&units=f`;

// request({ url, json: true }, (error, response) => {
//   console.log(response.body.current);
// });

// !  Goal: Print a small forecast to the user
//* 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
//* 2. Test you work

// request({ url, json: true }, (error, response) => {
//   console.log(
//     `${response.body.current.weather_descriptions}, It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
//   );
// });

// * Geocoding
// Address->Lat/Lang->Weather
// * Goal Print the lat/long for los Angeles

// 1.Fire off a new request to the url explored in browser
// 2.Have the request module parse it as JSON
// 3.Print both the Latitude and longitude to the terminal
// 4.Test your work

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFyZWtib3NoeWFuIiwiYSI6ImNrc2lyOGRiYTA5ankyb2wyY242cWJmbnUifQ.P7efqFXwxdTSMvakjctMLg&limit=1`;

request({ url: geocodeUrl, json: true }, (error, response) => {
  const [longitude, latitude] = response.body.features[0].center;
  console.log(`${latitude},${longitude}`);
});
