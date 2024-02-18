import { 
    createComment,
    likeComment,
    getComment,
    


} from '../controllers/CommentController';

const express = require('express');


const router = express.Router();

router.post('/', createComment);
router.post('/', likeComment);
router.post('/', dislikeComment);
router.get('/', getComment);


export default router;