import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom';
const styles = require('./leftnavbutton.sass')

export interface ILeftNavButtonProps {
  name: string
  isActive: boolean
  onClick: () => void
  path: string
}

const LeftNavButton: React.SFC<ILeftNavButtonProps> = ({name, isActive, onClick, path}) => (
  <Link to={path}>
    <button
      styleName={isActive? 'active' : 'inactive'}
      onClick={onClick}
    >
      {name}
    </button>
  </Link>
)

export default CSSModules(LeftNavButton, styles)
