const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Adjust the path to your User model

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Fetch user from database
        const user = await User.findById(decoded.userID);
        if (!user) {
            throw new Error('No user found with this ID');
        }

        // Attach user to request object
        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};
