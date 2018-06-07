import { connect } from 'react-redux'
import LeftNavButtonList from '../../components/leftnavbuttonlist/leftnavbuttonlist'

const mapStateToProps = (state: any) => ({
  navButtons: state.navBar.navButtons,
  isHidden: state.isHidden,
  onNavToggle: state.onNavToggle
})

const LeftNav = connect(
  mapStateToProps
)(LeftNavButtonList)

export default LeftNav
