const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
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
