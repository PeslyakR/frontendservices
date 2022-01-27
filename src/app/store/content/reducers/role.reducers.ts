import { Action, createReducer, on } from '@ngrx/store';
import {
  createRoleAction,
  deleteRoleAction,
  findRoleAction,
  findRolesAction,
  getRoleActionSuccess,
  getRolesActionSuccess,
  updateRoleAction,
} from '../actions/roles.actions';
import { IRolesState } from '../types/roles/RolesState.interface';

const initialState: IRolesState = {
  roles: [],
  validationErrors: undefined,
};
export const roleReducer = createReducer(
  initialState,
  on(
    findRoleAction,
    (state): IRolesState => ({
      ...state,
    })
  ),
  on(
    findRolesAction,
    (state): IRolesState => ({
      ...state,
    })
  ),
  on(
    createRoleAction,
    (state): IRolesState => ({
      ...state,
    })
  ),
  on(
    updateRoleAction,
    (state): IRolesState => ({
      ...state,
    })
  ),
  on(
    deleteRoleAction,
    (state): IRolesState => ({
      ...state,
    })
  ),
  on(
    getRoleActionSuccess,
    (state, action): IRolesState => ({
      ...state,
      activeRole: action.role,
    })
  ),
  on(
    getRolesActionSuccess,
    (state, action): IRolesState => ({
      ...state,
      roles: action.roles,
    })
  )
);
