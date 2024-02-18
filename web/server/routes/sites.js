import express from 'express';
import { 
    getSites
} from '../controllers/SitesController';

const router = express.Router();


router.get('/', getSites);


export default router;