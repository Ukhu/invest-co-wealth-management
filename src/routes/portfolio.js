import express from 'express';
import * as PortfolioController from '../controllers/portfolio';
import middlewares from '../middlewares';

const portfolio = express.Router();

const { viewStockPortfolio } = PortfolioController;

const { authenticateUser } = middlewares;

// view available stock options route
portfolio.get('/portfolio', authenticateUser, viewStockPortfolio);

export default portfolio;
