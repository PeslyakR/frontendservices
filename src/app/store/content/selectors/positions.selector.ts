import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../types/AppState.interface';

export const positionsFeatureSelector =
  createFeatureSelector<IAppState>('content');

export const selectPositionErrors = createSelector(
  positionsFeatureSelector,
  (contentState: IAppState) => contentState.position.validationErrors
);

export const selectActivePosition = createSelector(
  positionsFeatureSelector,
  (contentState: IAppState) => contentState.position.activePosition
);

export const selectActionPositions = createSelector(
  positionsFeatureSelector,
  (contentState: IAppState) => contentState.position.positions
);
