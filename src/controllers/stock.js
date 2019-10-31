import services from '../services';

const {
  stockServices: {
    getAvailableStockOptions
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
