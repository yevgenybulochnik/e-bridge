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
  (typeof(state) === 'number')? true : false
}

const App: React.SFC<IAppProps> = ({userIDState}) => {
  return checkState(userIDState) ? (
    <div>test</div>
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
