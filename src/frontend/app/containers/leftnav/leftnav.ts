import { connect } from 'react-redux'
import { navToggleButton, navToggle } from '../../data/actions'
import LeftNavButtonList from '../../components/leftnavbuttonlist/leftnavbuttonlist'

const mapStateToProps = (state: any) => ({
  navButtons: state.navBar.navButtons,
  isHidden: state.navBar.isHidden,
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    onButtonClick: (id: number) => {
      dispatch(navToggleButton(id))
    },
    onNavToggle: () => {
      dispatch(navToggle())
    }
  }
}

const LeftNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavButtonList)

export default LeftNav
