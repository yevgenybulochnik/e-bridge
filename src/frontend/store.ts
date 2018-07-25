import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './app/rootReducer'
import rootSaga from './app/rootSaga'


const sagaMiddleware = createSagaMiddleware()

// Necessary for redux dev tool extensions, PR in github for fix
declare module 'redux' {
  export type GenericStoreEnhancer = any
}
// https://github.com/zalmoxisus/redux-devtools-extension/issues/492

const store = createStore(appReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

const unsub = store.subscribe(() => console.log(store.getState()))

export default store
