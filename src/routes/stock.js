import express from 'express';
import * as StockControllers from '../controllers/stock';
import middlewares from '../middlewares';

const stock = express.Router();
const STOCK_URL = '/stocks';

const { viewAvailableStock, buyStock } = StockControllers;
const { authenticateUser } = middlewares;
const { StockValidators: { buyStockValidators } } = middlewares;

// view available stock options route
stock.get(`${STOCK_URL}/available`, viewAvailableStock);

// buy stocks
stock.get(`${STOCK_URL}/buy`, authenticateUser, buyStockValidators(), buyStock);

export default stock;
