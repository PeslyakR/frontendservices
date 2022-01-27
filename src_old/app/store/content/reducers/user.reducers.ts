import { Action, createReducer, on } from '@ngrx/store';
import { getRoleActionSuccess } from '../actions/roles.actions';
import {
  createUserAction,
  deleteUserAction,
  findUserAction,
  getUserActionFailure,
  getUserActionSuccess,
  updateUserAction,
} from '../actions/users.action';
import { IUser } from '../types/users/User.interface';
import { IUserState } from '../types/users/UsersState';

const initialState: IUserState = {
  validationErrors: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(
    findUserAction,
    (state): IUserState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    createUserAction,
    (state): IUserState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    updateUserAction,
    (state): IUserState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    deleteUserAction,
    (state): IUserState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    createUserAction,
    (state): IUserState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    getUserActionSuccess,
    (state, action): IUserState => ({
      ...state,
      activeUser: action.user,
    })
  ),
  on(
    getUserActionFailure,
    (state, action): IUserState => ({
      ...state,
      validationErrors: action.errors,
    })
  )
);

// export function usersReducers(state: IUserState, action: Action) {
//   return contentReducer(state, action);
// }
