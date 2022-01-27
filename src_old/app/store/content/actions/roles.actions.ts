import { createAction, props } from '@ngrx/store';
import { IBackendErrors } from '../../sharedtypes/BackendErrors.interface';
import { IRole } from '../types/roles/Role.interface';
import { ERolesActiveTypes } from '../types/roles/RolesActionTypes.enum';

export const findRolesAction = createAction(
  ERolesActiveTypes.FINDALL,
  props<{ idService: number }>()
);

export const findRoleAction = createAction(
  ERolesActiveTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const createRoleAction = createAction(
  ERolesActiveTypes.CREATE,
  props<{ role: IRole }>()
);

export const updateRoleAction = createAction(
  ERolesActiveTypes.UPDATE,
  props<{ role: IRole }>()
);

export const deleteRoleAction = createAction(
  ERolesActiveTypes.DELETE,
  props<{ id: number }>()
);

export const getRolesActionSuccess = createAction(
  ERolesActiveTypes.SUCCESS_GET_MANY,
  props<{ roles: IRole[] }>()
);

export const getRoleActionSuccess = createAction(
  ERolesActiveTypes.SUCCESS_GET_ONE,
  props<{ role: IRole }>()
);

export const getRolesActionFailure = createAction(
  ERolesActiveTypes.ERROR,
  props<{ errors: string[] }>()
);

export const deleteRoleActionSuccess = createAction(
  ERolesActiveTypes.ERROR,
  props<{ deleted: boolean }>()
);
