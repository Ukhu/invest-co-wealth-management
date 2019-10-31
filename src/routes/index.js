import express from 'express';
import auth from './auth';
import stock from './stock';
import portfolio from './portfolio';

const router = express.Router();

router.use('/api/v1', auth, stock, portfolio);

export default router;
