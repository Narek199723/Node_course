const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/User");

const userOne = {
  name: "Margot Robbie",
  email: "margotrobbie@gmail.com",
  password: "1234567",
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
