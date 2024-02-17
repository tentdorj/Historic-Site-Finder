const express = require('express');
const commentController = require('./controllers/commentController');
const authMiddleware = require('/middleware/authMiddleware'); // Import the authMiddleware

const router = express.Router();

// Applying the authMiddleware to protect the route
router.post('/comments', authMiddleware, commentController.createComment);
router.post('/comments/:commentId/like', authMiddleware, commentController.likeComment);
router.post('/comments/:commentId/dislike', authMiddleware, commentController.dislikeComment);

module.exports = router;
