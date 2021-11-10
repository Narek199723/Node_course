const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=87c80f5919af8733daff02012b18f234&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to Connect to forecast services");
    } else if (response.body.error) {
      callback("Unable to find location.Try another search ");
    } else {
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
