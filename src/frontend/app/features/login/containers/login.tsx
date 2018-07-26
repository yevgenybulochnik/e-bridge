import { connect } from 'react-redux'
import { loginRequest } from '../data/actions'
import LoginComponent from '../smart/loginComponent'

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

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent)

export default Login
