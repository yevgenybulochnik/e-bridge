// Temp combine model and controller for testing purposes
import { Request, Response, NextFunction } from 'express';
import { dbConn } from '../../db/knex';
import * as localAuth from '../../auth/local';

export function registerUser(req: Request, res: Response, next: NextFunction) {
  const { firstname, lastname, email, password } = req.body
  return createUser(firstname, lastname, email, password)
    .then((user) => {return localAuth.encodeToken(user[0]) })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error'
      })
    })
}

function createUser(firstname: string, lastname: string, email: string, password: string) {
  return dbConn('users')
    .insert({
      firstname,
      lastname,
      email, 
      password
    })
    .returning(['id', 'email'])
}
