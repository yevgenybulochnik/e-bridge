import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import request from '@frontend/app/axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
const styles = require('./login.sass')

interface LoginState {
  isLoading: boolean;
  email: string;
  password: string;
  [key: string]: any;
}

class Login extends React.Component<any, LoginState> {
  state: LoginState = {
    isLoading: false,
    email: '',
    password: ''
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
      console.log(err.response.data.message)
    })
  }

  render() {
    const { handleChange, handleClick } = this
    const { isLoading, email, password } = this.state

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
      <Button disabled={isLoading} onClick={handleClick} >Submit</Button>
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
