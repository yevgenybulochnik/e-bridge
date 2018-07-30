import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./navbar.sass')

interface INavState {
  navIsHidden: boolean
}

interface INavProps {

}

class NavBar extends React.Component<INavProps, INavState> {
  state: INavState = {
    navIsHidden: false
  }

  handleNavToggle = () => {
    const { navIsHidden } = this.state
    this.setState({
      navIsHidden: !navIsHidden
    })
  }

  render() {
    const { handleNavToggle } = this
    const { navIsHidden } = this.state
    return (
      <div styleName='nav-container'>
        <div styleName={navIsHidden? 'nav-hidden' : 'nav'}>
          <div styleName='toggle-container'>
            <button styleName={navIsHidden? 'toggle-active' : 'toggle-inactive'} onClick={handleNavToggle}></button>
          </div>
          <div styleName='button-container'>
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
