import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDepartmentsState } from '../types/departments/DepartmentsState.interface';

interface IAppDepartmentsState {
  department: IDepartmentsState;
}

export const depsFeatureSelector =
  createFeatureSelector<IAppDepartmentsState>('content');

export const validationDepsErrorsSelector = createSelector(
  depsFeatureSelector,
  (contentState: IAppDepartmentsState) =>
    contentState.department.validationErrors
);

export const gettingDepartmentsSelector = createSelector(
  depsFeatureSelector,
  (contentState: IAppDepartmentsState) => contentState.department.departments
);

export const gettingActiveDepartmentSelector = createSelector(
  depsFeatureSelector,
  (contentState: IAppDepartmentsState) =>
    contentState.department.activeDepartment
);
