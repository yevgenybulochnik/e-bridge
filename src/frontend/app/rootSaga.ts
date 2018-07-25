import { all } from 'redux-saga/effects'

import { loginSaga } from './features/login/data/loginSaga'

export default function* rootSaga() {
  yield all([
    loginSaga(),
  ])
}
