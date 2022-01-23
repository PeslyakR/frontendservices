import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeeState } from '../types/employees/EmployeeState.interface';

interface IAppEmployeeState {
  employee: IEmployeeState;
}

export const employeeFeatureSelector =
  createFeatureSelector<IAppEmployeeState>('content');

export const validationEmployeeErrorsSelector = createSelector(
  employeeFeatureSelector,
  (contentState: IAppEmployeeState) => contentState.employee.validationErrors
);

export const gettingEmployeesSelector = createSelector(
  employeeFeatureSelector,
  (contentState: IAppEmployeeState) => contentState.employee.employees
);

export const gettingActiveEmployeeSelector = createSelector(
  employeeFeatureSelector,
  (contentState: IAppEmployeeState) => contentState.employee.activeEmployee
);
