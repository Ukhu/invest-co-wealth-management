import models from '../database/models';

const { User } = models;

/**
 * Finds a user from the database by email, or id
 * @param {string} param
 * @returns {object} a user object
 */
const findUser = async (param) => {
  const field = (/\D/g.test(param)) ? { email: param } : { id: param };
  const user = await User.findOne({
    where: field
  });
  return user;
};

/**
 * Adds a new user to the database
 * @param {string} user
 * @returns {object} a user object
 */
const createUser = async (user) => {
  const newUser = await User.create({
    ...user
  });
  return newUser;
};

export default {
  findUser,
  createUser
};
