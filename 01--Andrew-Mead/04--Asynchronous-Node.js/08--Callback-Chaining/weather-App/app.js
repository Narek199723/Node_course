const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// geocode("New York", (error, data) => {
//   if (error) {
//     return console.log(error);
//   }
//   forecast(data.latitude, data.longitude, (error, forecastData) => {
//     if (error) {
//       return console.log(error);
//     }

//     console.log(data.location);
//     console.log(forecastData);
//     // console.log("Error", error);
//     // console.log("Data", data);
//   });
// });

// ! Coding challenge
// 1.Address the command line argument without yargs
// 2.Use the string value as the input for geocode
// 3.Only geocode if a location was provided
// 4.Test your work with couple location

process.argv?.[2] &&
  ((input) => {
    geocode(input, (error, data) => {
      if (error) {
        return console.log(error);
      }
      forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(data.location);
        console.log(forecastData);
      });
    });
  })(process.argv[2]);
