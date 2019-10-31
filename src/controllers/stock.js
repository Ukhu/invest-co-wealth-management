import services from '../services';

const {
  stockServices: {
    getAvailableStockOptions,
    findStock,
    buyNewStock
  }
} = services;

/**
 * @method viewAvailableStock
 * @description gets the available stock options from the database
 * @param {object} request
 * @param {object} response
 * @returns {json} object
 */
export const viewAvailableStock = async (request, response) => {
  try {
    const availableStock = await getAvailableStockOptions();
    if (availableStock.length < 1) {
      return response.status(404).json({
        message: 'no available stock options',
      });
    }
    response.status(200).json({
      message: 'successfully returned available stock options',
      data: availableStock
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};

/**
 * @method buyStock
 * @description gets the available stock options from the database
 * @param {object} request
 * @param {object} response
 * @returns {json} object
 */
export const buyStock = async (request, response) => {
  const { tradingCode, volume } = request.body;
  const { id } = request.user;
  try {
    const foundStock = await findStock(tradingCode);
    if (!foundStock) {
      return response.status(404).json({ message: 'no available stock found with the given tradingCode' });
    }
    if (volume > foundStock.volume) {
      return response.status(404).json({
        message: 'the number units requested is more than the available units. please request a lower volume'
      });
    }

    const newStockVolume = foundStock.volume - volume;
    const newAvailableBalance = volume * foundStock.unitPrice;

    const newPortfolioEntry = {
      userId: id,
      tradingCode,
      numberOfUnits: volume
    };

    await buyNewStock(id, tradingCode, newStockVolume, newAvailableBalance, newPortfolioEntry);

    response.status(201).json({
      message: `you have successfully purchase ${volume} units of ${tradingCode} stocks`
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};
