import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IServiceState } from '../types/services/ServicesState.interface';

interface IAppServicesState {
  service: IServiceState;
}

export const servicesFeatureSelector =
  createFeatureSelector<IAppServicesState>('content');

export const validationServiceSelector = createSelector(
  servicesFeatureSelector,
  (contentState: IAppServicesState) => contentState.service.validationErrors
);

export const selectActiveService = createSelector(
  servicesFeatureSelector,
  (contentState: IAppServicesState) => contentState.service.activeService
);

export const selectAllServices = createSelector(
  servicesFeatureSelector,
  (contentState: IAppServicesState) => contentState.service.services
);
