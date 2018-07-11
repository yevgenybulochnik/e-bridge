import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL = process.env.API_URL

const styles = require('./app.sass')

const App: React.SFC = () => {
  return (
    <div styleName='app-container'>
      <div styleName="content-container">
      </div>
    </div>
  )
}

export default CSSModules(App, styles)
