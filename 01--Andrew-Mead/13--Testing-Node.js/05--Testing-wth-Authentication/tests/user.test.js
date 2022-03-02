const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Margot Robbie",
  email: "margotrobbie@gmail.com",
  password: "1234567",
  tokens: [{ token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET_KEY) }],
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Margot Robbie",
      email: "margotrobbidse@gmail.com",
      password: "1234567",
    })
    .expect(201);
});

test("Should login existing user", async () => {
  const { email, password } = userOne;
  await request(app)
    .post("/users/login")
    .send({
      email,
      password,
    })
    .expect(200);
});

test("Should not login noneExisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({ email: "hello from Armenia", password: "456789123" })
    .expect(400);
});

test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

// !  Coding challenge delete account
// * 1  Create "Should delete account for user"
// *        -- Setup auth header and expect correct status code
// * 2  Create "Should not delete account for unauthenticated user"
//  *       -- Expect correct status code
// * 3 Test your work

test("Should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not delete account for unauthenticated user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});
