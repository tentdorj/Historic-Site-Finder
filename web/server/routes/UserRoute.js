// routes/UserRoute.js for login routing
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
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



// async function hashPassword(password) {
//   const salt = await bcrypt.genSalt(10); // Generate salt
//   const hash = await bcrypt.hash(password, salt); // Generate hash
//   return hash;
// }

// async function comparePassword(plainTextPassword, hashedPassword) {
//     return await bcrypt.compare(plainTextPassword, hashedPassword);
// }

  
// router.post('/login', async (req, res) => {
//     try {
//       const { username, password } = req.body;
//       const user = await User.findOne({ username });
  
//       if (!user) {
//         return res.status(401).json({ message: 'Login failed: User not found' });
//       }
  
//       const isMatch = await comparePassword(password, user.password);
//       if (isMatch) {
//         // Passwords match
//         // Proceed with login logic (e.g., token generation)
//         res.json({ message: 'Login successful' });
//       } else {
//         // Passwords do not match
//         res.status(401).json({ message: 'Login failed: Incorrect password' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'An error occurred during login' });
//     }
// });
  

module.exports = router;






