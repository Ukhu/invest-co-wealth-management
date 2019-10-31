import Sequelize from 'sequelize';
import models from '../database/models';
import portfolio from './portfolio';

const { Op } = Sequelize;
const { Stock, User } = models;

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

/**
 * finds a particular stock in the database
 * @param {string} tradingCode
 * @returns {object} stock
 */
const findStock = async (tradingCode) => {
  const stock = await Stock.findAll({
    where: {
      tradingCode,
      volume: {
        [Op.gt]: 0
      }
    }
  });
  return stock;
};

/**
 * buyNewStock Transaction
 * @param {string} userId
 * @param {string} tradingCode
 * @param {string} newStockVolume
 * @param {string} newAvailableBalance
 * @param {string} newPortfolioEntry
 * @returns {object} stock
 */
const buyNewStock = async (userId, tradingCode, newStockVolume, newAvailableBalance, newPortfolioEntry) => {
  return Sequelize.transaction(t => {
    return Stock.update(
      { volume: newStockVolume },
      {
        where: {
          tradingCode
        }
      }, { transaction: t })
      .then(() => {
        return User.update({
          availableBalance: newAvailableBalance
        },
        {
          where: {
            id: userId
          }
        }, { transaction: t });
      })
      .then(() => {
        return portfolio.create({ ...newPortfolioEntry }, { transaction: t })
      });
  }).then((result) => {
    return result;
  }).catch((err) => {
    throw new Error(err);
  });
};

export default {
  getAvailableStockOptions,
  findStock,
  buyNewStock
};
