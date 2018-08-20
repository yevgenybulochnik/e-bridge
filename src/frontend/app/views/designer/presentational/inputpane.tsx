import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./inputpane.sass')

const InputPane: React.SFC<any> = (props) => (
  <div styleName='pane'>
    {props.children}
  </div>
)

export default CSSModules(InputPane, styles)
