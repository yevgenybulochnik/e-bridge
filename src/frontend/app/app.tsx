import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./app.sass')

import LeftNav from './containers/leftnav/leftnav'

const App: React.SFC = () => {
  return (
    <div styleName='app-container'>
      <LeftNav />
    </div>
  )
}

export default CSSModules(App, styles)
