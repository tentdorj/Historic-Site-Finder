const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Adjust the path to your User model
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Assuming you have a method to check user credentials
        const user = await User.findOne({ username: username });
        if (!user || !user.isValidPassword(password)) {
            return res.status(401).send('Authentication failed');
        }

        // Generate JWT
        const token = jwt.sign({ userID: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }
});
