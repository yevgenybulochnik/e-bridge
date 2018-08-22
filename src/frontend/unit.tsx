import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Designer from './app/views/designer/designer';

ReactDOM.render(
  <div style={{width: '80em', height: '41em', border: 'solid black 1px'}}>
    <Designer></Designer>
  </div>,
  document.getElementById('unit')
)
