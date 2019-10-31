import services from '../services';

const {
  portfolioServices: {
    getStockPortfolio
  }
} = services;

/**
 * @method viewStockPortfolio
 * @description gets the current stock in the users portfolio
 * @param {object} request
 * @param {object} response
 * @returns {json} object
 */
export const viewStockPortfolio = async (request, response) => {
  const { id } = request.user;

  try {
    const stockPortfolio = await getStockPortfolio(id);
    if (stockPortfolio.length < 1) {
      return response.status(404).json({
        message: 'there are currently no stocks in your portfolio',
      });
    }
    response.status(200).json({
      message: 'successfully current stock in portfolio',
      data: stockPortfolio
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};
