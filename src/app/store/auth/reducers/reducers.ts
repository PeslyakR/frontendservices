import { createReducer, on } from '@ngrx/store';
import {
  authAction,
  authFailureAction,
  authSuccessAction,
} from '../actions/auth.actions';

import { IAuthState } from '../types/AuthState.unterface';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoggedIn: false, // false,
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
