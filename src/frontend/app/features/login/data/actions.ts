import request from '../../../axios'
// Generic Action
export interface IActionGeneric<C, P> {
  type: C;
  payload?: P;
}
// End Generic

export enum LoginConst {
  REQUEST = 'LOGIN_REQUEST',
  SUCCESS = 'LOGIN_SUCCESS',
  FAILURE = 'LOGIN_FAILURE'
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ISucessPayload {
  userID: any;
}

export interface IFailurePayload {
  errorMessage: string;
}

export type LoginAction = IActionGeneric<LoginConst, ISucessPayload | IFailurePayload | ILoginPayload>

export function loginRequest(userEmail: string, userPassword: string): LoginAction {
  return {
    type: LoginConst.REQUEST,
    payload: {
      email: userEmail,
      password: userPassword,
    }
  }
}

export function loginSuccess(id: number): LoginAction {
  return {
    type: LoginConst.SUCCESS,
    payload: {
      userID: id
    }
  }
}

export function loginFailure(message: any): LoginAction {
  return {
    type: LoginConst.FAILURE,
    payload: {
      errorMessage: message
    }
  }
}
