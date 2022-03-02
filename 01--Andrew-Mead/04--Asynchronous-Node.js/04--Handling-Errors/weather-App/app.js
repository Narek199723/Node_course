const request = require("request");
const axios = require("axios");

const url = `http://api.weatherstack.com/current?access_key=87c80f5919af8733daff02012b18f234&query=37.8267,-122.4233&units=f`;

// request({ url, json: true }, (error, response) => {
//   console.log(response.body.current);
// });
// const fetchingData = async () => {
//   try {
//     const { data } = await axios.get(url);

//     console.log(
//       `${data.current.weather_descriptions}, It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`
//     );
//   } catch (error) {
//     console.log("Unable to connect to weather service");
//   }
// };
// fetchingData();

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFyZWtib3NoeWFuIiwiYSI6ImNrc2lyOGRiYTA5ankyb2wyY242cWJmbnUifQ.P7efqFXwxdTSMvakjctMLg&limit=1`;

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   const [longitude, latitude] = response.body.features[0].center;
//   console.log(`${latitude},${longitude}`);
// });

// const apiMapBox = async () => {
//   try {
//     const { data } = await axios.get(geocodeUrl);

//     const [longitude, latitude] = data.features[0].center;
//     console.log(`${latitude},${longitude}`);
//   } catch (error) {
//     console.log("Unable to connect to map box API");
//   }
// };
// apiMapBox();
