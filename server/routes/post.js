import express from 'express';
import { getpost,postcreate} from '../controls/post.js';

const router= express.Router()
router.get('/',getpost);
router.post('/',postcreate)
export default router;