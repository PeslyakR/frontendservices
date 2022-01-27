import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const servicesFeatureSelector =
  createFeatureSelector<IAppState>('content');

export const validationServiceSelector = createSelector(
  servicesFeatureSelector,
  (contentState: IAppState) => contentState.service.validationErrors
);

export const selectActiveService = createSelector(
  servicesFeatureSelector,
  (contentState: IAppState) => contentState.service.activeService
);

export const selectAllServices = createSelector(
  servicesFeatureSelector,
  (contentState: IAppState) => contentState.service.services
);
