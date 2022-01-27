import { createAction, props } from '@ngrx/store';
import { IConfirmRequest } from '../types/requests/ConfirmRequest.interface';
import { IRequest } from '../types/requests/Request.interface';
import { ERequestsActionTypes } from '../types/requests/RequestsActionTypes.enum';

export const findRequestsAction = createAction(
  ERequestsActionTypes.FINDALL,
  props<{ id: number }>()
);

export const findRequestsForConfirmingAction = createAction(
  ERequestsActionTypes.FIND_REQUESTS_FOR_CONFIRMING,
  props<{ idEmp: number }>()
);

export const findRequestAction = createAction(
  ERequestsActionTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const createRequestAction = createAction(
  ERequestsActionTypes.CREATE,
  props<{ request: IRequest }>()
);

export const confirmRequestAction = createAction(
  ERequestsActionTypes.CONFIRM,
  props<{ confirmRequest: IConfirmRequest }>()
);

export const updateRequestAction = createAction(
  ERequestsActionTypes.UPDATE,
  props<{ request: IRequest }>()
);

export const deleteRequestAction = createAction(
  ERequestsActionTypes.DELETE,
  props<{ id: number }>()
);

export const getRequestsActionSuccess = createAction(
  ERequestsActionTypes.SUCCESS_GET_MANY,
  props<{ requests: IRequest[] }>()
);

export const getRequestActionSuccess = createAction(
  ERequestsActionTypes.SUCCESS_GET_ONE,
  props<{ request: IRequest }>()
);

// export const getRequestsActionFailure = createAction(
//   ERequestsActionTypes.ERROR,
//   props<{ errors: string[] }>()
// );

export const deleteRequestActionSuccess = createAction(
  ERequestsActionTypes.SUCCESS_DELETE,
  props<{ deleted: boolean }>()
);
