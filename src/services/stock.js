import Sequelize from 'sequelize';
import models from '../database/models';

const { Op } = Sequelize;
const { Stock } = models;

/**
 * gets all available stock options from the database
 * @returns {object} all availabe stock
 */
const getAvailableStockOptions = async () => {
  const availabeStock = await Stock.findAll({
    where: {
      volume: {
        [Op.gt]: 0
      }
    }
  });
  return availabeStock;
};

export default {
  getAvailableStockOptions
};
