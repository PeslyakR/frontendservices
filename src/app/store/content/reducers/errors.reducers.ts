import { createReducer, on } from '@ngrx/store';
import {
  releaseBackendErrors,
  getBackendErrors,
} from '../actions/errors.action';
import { IBackendErrorsState } from '../types/errors/BackendErrorState.interface';

export const initialState: IBackendErrorsState = {
  validationErrors: undefined,
};

export const errorsReducer = createReducer(
  initialState,
  on(
    getBackendErrors,
    (state, action): IBackendErrorsState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),
  on(
    releaseBackendErrors,
    (state): IBackendErrorsState => ({
      ...state,
      validationErrors: undefined,
    })
  )
);
