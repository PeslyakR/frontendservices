import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRolesState } from '../types/roles/RolesState.interface';

interface IAppRolesState {
  role: IRolesState;
}

export const rolesFeatureSelector =
  createFeatureSelector<IAppRolesState>('content');

export const validationRoleSelector = createSelector(
  rolesFeatureSelector,
  (contentState: IAppRolesState) => contentState.role.validationErrors
);

export const selectActiveRole = createSelector(
  rolesFeatureSelector,
  (contentState: IAppRolesState) => contentState.role.activeRole
);

export const selectAllRoles = createSelector(
  rolesFeatureSelector,
  (contentState: IAppRolesState) => contentState.role.roles
);
