export const NAV_TOGGLE_BUTTON = 'NAV_TOGGLE_BUTTON'
export const NAV_TOGGLE = 'NAV_TOGGLE'

interface navToggleButtonAction {
  type: 'NAV_TOGGLE_BUTTON';
  buttonId: number;
}

export function navToggleButton(id: number): navToggleButtonAction {
  return {type: NAV_TOGGLE_BUTTON, buttonId: id}
}

interface navToggleAction {
  type: 'NAV_TOGGLE';
}

export function navToggle(): navToggleAction {
  return { type: NAV_TOGGLE }
}

export type NavAction = navToggleButtonAction | navToggleAction
