import { createAction, props } from '@ngrx/store';
import { EPositionsActionTypes } from '../types/positions/PositionsActionTypes.enum';
import { IPosition } from '../types/positions/Position.interface';

export const findPositionsAction = createAction(
  EPositionsActionTypes.FIND_ALL,
  props<{ idDep: number }>()
);

export const findPositionAction = createAction(
  EPositionsActionTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const createPositionAction = createAction(
  EPositionsActionTypes.CREATE,
  props<{ position: IPosition }>()
);

export const updatePositionAction = createAction(
  EPositionsActionTypes.UPDATE,
  props<{ position: IPosition }>()
);

export const deletePositionAction = createAction(
  EPositionsActionTypes.DELETE,
  props<{ id: number }>()
);
/////

export const getPositionActionSuccess = createAction(
  EPositionsActionTypes.SUCCESS_GET_ONE,
  props<{ position: IPosition }>()
);

export const getPositionsActionSuccess = createAction(
  EPositionsActionTypes.SUCCESS_GET_MANY,
  props<{ positions: IPosition[] }>()
);

export const getPostitionsActionFailure = createAction(
  EPositionsActionTypes.ERROR,
  props<{ errors: string[] }>()
);

export const deletePositionActionSuccess = createAction(
  EPositionsActionTypes.SUCCESS_DELETE,
  props<{ deleted: boolean }>()
);
