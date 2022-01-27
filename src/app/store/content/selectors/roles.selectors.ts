import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const rolesFeatureSelector = createFeatureSelector<IAppState>('content');

export const selectActiveRole = createSelector(
  rolesFeatureSelector,
  (contentState: IAppState) => contentState.role.activeRole
);

export const selectAllRoles = createSelector(
  rolesFeatureSelector,
  (contentState: IAppState) => contentState.role.roles
);
