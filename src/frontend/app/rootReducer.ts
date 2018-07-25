import { combineReducers } from 'redux';
import { userID } from './features/login/data/reducers'

const appReducer = combineReducers({
  userID
})
export default appReducer
