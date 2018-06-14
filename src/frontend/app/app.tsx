import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL = process.env.API_URL

const styles = require('./app.sass')

import LeftNav from './containers/leftnav/leftnav';
import TestRouteComponent from './views/testRoute';
import TestRouteComponent2 from './views/testRoute2';

const App: React.SFC = () => {
  return (
    <div styleName='app-container'>
      <LeftNav />
      <div styleName="content-container">
        <Switch>
          <Route exact path='/test' component={TestRouteComponent} />
          <Route exact path='/test2' component={TestRouteComponent2} />
        </Switch>
      </div>
    </div>
  )
}

export default CSSModules(App, styles)
