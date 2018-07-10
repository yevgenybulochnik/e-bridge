import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'Invalid Headers'
    })
  }
  const authHeader = req.headers.authorization
  const token = authHeader.split(' ')[1]
  jwt.verify(token, process.env.TOKEN_SECRET, (err: any, payload: any) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message
      })
    }
    next()
  })
}

export default authenticate
