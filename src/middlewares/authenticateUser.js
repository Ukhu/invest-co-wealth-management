import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import services from '../services';

dotenv.config();

const { SECRET_KEY } = process.env;

const { userServices: { findUser } } = services;

/**
 *
 * @param {object} request
 * @param {object} response
 * @param {*} next
 * @returns {*} json or next
 */
export default (request, response, next) => {
  const token = request.headers.authorization;
  if (token) {
    jwt.verify(token, SECRET_KEY, async (error, decoded) => {
      if (error) {
        response.status(401).json({ error: 'invalid token' });
      } else {
        try {
          const user = await findUser(decoded.id);
          if (!user) {
            return response.status(404).json({ error: 'user not found' });
          }
          request.user = user;
          return next();
        } catch (err) {
          response.status(500)({ error: err.message });
        }
      }
    });
  } else {
    response.status(401).json({ error: 'no token provided' });
  }
};
