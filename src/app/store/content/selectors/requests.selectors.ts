import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const requestsFeatureSelector =
  createFeatureSelector<IAppState>('content');

export const selectRequest = createSelector(
  requestsFeatureSelector,
  (contentState: IAppState) => contentState.request.activeRequest
);

export const selectAllRequests = createSelector(
  requestsFeatureSelector,
  (contentState: IAppState) => contentState.request.requests
);
