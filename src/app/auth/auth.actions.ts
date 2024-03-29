import { Action } from '@ngrx/store';
export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';

export class SetAuthenticated implements Action {
  type: string = SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
  type: string = SET_UNAUTHENTICATED;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated;
