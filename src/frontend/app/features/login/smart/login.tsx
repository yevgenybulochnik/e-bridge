import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import request from '@frontend/app/axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
const styles = require('./login.sass')

interface LoginState {
  isLoading: boolean;
  email: string;
  password: string;
  errorMessage: string;
  tipIsOpen: boolean;
  [key: string]: any;
}

class Login extends React.Component<any, LoginState> {
  state: LoginState = {
    isLoading: false,
    email: '',
    password: '',
    errorMessage: '',
    tipIsOpen: false
  }

  handleChange = (property: any, event: any) => {
    this.setState({
      [property]: event.target.value
    })
  }

  handleClick = () => {
    this.setState({isLoading: !this.state.isLoading})
    request.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      this.setState({
        isLoading: !this.state.isLoading,
        tipIsOpen: !this.state.tipIsOpen
      })
      const { message } = err.response.data
      if (typeof(message) == 'string') {
        this.setState({
          errorMessage: message
        })
      } else {
        this.setState({
          errorMessage: 'Opps! something went wrong'
        })
      }
    })
  }

  handleTooltipClose = () => {
    this.setState({
      tipIsOpen: false
    })
  }

  render() {
    const { handleChange, handleClick, handleTooltipClose } = this
    const { isLoading, email, password, errorMessage, tipIsOpen } = this.state

    return (
    <form styleName='login-container' action="">
      <div styleName='label'>E-Bridge Login</div>
      <TextField
        label='Input User Email'
        placeholder='Email'
        value={email}
        onChange={(e) => handleChange('email', e)}
      />
      <TextField
        type='password'
        label='Input User Password'
        placeholder='Password'
        value={password}
        onChange={(e) => handleChange('password', e)}
      />
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            title={errorMessage}
            open={tipIsOpen}
            disableFocusListener
            disableHoverListener
            disableTouchListener
          >
            <Button fullWidth={true} disabled={isLoading} onClick={handleClick} >Submit</Button>
          </Tooltip>
        </div>
      </ClickAwayListener>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <div styleName='progress-holder'></div>
      )}
    </form>
    )
  }
}

export default CSSModules(Login, styles)
