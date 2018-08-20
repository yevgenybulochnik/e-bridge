import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./designer.sass')

import InputPane from './presentational/inputpane'

class Designer extends React.Component<any, any> {
  render() {
    return (
      <InputPane>
        <div>hello world!</div>
      </InputPane>
    )
  }
}

export default CSSModules(Designer, styles)
