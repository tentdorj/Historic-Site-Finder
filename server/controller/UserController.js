const User = require("../models/User.js");

// routes/UserRoute.js for login routing
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);

  try {
    const user = await User.findOne({ username });
    console.log(user);

    if (!user.username || !user.password) {
      console.log("Invalid username or password");
      return res.status(401).json({ message: "Invalid username or password" });
    }
    console.log("User authenticated successfully");
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in user" });
  }
};

const signup = async (req, res) => {
  const { username, password, verifyPassword   } = req.body;

  try {
    

    const newUser = new User({
      
      username: req.body.username,
      password: req.body.password,
      verifyPassword: req.body.verifyPassword,

    });


    console.log("User authenticated successfully");
    const token = jwt.sign({ userId: User._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in user" });
  }
};

module.exports = {
  login,
  signup,
};
