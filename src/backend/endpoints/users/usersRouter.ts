import { Router } from 'express';
import * as controller from './usersController';
import authenticate from '../authMiddleware';

const UsersRouter = Router()

UsersRouter.get('/:id/menu', controller.getUserMenu)

export default UsersRouter
