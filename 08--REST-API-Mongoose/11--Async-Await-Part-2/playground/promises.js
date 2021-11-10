const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// *  Here we have problems , the problem name is callback hell, is like nested callbacks which is harder to debug ...
// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ^  THis is new syntax to chain promises together

add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 5);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((err) => {
    console.log(err);
  });
