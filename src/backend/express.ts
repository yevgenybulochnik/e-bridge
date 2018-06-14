import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

class App {
  public express: express.Application
  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware(): void {
    this.express.use(logger('common'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({extended: false}))
    this.express.use(cors())
  }

  private routes(): void {
    let router = express.Router()
    router.get('/api/asynctest', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
