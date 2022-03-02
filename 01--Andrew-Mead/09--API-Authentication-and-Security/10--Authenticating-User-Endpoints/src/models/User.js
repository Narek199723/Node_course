const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // *  Removing spaces
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can't contain 'password'");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    // *  Validating age field with mongoose which is not the best idea but anyway mongoose provides us with that functionality
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// % Generating a function which won't return private data like password to the user
// *  BEcause we are going t use this keyword that's why we need regular function
// *  JSON 
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// %  Generating jsonWebToken
// ^  THis is for individual user
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// % Logging in user by finding with email first then getting password and comparing returning that user if everything is ok
userSchema.statics.findByCredentials = async (email, password) => {
  console.log(email, password);
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to Login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to Login");
  }
  return user;
};

// %  Hashing the plain text password before saving
// *  Function should be exactly function not a arrow function because of this keyword,
// *  We have pre, and post , pre is before an event, post after event
// *  pre("save" means before saving
// userSchema.pre("save", async function (next) {
//   // *  For every user
//   const user = this;

//   console.log("Just before saving ");

//   // *  Make sure next is called
//   next();
// });

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
