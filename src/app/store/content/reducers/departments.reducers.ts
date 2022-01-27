import { Action, createReducer, on } from '@ngrx/store';
import {
  createDepAction,
  findDepAction,
  findDepsAction,
  getDepsActionSuccess,
  getDepActionSuccess,
  updateDepAction,
  deleteDepAction,
  deleteDepartmentActionSuccess,
} from '../actions/departments.actions';
import { IAppState } from '../types/AppState.interface';
import { IDepartmentsState } from '../types/departments/DepartmentsState.interface';
import { IBackendErrors } from '../types/errors/BackendErrors.interface';

export const initialState: IDepartmentsState = {
  departments: [],
};

export const departmentReducer = createReducer(
  initialState,
  on(
    findDepAction,
    (state): IDepartmentsState => ({
      ...state,
    })
  ),
  on(
    findDepsAction,
    (state): IDepartmentsState => ({
      ...state,
    })
  ),
  on(
    createDepAction,
    (state): IDepartmentsState => ({
      ...state,
    })
  ),

  on(
    updateDepAction,
    (state): IDepartmentsState => ({
      ...state,
    })
  ),
  on(
    deleteDepAction,
    (state): IDepartmentsState => ({
      ...state,
    })
  ),

  on(
    getDepsActionSuccess,
    (state, action): IDepartmentsState => ({
      ...state,
      departments: action.departments,
    })
  ),
  on(
    getDepActionSuccess,
    (state, action): IDepartmentsState => ({
      ...state,
      activeDepartment: action.department,
    })
  ),

  on(
    deleteDepartmentActionSuccess,
    (state, action): IDepartmentsState => ({
      ...state,
      deletedDepartment: action.deleted,
    })
  )
);
