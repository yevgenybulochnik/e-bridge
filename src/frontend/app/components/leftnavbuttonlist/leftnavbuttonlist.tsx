import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./leftnavbuttonlist.sass')

import LeftNavButton from '../leftnavbutton/leftnavbutton'

export interface ILeftNavButtonList {
  isHidden: boolean;
  navButtons: any[];
  onNavToggle: () => void;
  onButtonClick: (id: number) => void;
}

const LeftNavButtonList: React.SFC<ILeftNavButtonList> = ({navButtons, isHidden, onNavToggle, onButtonClick}) => (
  <div styleName={isHidden? 'hidden' : 'visible'}>
    <div styleName='spacer'>
      <button styleName='toggle' onClick={() => onNavToggle()} >>>></button>
    </div>
    <div styleName='button-container'>
      {navButtons.map((button, index) => (
        <LeftNavButton key={button.id} {...button} onClick={() => onButtonClick(index)}/>
      ))}
    </div>
  </div>
)

export default CSSModules(LeftNavButtonList, styles)
