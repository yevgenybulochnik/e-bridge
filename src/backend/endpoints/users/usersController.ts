import { Request, Response, NextFunction } from 'express';
import * as database from '../../models'

export function getUserMenu(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({message: 'test response'})
}
