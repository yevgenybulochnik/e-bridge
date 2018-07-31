import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./navbutton.sass')

interface INavButton {
  linkName: string;
  //isActive: boolean;
}

const NavButton: React.SFC<INavButton> = ({linkName}) => (
  <button styleName='navbutton'>
    {linkName}
  </button>
)

export default CSSModules(NavButton, styles)
