import {
  LoginConst,
  LoginAction
} from './actions'

export function userID(state: number | string = 'unset', action: LoginAction) {
  let payload: any = action.payload
  switch (action.type) {
    case LoginConst.REQUEST:
      return 'Requesting User Information'
    case LoginConst.SUCCESS:
      return payload.userID
    case LoginConst.FAILURE:
      return payload.errorMessage
    default:
      return state
  }
}
