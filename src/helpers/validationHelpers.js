import { check } from 'express-validator';

/**
 * @method genericCheck
 * @description validates the input in the specified field
 * @param {string} field
 * @returns {function} call to express-validator check API middleware
 */
export const genericCheck = (field) => check(`${field}`)
  .exists()
  .withMessage(`${field} is required`)
  .not()
  .isEmpty({ ignore_whitespace: true })
  .withMessage(`${field} cannot be blank`);

/**
 * @method checkName
 * @description validates the input in the dislpayName field
 * @param {string} field
 * @returns {function} call to the genericCheck validator
 */
export const checkName = (field) => genericCheck(`${field}`)
  .trim()
  .isLength({ min: 2, max: 15 })
  .withMessage(`${field} must be at least 2 characters, and maximum 15`)
  .isAlpha()
  .withMessage(`${field} must be with valid alphabets`);

/**
 * @method checkEmail
 * @description validates the input in the email field
 * @returns {function} call to the genericCheck validator
 */
export const checkEmail = () => genericCheck('email')
  .trim()
  .isEmail()
  .withMessage('must be a valid email');

/**
 * @method checkPassword
 * @description validates the input in the password field
 * @returns {function} call to the genericCheck validator
 */
export const checkPassword = () => genericCheck('password')
  .trim()
  .isLength({ min: 6, max: 15 })
  .withMessage('password must be at least 8 characters, and maximum 15')
  .isAlphanumeric()
  .withMessage('password must be alphanumeric');
