const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  // if (total !== 13) {
  //   throw new Error("Total tip should be 13.Got " + total);
  // }

  // ^  with words this means that we EXPECT our value to be 13
  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

// % Why Test?
// *  -- save time
// *  -- Creates reliable software
// *  -- Gives flexibility to developers
// *      -- Refactoring
// *      -- Collaborating
// *      -- Profiling
// *  -- Peace of mind

test("Should convert 32 F to 0 C ", () => {
  const celsius = fahrenheitToCelsius(32);
  expect(celsius).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const fahrenheit = celsiusToFahrenheit(0);
  expect(fahrenheit).toBe(32);
});

// ^ when we run code jest doesn't wait to se if it is asynchronous or not , it just runs when there is no error so there is success, so when we run this function it won't be a fail, it will be success
// test("Async test Demo", () => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//   }, 3000);
// });

// ^  by passing a single argument to this function and call afterwards we tell jest that this function is asynchronous function
// test("Async test Demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 3000);
// });

// test("Should add 2 numbers", (done) => {
//   add(2, 3).then((sum) => {
//     expect(sum).toBe(5);
//   });
//   done();
// });

test("Should add two numbers async/await", async () => {
  const sum = await (10, 22);
  expect(sum).toBe(32);
});
