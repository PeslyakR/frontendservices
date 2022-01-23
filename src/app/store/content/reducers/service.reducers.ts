import { createReducer, on, Action } from '@ngrx/store';
import { getRolesActionFailure } from '../actions/roles.actions';
import {
  createServiceAction,
  deleteServiceAction,
  findServiceAction,
  findServicesAction,
  getServiceActionSuccess,
  getServicesActionSuccess,
  updateServiceAction,
} from '../actions/services.actions';
import { IServiceState } from '../types/services/ServicesState.interface';

const initialState: IServiceState = {
  services: [],
  validationErrors: undefined,
};

export const serviceReducer = createReducer(
  initialState,
  on(
    findServiceAction,
    (state): IServiceState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    findServicesAction,
    (state): IServiceState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    createServiceAction,
    (state): IServiceState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    updateServiceAction,
    (state): IServiceState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    deleteServiceAction,
    (state): IServiceState => ({
      ...state,
      validationErrors: undefined,
    })
  ),
  on(
    getServiceActionSuccess,
    (state, action): IServiceState => ({
      ...state,
      activeService: action.service,
    })
  ),
  on(
    getServicesActionSuccess,
    (state, action): IServiceState => ({
      ...state,
      services: action.services,
    })
  ),
  on(
    getRolesActionFailure,
    (state, action): IServiceState => ({
      ...state,
      validationErrors: action.errors,
    })
  )
);

// export function serviceReducers(state: IServiceState, action: Action) {
//   return contentReducer(state, action);
// }
