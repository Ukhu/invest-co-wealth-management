import express from 'express';
import auth from './auth';
import stock from './stock';

const router = express.Router();

router.use('/api/v1', auth, stock);

export default router;
