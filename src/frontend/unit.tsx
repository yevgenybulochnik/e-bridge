import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NavBar from './app/features/nav/smart/navbar'

ReactDOM.render(
  <div style={{width: '80em', height: '41em', border: 'solid black 1px'}}>
    <NavBar>
      <div>test</div>
    </NavBar>
  </div>,
  document.getElementById('unit')
)
