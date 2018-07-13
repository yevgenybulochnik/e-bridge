import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = require('./login.sass')

class Login extends React.Component<any, any> {
  render() {
    return (
    <form styleName='login-container' action="">
      <div styleName='label'>E-Bridge Login</div>
      <TextField
        label='Input User Email'
        placeholder='Email'
      />
      <TextField
        label='Input User Password'
        placeholder='Password'
      />
      <Button >Submit</Button>
    </form>
    )
  }
}

export default CSSModules(Login, styles)
