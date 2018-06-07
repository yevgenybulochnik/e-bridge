import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './app/rootReducer'

// Necessary for redux dev tool extensions, PR in github for fix
declare module 'redux' {
  export type GenericStoreEnhancer = any
}
// https://github.com/zalmoxisus/redux-devtools-extension/issues/492

let navClickSpy = () => console.log('navClick');
let clickSpy = () => console.log('buttonClick')
let initialState = {
  navBar: {
      isHidden: false,
      onNavToggle: navClickSpy,
      navButtons: [
        {
          name: 'test button 1',
          isActive: false,
          onClick: clickSpy
        },
        {
          name: 'test button 1',
          isActive: true,
          onClick: clickSpy
        },
        {
          name: 'test button 1',
          isActive: false,
          onClick: clickSpy
        }
      ]
  }
  } as any;

const store = createStore(appReducer, initialState, composeWithDevTools())

export default store
