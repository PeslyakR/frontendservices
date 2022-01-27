import { createAction, props } from '@ngrx/store';
import { EBackendErrorActionTypes } from '../types/errors/BackendErrorsActionType.enum';

export const getBackendErrors = createAction(
  EBackendErrorActionTypes.ERROR,
  props<{ errors: string[] }>()
);
export const releaseBackendErrors = createAction(
  EBackendErrorActionTypes.RELEASE
  //  props<{ errors: string[] }>()
);
