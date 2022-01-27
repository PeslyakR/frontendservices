import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const depsFeatureSelector = createFeatureSelector<IAppState>('content');

export const gettingDepartmentsSelector = createSelector(
  depsFeatureSelector,
  (contentState: IAppState) => contentState.department.departments
);

export const gettingActiveDepartmentSelector = createSelector(
  depsFeatureSelector,
  (contentState: IAppState) => contentState.department.activeDepartment
);
