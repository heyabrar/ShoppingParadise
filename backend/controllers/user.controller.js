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
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      picture: user.picture,
      token: genToken(user._id),
    });
  } else {
    res.status(500).send("Failed to create user");
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const hashedPassword = await user.matchPassword(password);
  if (user && hashedPassword) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      picture: user.picture,
      token: genToken(user._id),
    });
  } else {
    res.status(400).send("Invalid email or password");
  }
});

module.exports = {
  regUser,
  loginUser,
};
