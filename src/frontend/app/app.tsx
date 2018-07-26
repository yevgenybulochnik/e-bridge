import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom';

import Login from './features/login/containers/login'

const styles = require('./app.sass')


const App: React.SFC = () => {
  return (
    <div styleName='app-container'>
      <Login />
    </div>
  )
}

export default CSSModules(App, styles)
