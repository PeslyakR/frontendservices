import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRequestsState } from '../types/requests/RequestsState.interface';

interface IAppRequestsState {
  request: IRequestsState;
}

export const requestsFeatureSelector =
  createFeatureSelector<IAppRequestsState>('content');

export const selectRequestsErrors = createSelector(
  requestsFeatureSelector,
  (contentState: IAppRequestsState) => contentState.request.validationErrors
);

export const selectRequest = createSelector(
  requestsFeatureSelector,
  (contentState: IAppRequestsState) => contentState.request.activeRequest
);

export const selectAllRequests = createSelector(
  requestsFeatureSelector,
  (contentState: IAppRequestsState) => contentState.request.requests
);
