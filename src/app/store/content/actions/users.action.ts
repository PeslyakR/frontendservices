import { createAction, props } from '@ngrx/store';
import { IUser } from '../types/users/User.interface';
import { EUsersActionTypes } from '../types/users/UsersActionTypes.enum';

export const findUserAction = createAction(
  EUsersActionTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const createUserAction = createAction(
  EUsersActionTypes.CREATE,
  props<{ user: IUser }>()
);

export const updateUserAction = createAction(
  EUsersActionTypes.UPDATE,
  props<{ user: IUser }>()
);

export const deleteUserAction = createAction(
  EUsersActionTypes.DELETE,
  props<{ id: number }>()
);

export const getUserActionSuccess = createAction(
  EUsersActionTypes.SUCCESS_GET_ONE,
  props<{ user: IUser }>()
);

export const deleteUserActionSuccess = createAction(
  EUsersActionTypes.SUCCESS_DELETE,
  props<{ deleted: boolean }>()
);
