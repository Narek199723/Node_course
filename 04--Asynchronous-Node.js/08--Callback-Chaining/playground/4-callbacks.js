setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

// *This is a callback function, callback function is nothing more than a function we provide as an argument to another function with the intention of having it called later on, so in this case we are providing function as an argument to set time out with the intention that set time out is going tto call this function at some point in the future, that is all a callback function

// () => {console.log("Two seconds are up");}

const names = ["Andrew", "Jen", "Jess"];
const shortNames = names.filter((name) => name.length <= 4);

// const geocode = (address, callback) => {
//   const data = {
//     latitude: 0,
//     longitude: 0,
//   };
//   return data;
// };

// const data = geocode("Philadelphia");
// console.log(data);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     return data;
//   }, 3000);
// };

// * THis code will return a undefined this is where callback is come in to play
// const data = geocode("Philadelphia");
// console.log(data);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 3000);
// };

// geocode("Philadelphia", (data) => console.log(data));

//! Coding Challenge
//* Goal: Mess around with the callback pattern
//* 1. Define an add function that accepts the correct arguments
//* 2. Use setTimeout to simulate a 2 second delay
//* 3. After 2 seconds are up, call the callback function with the sum
//* 4. Test your work!
// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

const add = (first, second, callback) => {
  setTimeout(() => {
    callback(first + second);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
