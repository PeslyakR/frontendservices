import { createReducer, on, Action } from '@ngrx/store';
import {
  findEmployeeAction,
  findEmployeesAction,
  createEmployeeAction,
  updateEmployeeAction,
  deleteEmployeeAction,
  getEmployeeActionSuccess,
  getEmployeesActionSuccess,
  getEmployeeActionFailure,
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
      //validationErrors: undefined,
    })
  ),
  on(
    findEmployeesAction,
    (state): IEmployeeState => ({
      ...state,
      // validationErrors: undefined,
    })
  ),
  on(
    createEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
      // validationErrors: undefined,
    })
  ),
  on(
    updateEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
      //validationErrors: undefined,
    })
  ),
  on(
    deleteEmployeeAction,
    (state): IEmployeeState => ({
      ...state,
      // validationErrors: undefined,
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
    getEmployeeActionFailure,
    (state, action): IEmployeeState => ({
      ...state,
      validationErrors: action.errors,
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

// export function employeesReducers(state: IEmployeeState, action: Action) {
//   return contentReducer(state, action);
// }
