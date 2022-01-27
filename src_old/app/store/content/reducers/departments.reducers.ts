import { Action, createReducer, on } from '@ngrx/store';
import {
  createDepAction,
  findDepAction,
  findDepsAction,
  getDepsActionSuccess,
  getDepActionSuccess,
  getDepActionFailure,
  updateDepAction,
  deleteDepAction,
  deleteDepartmentActionSuccess,
} from '../actions/departments.actions';
import { IDepartmentsState } from '../types/departments/DepartmentsState.interface';

export const initialState: IDepartmentsState = {
  departments: [],
  validationErrors: undefined,
};

export const departmentReducer = createReducer(
  initialState,
  on(
    findDepAction,
    (state): IDepartmentsState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    findDepsAction,
    (state): IDepartmentsState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    createDepAction,
    (state): IDepartmentsState => ({
      ...state,
      validationErrors: undefined,
    })
  ),

  on(
    updateDepAction,
    (state): IDepartmentsState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    deleteDepAction,
    (state): IDepartmentsState => ({
      ...state,
      validationErrors: undefined,
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
    getDepActionFailure,
    (state, action): IDepartmentsState => ({
      ...state,
      validationErrors: action.errors,
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

// export function departmentsReducers(state: IDepartmentsState, action: Action) {
//   console.log('departmentsReducers : ', state, '  ++  ', action);

//   return contentReducer(state, action);
// }
