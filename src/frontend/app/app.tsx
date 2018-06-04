import * as React from 'react';

import LeftNavButton from './components/leftnavbutton/leftnavbutton'

const App: React.SFC = () => {
  return (
    <div>
      <LeftNavButton name='test button' isActive={false} onClick={() => console.log('hello')} />
      <LeftNavButton name='test button 2' isActive={true} onClick={() => console.log('hello')} />
    </div>
  )
}

export default App
