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
  const { username, password, verifyPassword } = req.body;

  try {
    if (password !== verifyPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    console.log("User registered successfully");
    
    // Assuming you want to sign a token for the newly registered user
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Error signing up user" });
  }
};


module.exports = {
  login,
  signup,
};
