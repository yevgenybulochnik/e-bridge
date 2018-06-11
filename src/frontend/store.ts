import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './app/rootReducer'

// Necessary for redux dev tool extensions, PR in github for fix
declare module 'redux' {
  export type GenericStoreEnhancer = any
}
// https://github.com/zalmoxisus/redux-devtools-extension/issues/492

let initialState = {
  navBar: {
      isHidden: false,
      navButtons: [
        {
          id: 1,
          name: 'test button 1',
          isActive: false,
          path: '/test'
        },
        {
          id: 2,
          name: 'test button 2',
          isActive: false,
          path: '/test2'
        },
        {
          id: 3,
          name: 'test button 3',
          isActive: false,
          path: '/'
        }
      ]
  }
  } as any;

const store = createStore(appReducer, initialState, composeWithDevTools())

export default store
