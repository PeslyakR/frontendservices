import { createReducer, on, Action } from '@ngrx/store';
import {
  findEmployeeAction,
  findEmployeesAction,
  createEmployeeAction,
  updateEmployeeAction,
  deleteEmployeeAction,
  getEmployeeActionSuccess,
  getEmployeesActionSuccess,
  deleteEmployeeActionSuccess,
} from '../actions/employees.action';
import { IEmployeeState } from '../types/employees/EmployeeState.interface';

const initialState: IEmployeeState = {
  employees: [],
  validationErrors: undefined,
};

export const employeeReducer = createReducer(
  initialState,
  on(
    findEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
    })
  ),
  on(
    findEmployeesAction,
    (state): IEmployeeState => ({
      ...state,
    })
  ),
  on(
    createEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
    })
  ),
  on(
    updateEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
    })
  ),
  on(
    deleteEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
    })
  ),
  on(
    getEmployeeActionSuccess,
    (state, action): IEmployeeState => ({
      ...state,
      activeEmployee: action.employee,
    })
  ),
  on(
    getEmployeesActionSuccess,
    (state, action): IEmployeeState => ({
      ...state,
      employees: action.employees,
    })
  ),

  on(
    deleteEmployeeActionSuccess,
    (state, action): IEmployeeState => ({
      ...state,
      deletedEmployee: action.deleted,
    })
  )
);
