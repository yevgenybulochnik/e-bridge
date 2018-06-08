import { combineReducers } from 'redux'
import {
  NavAction,
  NAV_TOGGLE_BUTTON,
  NAV_TOGGLE,
  navToggleButton,
  navToggle
} from './actions'


function navButtons(state: any = [], action: NavAction) {
  switch (action.type) {
    case NAV_TOGGLE_BUTTON:
      return state.map((navButton: any, index: number) => {
        if (index === action.buttonId) {
          return {...navButton, isActive: !navButton.isActive}
        } else {
          return {...navButton, isActive: false}
        }
        return navButton
      })
    default:
      return state
  }
}

function isHidden(state: any = false, action: NavAction) {
  switch (action.type) {
    case NAV_TOGGLE:
      return !state
    default:
      return state
  }

}

const navFeature = combineReducers({
  isHidden,
  navButtons
})

export default navFeature
