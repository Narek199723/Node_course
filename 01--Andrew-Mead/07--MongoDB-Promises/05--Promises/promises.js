const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3]);
    reject("This is my error");
    reject("second error");
  }, 2000);
});

doWorkPromise
  .then((data) => console.log("Success", data))
 .catch((error) => console.log(error));
  

// *                            fulfilled
//*                           /
// * PROMISE  --> PENDING -->
// *                          \
// *                            rejected
