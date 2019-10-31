import express from 'express';
import * as StockControllers from '../controllers/stock';

const stock = express.Router();
const STOCK_URL = '/stock';

const { viewAvailableStock } = StockControllers;

// view available stock options route
stock.get(`${STOCK_URL}/available`, viewAvailableStock);

export default stock;
