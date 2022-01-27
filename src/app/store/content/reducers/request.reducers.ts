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
    })
  ),
  on(
    confirmRequestAction,
    (state): IRequestsState => ({
      ...state,
    })
  ),
  on(
    createRequestAction,
    (state): IRequestsState => ({
      ...state,
    })
  ),
  on(
    updateRequestAction,
    (state): IRequestsState => ({
      ...state,
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
      activeRequest: action.request,
    })
  ),
  on(
    getRequestsActionSuccess,
    (state, action): IRequestsState => ({
      ...state,
      requests: action.requests,
    })
  ),

  on(
    deleteRequestActionSuccess,
    (state, action): IRequestsState => ({
      ...state,
      deletedRequest: action.deleted,
    })
  )
);
