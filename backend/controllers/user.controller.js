const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const genToken = require("../utils/generateToken");

const regUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, phone, picture } = req.body;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400).send("Email already exists");
  }
  const user = await User.create({ name, email, password, phone, picture });

  if (user) {
    res.status(201).send(user);
  } else {
    res.status(500).send("Failed to create user");
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const hashedPassword = await user.matchPassword(password);
  if (userExists && hashedPassword) {
    res.status(200).send(user);
  } else {
    res.status(400).send("Invalid email or password");
  }
});

module.exports = {
  regUser,
  loginUser,
};
