import { Router } from 'express';
import * as controller from './authController';
const AuthRouter = Router()

AuthRouter.post('/register', controller.registerUser)
AuthRouter.post('/login', controller.loginUser)

export default AuthRouter
