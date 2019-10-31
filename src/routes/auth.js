import express from 'express';
import * as AuthControllers from '../controllers/auth';
import middlewares from '../middlewares';

const auth = express.Router();
const AUTH_URL = '/auth';

const { signup } = AuthControllers;
const { AuthValidators: { signupValidators } } = middlewares;

// sign up route
auth.post(`${AUTH_URL}/signup`, signupValidators(), signup);

export default auth;
