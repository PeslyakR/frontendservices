import { createReducer, on } from '@ngrx/store';
import {
  createUserAction,
  deleteUserAction,
  findUserAction,
  getUserActionSuccess,
  updateUserAction,
} from '../actions/users.action';
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
    })
  ),
  on(
    createUserAction,
    (state): IUserState => ({
      ...state,
    })
  ),
  on(
    updateUserAction,
    (state): IUserState => ({
      ...state,
    })
  ),
  on(
    deleteUserAction,
    (state): IUserState => ({
      ...state,
    })
  ),

  on(
    getUserActionSuccess,
    (state, action): IUserState => ({
      ...state,
      activeUser: action.user,
    })
  )
);
