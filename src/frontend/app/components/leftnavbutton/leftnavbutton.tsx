import * as React from 'react'
import * as CSSModules from 'react-css-modules'
const styles = require('./leftnavbutton.sass')

export interface ILeftNavButtonProps {
  name: string
  isActive: boolean
  onClick: () => void
}

const LeftNavButton: React.SFC<ILeftNavButtonProps> = ({name, isActive, onClick}) => (
  <button
    styleName={isActive? 'active' : 'inactive'}
    onClick={onClick}
  >
    {name}
  </button>
)

export default CSSModules(LeftNavButton, styles)
