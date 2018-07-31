import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./navbutton.sass')

interface INavButton {
  linkName: string;
  isActive: boolean;
  onButtonClick: () => void;
}

const NavButton: React.SFC<INavButton> = ({linkName, isActive, onButtonClick}) => (
  <button
    styleName={isActive? 'navbutton-active' : 'navbutton'}
    onClick={onButtonClick}
  >
    {linkName}
  </button>
)

export default CSSModules(NavButton, styles)
