import express from 'express';
import { 
    getSites,
    getSiteRating
} from '../controllers/SitesController';

const router = express.Router();


 router.get('/', getSites);
 router.get('/siteRating', getSiteRating);


export default router;