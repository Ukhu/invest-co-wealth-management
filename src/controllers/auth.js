import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import services from '../services';

const {
  userServices: {
    createUser,
    findUser
  }
} = services;

/**
 * @method signup
 * @description creates a new User in the database
 * @param {object} request
 * @param {object} response
 * @returns {json} object
 */
export const signup = async (request, response) => {
  const {
    firstName, lastName, email, password
  } = request.body;
  try {
    const existingUser = await findUser(email);
    if (existingUser) {
      return response.status(409).json({ error: 'user already exisits' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      availableBalance: 50000
    });
    const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, { expiresIn: '24h' });
    response.status(201).json({
      message: 'sucessfully created user!',
      data: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        availableBalance: newUser.availableBalance,
        token
      }
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};
