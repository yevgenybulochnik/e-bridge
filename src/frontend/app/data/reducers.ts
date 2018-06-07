import { combineReducers } from 'redux'
import {
  NavAction,
  NAV_TOGGLE_BUTTON,
  navToggleButton
} from './actions'


function navButtons(state: any = [], action: NavAction) {
  switch (action.type) {
    case NAV_TOGGLE_BUTTON:
      return state.map((navButton: any, index: number) => {
        if (index === action.buttonId) {
          return {...navButton, isActive: !navButton.isActive}
        }
        return navButton
      })
    default:
      return state
  }
}

const navFeature = combineReducers({
  navButtons
})

export default navFeature
