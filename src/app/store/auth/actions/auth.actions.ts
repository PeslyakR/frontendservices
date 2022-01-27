import { createAction, props } from '@ngrx/store';
import { ICurrentUser } from 'src/app/components/login/types/CurrentUser.interface';
import { ILoginData } from 'src/app/components/login/types/LoginData.interface';
import { IBackendErrors } from '../../content/types/errors/BackendErrors.interface';
import { EActionTypes } from '../types/ActionTypes.enum';

export const authAction = createAction(
  EActionTypes.LOGIN,
  props<{ request: ILoginData }>()
);

export const authSuccessAction = createAction(
  EActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const authFailureAction = createAction(
  EActionTypes.LOGIN_ERROR,
  props<{ errors: IBackendErrors }>()
);
