const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// ^  Converting JS object to a  --> JSON
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // ^  Converting JSON to a --> JS Object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);

// ^  Writing a file in a JSON format storing our data in it
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// ^Reading data from that JSON file
// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
// console.log(dataBuffer.toString());

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// ^ Coding Challenge
// * 1). Load and parse the JSON data
// * 2). CHange the name and age property using your info
// * 3). Stringify the changed object and overwrite the original data
// * 4). Test your work by viewing data in the JSON file

// const bufferData = fs.readFileSync("1-json.json");
// const dataJSON = bufferData.toString();
// const data = JSON.parse(dataJSON);

// data.name = "Margot";
// data.age = 30;

// console.log(data);
// const stringifiedJSON = JSON.stringify(data);

// fs.writeFileSync("2-json.json", stringifiedJSON);
