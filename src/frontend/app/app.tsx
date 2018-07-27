import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import Login from './features/login/containers/login'

const styles = require('./app.sass')

interface IAppProps {
  userIDState: any;
}

function checkState(state: any) {
  let logedIn = typeof(state) === 'number' ? true : false
  return logedIn
}

const App: React.SFC<IAppProps> = ({userIDState}) => {
  return checkState(userIDState) ? (
    <div styleName='app-container'>
      <div>statusbar holder</div>
      <div styleName='nav-content-container'>
        <div>Nav Placeholder</div>
        <div styleName='content-container'>
          <Switch>
          </Switch>
        </div>
      </div>
    </div>
  ) : (
    <div styleName='app-container'>
      <Login />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  userIDState: state.userID
})

export default connect(
  mapStateToProps
)(CSSModules(App, styles))
