const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const decoded = jwt.verify(token, "thisismynewcourse");
    console.log(decoded);
    const user = await User.findOne({
      _id: decoded._id,
      // *  tokens.token means that it will go and find the token in the token's array
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
