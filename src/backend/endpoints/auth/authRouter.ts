import { Router } from 'express';
import * as controller from './authController';
import authenticate from '../authMiddleware'

const AuthRouter = Router()

AuthRouter.post('/register', authenticate, controller.registerUser)
AuthRouter.post('/login', controller.loginUser)

export default AuthRouter
