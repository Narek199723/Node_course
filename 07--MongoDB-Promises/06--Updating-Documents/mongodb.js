const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    db.collection("users")
      .updateOne(
        {
          _id: new ObjectID("617bb23477547945a731b6d4"),
        },
        {
          // *  set allows us to set a new value for a field in our document
          $set: {
            name: "Margot Robbie",
          },
          // *  Here we are incrementing the age in the database by 1
          //|| $inc: {
          //   age: 1,
          // },
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }
);

// $ // $set
// * The $inc operator increments a field by a specified value and has the following form:
// * The $inc operator accepts positive and negative values.
//* If the field does not exist, $inc creates the field and sets the field to the specified value.
//* Use of the $inc operator on a field with a null value will generate an error.
//* $inc is an atomic operation within a single document.

// $ || $set
//*  If the field does not exist, $set will add a new field with the specified value, provided that the new field does not violate a type constraint. If you specify a dotted path for a non-existent field, $set will create the embedded documents as needed to fulfill the dotted path to the field.
//*  If you specify multiple field-value pairs, $set will update or create each field.
//*  Starting in MongoDB 5.0, mongodb no longer raises an error when you use an update operator like $set with an empty operand expression ( { } ). An empty update results in no changes and no oplog entry is created (meaning that the operation is a no-op).

// ^  Updating many

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    db.collection("tasks")
      .updateMany(
        {
          completed: true,
        },
        {
          $set: {
            completed: false,
          },
        }
      )
      .then(result => console.log(result.modifiedCount))
      .catch(err => console.log(err));
  }
);
