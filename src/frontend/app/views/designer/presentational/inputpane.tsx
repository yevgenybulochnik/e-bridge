import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import Paper from '@material-ui/core/Paper';
const styles = require('./inputpane.sass')

const InputPane: React.SFC<any> = ({children, title, borderColor}) => (
  <Paper className={styles.pane}>
    <h3>{title}</h3>
    {children}
  </Paper>
)

export default CSSModules(InputPane, styles)
