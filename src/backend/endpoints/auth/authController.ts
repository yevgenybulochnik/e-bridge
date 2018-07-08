// Temp combine model and controller for testing purposes
import { Request, Response, NextFunction } from 'express';
import * as database from '../../models'
import * as localAuth from '../../auth/local';

export function registerUser(req: Request, res: Response, next: NextFunction) {
  const { firstname, lastname, email, password } = req.body
  return database.createUser(firstname, lastname, email, password)
    .then((user) => {return localAuth.encodeToken(user[0]) })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        message: err
      })
    })
}

export function loginUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body
  return database.verifyUser(email, password)
    .then(userClaims => {return localAuth.encodeToken(userClaims)})
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        message: err
      })
    })
}
