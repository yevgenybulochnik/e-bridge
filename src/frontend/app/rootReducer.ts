import { combineReducers } from 'redux';
import navFeature from './data/reducers';

const appReducer = combineReducers({
  navBar: navFeature
})
export default appReducer
