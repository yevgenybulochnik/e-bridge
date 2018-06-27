import { Router , Request, Response, NextFunction } from 'express';
import * as controller from './navController';

export class NavRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public getNavLinks(req: Request, res: Response, next: NextFunction) {
    controller.queryNavItems().then((result) => {
      res.send(result)
    })
  }

  init() {
    this.router.get('/', this.getNavLinks)
  }
}

const navRoutes = new NavRouter();
navRoutes.init();

export default navRoutes.router;
