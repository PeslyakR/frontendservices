import { Action, createReducer, on } from '@ngrx/store';
import {
  createPositionAction,
  deletePositionActionSuccess,
  deletePositionAction,
  findPositionAction,
  findPositionsAction,
  getPositionActionSuccess,
  getPositionsActionSuccess,
  updatePositionAction,
} from '../actions/positions.action';
import { IPositionState } from '../types/positions/PositionState.interface';

const initialState: IPositionState = {
  positions: [],
  activePosition: undefined,
  deletedPosition: undefined,
  validationErrors: undefined,
};

export const positionReducer = createReducer(
  initialState,
  on(
    findPositionsAction,
    (state): IPositionState => ({
      ...state,
    })
  ),
  on(
    findPositionAction,
    (state): IPositionState => ({
      ...state,
    })
  ),
  on(
    createPositionAction,
    (state): IPositionState => ({
      ...state,
    })
  ),
  on(
    updatePositionAction,
    (state): IPositionState => ({
      ...state,
    })
  ),
  on(
    deletePositionAction,
    (state): IPositionState => ({
      ...state,
    })
  ),
  on(
    getPositionActionSuccess,
    (state, action): IPositionState => ({
      ...state,
      activePosition: action.position,
    })
  ),
  on(
    getPositionsActionSuccess,
    (state, action): IPositionState => ({
      ...state,
      positions: action.positions,
    })
  ),
  on(
    deletePositionActionSuccess,
    (state, action): IPositionState => ({
      ...state,
      deletedPosition: action.deleted,
    })
  )
);

// export function positionsReducers(state: IPositionState, action: Action) {
//   console.log('positionReducers');

//   return contentReducer(state, action);
// }
