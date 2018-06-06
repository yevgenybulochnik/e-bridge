import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./leftnavbuttonlist.sass')

import LeftNavButton from '../leftnavbutton/leftnavbutton'

export interface ILeftNavButtonList {
  isHidden: boolean;
  navButtons: any[];
  onNavToggle: () => void;
}

const LeftNavButtonList: React.SFC<ILeftNavButtonList> = ({navButtons, isHidden, onNavToggle}) => (
  <div styleName={isHidden? 'hidden' : 'visible'}>
    <div styleName='spacer'>
      <button styleName='toggle' onClick={() => onNavToggle()} >>>></button>
    </div>
    {navButtons.map((button, index) => (
      <LeftNavButton key={index} {...button} />
    ))}
  </div>
)

export default CSSModules(LeftNavButtonList, styles)
