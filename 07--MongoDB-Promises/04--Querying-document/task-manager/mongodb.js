// CRUD create read update delete

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

        // db.collection("users").findOne(
        //     { name: "Vik", age: 10 },
        //     (error, user) => {
        //         if (error) {
        //             return console.log("Unable to fetch");
        //         }

        //         console.log(user);
        //     }
        // );

        // db.collection("users").findOne(
        //     { _id: new ObjectID("617bb23477547945a731b6d4") },
        //     (error, user) => {
        //         if (error) {
        //             return console.log("Unable to fetch");
        //         }

        //         console.log(user);
        //     }
        // );

        db.collection("users")
            .find({ age: 27 })
            // *  This toArray method allows us to return an array from mongoDB
            .toArray((error, users) => {
                console.log(users);
            });

        db.collection("users")
            .find({ age: 27 })
            // *  This count method allows us to return the number of elements in the array
            .count((error, count) => {
                console.log(count);
            });
        // db.collection("tasks")
        //     .find({ completed: false })
        //     .toArray((error, tasks) => {
        //         console.log(tasks);
        //     });
    }
);
