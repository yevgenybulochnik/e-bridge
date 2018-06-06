import * as React from 'react';

import LeftButtonList from './components/leftnavbuttonlist/leftnavbuttonlist'

  let navClickSpy = () => console.log('navClick');
  let clickSpy = () => console.log('buttonClick')
  let test_properties = {
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
    };

const App: React.SFC = () => {
  return (
    <div style={{height: '100%'}}>
      <LeftButtonList  {...test_properties}/>
    </div>
  )
}

export default App
