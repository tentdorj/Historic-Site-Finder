// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User'); // Adjust the path as needed
// const router = express.Router();

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(401).json({ message: 'Login failed' });
//         }

//         const isMatch = await user.isValidPassword(password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Login failed' });
//         }

//         // Generate a JWT for the user
//         const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;
