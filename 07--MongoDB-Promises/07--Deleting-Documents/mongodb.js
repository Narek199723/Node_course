const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }
//     const db = client.db(databaseName);
//     db.collection("users")
//       .deleteMany({
//         age: 27,
//       })
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => console.log(err));
//   }
// );

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    db.collection("tasks")
      .deleteOne({
        description: "Make something to eat",
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
);
