import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension';

import App from './app/app'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
