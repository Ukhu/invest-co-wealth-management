import helpers from '../helpers';
import validationErrorHandler from './validationErrorHandler';

const {
  Validators: {
    checkName, checkEmail, checkPassword
  }
} = helpers;

/**
   * @method signupValidators
   * @description validates the signup fields
   * @returns {array} of validation middlewares
   */
export const signupValidators = () => [
  checkName('firstName'),
  checkName('lastName'),
  checkEmail(),
  checkPassword(),
  validationErrorHandler
];
