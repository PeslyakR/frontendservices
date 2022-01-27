import { createReducer, on, Action } from '@ngrx/store';
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
};

export const serviceReducer = createReducer(
  initialState,
  on(
    findServiceAction,
    (state): IServiceState => ({
      ...state,
    })
  ),
  on(
    findServicesAction,
    (state): IServiceState => ({
      ...state,
    })
  ),
  on(
    createServiceAction,
    (state): IServiceState => ({
      ...state,
    })
  ),
  on(
    updateServiceAction,
    (state): IServiceState => ({
      ...state,
    })
  ),
  on(
    deleteServiceAction,
    (state): IServiceState => ({
      ...state,
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
  )
);
