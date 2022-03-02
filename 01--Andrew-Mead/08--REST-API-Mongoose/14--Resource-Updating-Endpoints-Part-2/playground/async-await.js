// ^  THis will return Promise {undefined}
// const doWork = async () => {};

// *  If we will run the script it will show Promise {undefined}
// console.log(doWork());

// const doWork1 = async () => {
//   return "Andrew";
// };

// console.log(doWork1());

// const doWork1 = async () => {
//   throw new Error("Something went wrong");
//   return "Andrew";
// };

// doWork1()
//   .then((res) => {
//     console.log(res, "RES");
//   })
//   .catch((e) => console.log("ERROR", e.message));

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork1 = async () => {
  const sum = await add(1, 99);
  const sum1 = await add(sum, 50);
  return await add(sum1, 10);
};

doWork1()
  .then((res) => {
    console.log(res, "RES");
  })
  .catch((e) => console.log("ERROR", e.message));

// for (let i = 1000; i < 10000; i++) {
//   const firstTwo = i.toString().slice(0, 2);
//   const secondTwo = i.toString().slice(2, 4).split("").reverse().join("");
//   firstTwo === secondTwo && console.log(i);
// }
