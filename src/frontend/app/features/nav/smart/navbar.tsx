import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./navbar.sass')

import NavButton from '../presentational/navbutton'

interface INavState {
  navIsHidden: boolean;
  navLinks: any;
}

interface INavProps {

}

class NavBar extends React.Component<INavProps, INavState> {
  state: INavState = {
    navIsHidden: false,
    navLinks: [
      {linkName: 'Designer', isActive: false},
      {linkName: 'Dashboard', isActive: false},
      {linkName: 'Analytics', isActive: false},
      {linkName: 'Register', isActive: true}
    ]
  }

  renderNavButtons = () => {
    const { navLinks } = this.state
    return navLinks.map((button: any, index: number) => {
      return <NavButton key={index} linkName={button.linkName} isActive={button.isActive}/>
    })
  }

  handleNavToggle = () => {
    const { navIsHidden } = this.state
    this.setState({
      navIsHidden: !navIsHidden
    })
  }

  render() {
    const { handleNavToggle, renderNavButtons } = this
    const { navIsHidden, navLinks } = this.state

    return (
      <div styleName='nav-container'>
        <div styleName={navIsHidden? 'nav-hidden' : 'nav'}>
          <div styleName='toggle-container'>
            <button styleName={navIsHidden? 'toggle-active' : 'toggle-inactive'} onClick={handleNavToggle}></button>
          </div>
          <div styleName='button-container'>
            {renderNavButtons()}
          </div>
        </div>
        <div styleName='content-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CSSModules(NavBar, styles)
