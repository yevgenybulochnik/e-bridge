import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
const styles = require('./navbutton.sass')

interface INavButton {
  linkName: string;
  isActive: boolean;
  path: string;
  onButtonClick: () => void;
}

const NavButton: React.SFC<INavButton> = ({linkName, isActive, path, onButtonClick}) => (
  <Link to={path}>
    <button
      styleName={isActive? 'navbutton-active' : 'navbutton'}
      onClick={onButtonClick}
    >
    {linkName}
    </button>
  </Link>
)

export default CSSModules(NavButton, styles)
