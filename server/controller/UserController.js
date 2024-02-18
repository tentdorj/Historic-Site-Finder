const User = require('../models/User.js');

// routes/UserRoute.js for login routing
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const router = express.Router();
const bcrypt = require('bcryptjs');



router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
  
    try {
      const user = await User.findOne({ username });
      console.log(user);
  
      if (!user.username || !user.password) {
         console.log('Invalid username or password');
         return res.status(401).json({message:'Invalid username or password'});
      }
      console.log('User authenticated successfully');
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({message: 'Error logging in user'});
    }
  });

  router.post('/signup', async (req, res) => {
    const {name,username, password } = req.body;
 
  
    try {

        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
           
        })
         console.log('User authenticated successfully');
         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         res.json({ token });
       } catch (error) {
         res.status(500).json({message: 'Error logging in user'});
       }
     });
      

  module.exports = {
    login,
    signup
};


