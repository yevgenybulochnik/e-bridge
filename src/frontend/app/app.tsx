import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./app.sass')

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
    <div styleName='app-container'>
      <LeftButtonList  {...test_properties}/>
    </div>
  )
}

export default CSSModules(App, styles)
