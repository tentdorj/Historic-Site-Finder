import express from 'express';
import { 
    createComment,
    likeComment,
    getComment,
    


} from '../controllers/CommentController';

const router = express.Router();

router.post('/', createComment);
router.post('/', likeComment);
router.post('/', dislikeComment);
router.get('/', getComment);


export default router;