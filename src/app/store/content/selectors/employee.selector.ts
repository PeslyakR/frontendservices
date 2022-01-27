import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const employeeFeatureSelector =
  createFeatureSelector<IAppState>('content');

export const gettingEmployeesSelector = createSelector(
  employeeFeatureSelector,
  (contentState: IAppState) => contentState.employee.employees
);

export const gettingActiveEmployeeSelector = createSelector(
  employeeFeatureSelector,
  (contentState: IAppState) => contentState.employee.activeEmployee
);
