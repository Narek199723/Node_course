// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log("Unable to connect to database!");
        }

        const db = client.db(databaseName);

        //         db.collection("users").insertOne(
        //             {
        //                 name: "Andrew",
        //                 age: 27,
        //             },
        //             (error, result) => {
        //                 if (error) {
        //                     return console.log("Unable to insert user");
        //                 }
        //                 //* ops is an array of documents in this case array with just one document inside
        //                 console.log(result,"RESULT.OPS");
        //             }
        //         );
        //     }
        // );

        // db.collection("users").insertMany(
        //     [
        //         {
        //             name: "Jane",
        //             age: 28,
        //         },
        //         {
        //             name: "Kate",
        //             age: 24,
        //         },
        //     ],
        //     (error, result) => {
        //         if (error) {
        //             return console.log("Unable to insert documents");
        //         }
        //         console.log(result);
        //     }
        // );

        // !  Coding challenge
        //* Insert 3 tasks into a new tasks collection

        // * 1. Use insertMany to insert three documents
        // * 2. Setup the callback to handler error or print the results.insertedIds
        // * 3. Run the script
        // * 4. Refresh the database in Compass and view data in tasks collection

        db.collection("tasks").insertMany(
            [
                {
                    description: "Make something to eat",
                    completedValue: true,
                },
                {
                    description: "Study Javascript deeply",
                    completed: false,
                },
                {
                    description: "CLeaning the room",
                    completed: true,
                },
            ],
            (error, result) => {
                if (error) {
                    return console.log("Unable to insert Tasks");
                }
                console.log(result);
            }
        );
    }
);

// MongoClient.connect(
//     connectionURL,
//     { useNewUrlParser: true },
//     (error, client) => {
//         if (error) {
//             return console.log("Unable to connect to database!");
//         }

//         const db = client.db(databaseName);

//         db.collection("users")
//             .deleteMany({
//                 age: 38,
//             })
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//         db.collection("tasks")
//             .deleteOne({
//                 description: "Clean the house",
//             })
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
