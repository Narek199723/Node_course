const axios = require("axios");
const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=87c80f5919af8733daff02012b18f234&query=37.8267,-122.4233`;

request({ url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data);
});
