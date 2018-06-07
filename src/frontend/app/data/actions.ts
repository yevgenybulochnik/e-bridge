export const NAV_TOGGLE_BUTTON = 'NAV_TOGGLE_BUTTON'

interface navToggleButtonAction {
  type: 'NAV_TOGGLE_BUTTON';
  buttonId: number;
}

export function navToggleButton(id: number): navToggleButtonAction {
  return {type: NAV_TOGGLE_BUTTON, buttonId: id}
}

export type NavAction = navToggleButtonAction
