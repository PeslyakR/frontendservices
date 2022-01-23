import { Action, createReducer, on } from '@ngrx/store';
import {
  confirmRequestAction,
  createRequestAction,
  deleteRequestAction,
  deleteRequestActionSuccess,
  findRequestAction,
  findRequestsAction,
  findRequestsForConfirmingAction,
  getRequestActionSuccess,
  getRequestsActionFailure,
  getRequestsActionSuccess,
  updateRequestAction,
} from '../actions/requests.action';
import { IRequestsState } from '../types/requests/RequestsState.interface';

const initialState: IRequestsState = {
  requests: [],
  validationErrors: undefined,
};
export const requestReducer = createReducer(
  initialState,

  on(
    findRequestAction,
    (state): IRequestsState => ({
      ...state,
    })
  ),
  on(
    findRequestsForConfirmingAction,
    (state): IRequestsState => ({
      ...state,
    })
  ),
  on(
    findRequestsAction,
    (state): IRequestsState => ({
      ...state,
      //  validationErrors: undefined,
    })
  ),
  on(
    confirmRequestAction,
    (state): IRequestsState => ({
      ...state,
      // validationErrors: undefined,
    })
  ),
  on(
    createRequestAction,
    (state): IRequestsState => ({
      ...state,
      // validationErrors: undefined,
    })
  ),
  on(
    updateRequestAction,
    (state): IRequestsState => ({
      ...state,
      // validationErrors: undefined,
    })
  ),
  on(
    deleteRequestAction,
    (state): IRequestsState => ({
      ...state,
    })
  ),
  on(
    getRequestActionSuccess,
    (state, action): IRequestsState => ({
      ...state,
      validationErrors: undefined,
      activeRequest: action.request,
    })
  ),
  on(
    getRequestsActionSuccess,
    (state, action): IRequestsState => ({
      ...state,
      validationErrors: undefined,
      requests: action.requests,
    })
  ),
  on(
    getRequestsActionFailure,
    (state, action): IRequestsState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),
  on(
    deleteRequestActionSuccess,
    (state, action): IRequestsState => ({
      ...state,
      validationErrors: undefined,
      deletedRequest: action.deleted,
    })
  )
);

// export function requestsReducers(state: IRequestsState, action: Action) {
//   return contentReducer(state, action);
// }
