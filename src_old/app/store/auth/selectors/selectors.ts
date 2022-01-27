import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../types/AuthState.unterface';

interface IAppAuthenticationState {
  auth: IAuthState;
}

export const authFeatureSelector =
  createFeatureSelector<IAppAuthenticationState>('content');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAppAuthenticationState) => authState.auth.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAppAuthenticationState) => authState.auth.validationErrors
);

export const isAuthorized = createSelector(
  authFeatureSelector,
  (authState: IAppAuthenticationState) => authState.auth.isLoggedIn
);

export const getCurrentUser = createSelector(
  authFeatureSelector,
  (authState: IAppAuthenticationState) => authState.auth.currentUser
);
