import { Action, createReducer, on } from '@ngrx/store';
import {
  authAction,
  authFailureAction,
  authSuccessAction,
} from '../actions/auth.actions';

import { IAuthState } from '../types/AuthState.unterface';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoggedIn: false,
  validationErrors: null,
  currentUser: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    authAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    authSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    authFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

// export function authReducers(state: IAuthState, action: Action) {
//   console.log('auth redusers: ', state, '  ++  ', action);

//   return authReducer(state, action);
// }
