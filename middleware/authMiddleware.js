const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Get the token from the authorization header
    const token = req.headers.authorization.split(' ')[1]; // Assumes "Bearer <token>"

    // Verify the token
    // Replace 'your_jwt_secret' with the secret key used to sign your JWTs
    const decoded = jwt.verify(token, 'your_jwt_secret');
    
    // Attach the user payload to the request object
    req.user = decoded;

    // Proceed to the next middleware/function
    next();
  } catch (err) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authMiddleware;
