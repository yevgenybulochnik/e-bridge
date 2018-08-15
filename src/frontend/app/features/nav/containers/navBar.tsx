import { connect } from 'react-redux';
import NavComponent from '../smart/navComponent'; 

const mapStateToProps = (state: any) => ({
  userID: state.userID
})

const NavBar = connect(
  mapStateToProps,
)(NavComponent)

export default NavBar
