import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginAction, LoginConst, loginSuccess, loginFailure, ILoginPayload } from './actions'
import request from '@frontend/app/axios'

function login(email: string, password: string) {
  return request.post('/auth/login', {
    email: email,
    password: password
  })
  .then(res => {return res.data})
  .catch(err => {return err})
}

function* loginWorker(action: LoginAction) {
  const { email, password } = action.payload as ILoginPayload
  const response = yield call(login, email, password)
  const { id, message } = response
  if (id) {
    yield put(loginSuccess(id))
  } else {
    yield put(loginFailure(message))
  }
}

function* watchLogin() {
  yield takeEvery(LoginConst.REQUEST, loginWorker)
}

export function* loginSaga() {
  yield all([
    watchLogin()
  ])
}
