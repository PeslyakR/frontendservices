import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const errorFeatureSelector = createFeatureSelector<IAppState>('content');

export const selectBackendErrors = createSelector(
  errorFeatureSelector,
  (contentState: IAppState) => contentState.errors.validationErrors
);
