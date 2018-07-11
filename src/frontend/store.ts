import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './app/rootReducer'

// Necessary for redux dev tool extensions, PR in github for fix
declare module 'redux' {
  export type GenericStoreEnhancer = any
}
// https://github.com/zalmoxisus/redux-devtools-extension/issues/492

const store = createStore(appReducer, composeWithDevTools())

export default store
