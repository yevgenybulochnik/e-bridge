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
      {linkName: 'Designer', isActive: false, path: '/designer'},
      {linkName: 'Dashboard', isActive: false, path: '/dashboard'},
      {linkName: 'Analytics', isActive: false, path: '/analytics'},
      {linkName: 'Register', isActive: false, path: '/register'}
    ]
  }

  renderNavButtons = () => {
    const { handleButtonClick } = this
    const { navLinks } = this.state
    return navLinks.map((button: any, index: number) => {
      return (
        <NavButton
          key={index}
          {...button}
          onButtonClick={() => handleButtonClick(index)}
        />
      )
    })
  }

  handleNavToggle = () => {
    const { navIsHidden } = this.state
    this.setState({
      navIsHidden: !navIsHidden
    })
  }

  handleButtonClick = (buttonIndex: number) => {
    const { navLinks } = this.state
    const newLinkState = navLinks.map((button: any, index: number) => {
      if(buttonIndex === index) {
        button.isActive = true
      } else {
        button.isActive = false
      }
      return button
    })
    this.setState({navLinks: newLinkState})
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
