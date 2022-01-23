import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPositionState } from '../types/positions/PositionState.interface';

interface IAppPositionState {
  position: IPositionState;
}

export const positionsFeatureSelector =
  createFeatureSelector<IAppPositionState>('content');

export const selectPositionErrors = createSelector(
  positionsFeatureSelector,
  (contentState: IAppPositionState) => contentState.position.validationErrors
);

export const selectActivePosition = createSelector(
  positionsFeatureSelector,
  (contentState: IAppPositionState) => contentState.position.activePosition
);

export const selectActionPositions = createSelector(
  positionsFeatureSelector,
  (contentState: IAppPositionState) => contentState.position.positions
);
