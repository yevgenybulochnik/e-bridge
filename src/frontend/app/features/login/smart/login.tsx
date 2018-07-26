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

interface LoginProps {
  loginHandler: (email: string, password: string) => void;
  userIDState: any
}

class Login extends React.Component<LoginProps, LoginState> {
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
    const { loginHandler } = this.props
    const { email, password } = this.state
    loginHandler(email, password)
  }

  handleTooltipClose = () => {
    this.setState({
      tipIsOpen: false
    })
  }

  componentDidUpdate(prevProps: LoginProps, prevState: LoginState) {
    const { userIDState } = this.props
    if (prevProps.userIDState !== userIDState) {
      if (userIDState === 'Requesting User Information') {
        this.setState({isLoading: true})
      } else if( typeof(userIDState) === 'string') {
        this.setState({
          isLoading: false,
          errorMessage: userIDState,
          tipIsOpen: true,
          email: '',
          password: ''
        })
      }
    }
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

let styledComp = CSSModules(Login, styles)

import { connect } from 'react-redux'
import { loginRequest } from '../data/actions'
const mapStateToProps = (state: any) => ({
  userIDState: state.userID
})
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginHandler: (email: string, password: string) => {
      dispatch(loginRequest(email, password))
    }
  }
}

export const LoginTest = connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComp)
