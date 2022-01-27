import { Action, createReducer, on } from '@ngrx/store';
import {
  createRoleAction,
  deleteRoleAction,
  findRoleAction,
  findRolesAction,
  getRoleActionSuccess,
  getRolesActionFailure,
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
      validationErrors: undefined,
    })
  ),
  on(
    findRolesAction,
    (state): IRolesState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    createRoleAction,
    (state): IRolesState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    updateRoleAction,
    (state): IRolesState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    deleteRoleAction,
    (state): IRolesState => ({
      ...state,
      validationErrors: undefined,
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
  ),
  on(
    getRolesActionFailure,
    (state, action): IRolesState => ({
      ...state,
      validationErrors: action.errors,
    })
  )
);

// export function rolesReducers(state: IRolesState, action: Action) {
//   return contentReducer(state, action);
// }
