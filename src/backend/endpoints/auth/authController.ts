// Temp combine model and controller for testing purposes
import { Request, Response, NextFunction } from 'express';
import * as database from '../../models'
import { encodeToken } from '../jwtProcessing'

export function registerUser(req: Request, res: Response, next: NextFunction) {
  const { firstname, lastname, email, password } = req.body
  return database.createUser(firstname, lastname, email, password)
    .then((user) => {
      let userData = user[0]
      res.status(200).json({
        status: 'success',
        message: 'User registered'
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
    .then(userClaims => {return {token: encodeToken(userClaims), userID: userClaims.id}})
    .then((userData) => {
      res.status(200).json({
        status: 'success',
        id: userData.userID,
        token: userData.token
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        message: err
      })
    })
}
