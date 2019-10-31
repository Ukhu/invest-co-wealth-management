import models from '../database/models';

const { Portfolio } = models;

/**
 * Gets the users current stock in their portfolio
 * @param {string} userId
 * @returns {object} a user object
 */
const getStockPortfolio = async (userId) => {
  const currentStocksInPortfolio = await Portfolio.findAll({
    where: {
      userId
    }
  });
  return currentStocksInPortfolio;
};

export default {
  getStockPortfolio
};
