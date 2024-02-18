
const UserController = require("../controller/CommentController");


const express = require('express');
const router = express.Router();

router.post('/createComment', UserController.createComment);
router.post('/likeComment', UserController.likeComment);
router.post('/dislikeComment', UserController.dislikeComment);
router.get('/getComment', UserController.getComment);

module.exports = router;