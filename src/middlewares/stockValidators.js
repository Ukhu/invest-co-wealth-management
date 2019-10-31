import helpers from '../helpers';
import validationErrorHandler from './validationErrorHandler';

const {
  Validators: {
    checkVolume, checkTradingCode
  }
} = helpers;

/**
   * @method buyStockValidators
   * @description validates the buyStock fields
   * @returns {array} of validation middlewares
   */
export const buyStockValidators = () => [
  checkVolume(),
  checkTradingCode(),
  validationErrorHandler
];
