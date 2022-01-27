import { createAction, props } from '@ngrx/store';
import { IService } from '../types/services/Service.interface';
import { EServicesActionTypes } from '../types/services/ServicesActionTypes.enum';

export const findServicesAction = createAction(EServicesActionTypes.FINDALL);

export const findServiceAction = createAction(
  EServicesActionTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const createServiceAction = createAction(
  EServicesActionTypes.CREATE,
  props<{ service: IService }>()
);

export const updateServiceAction = createAction(
  EServicesActionTypes.UPDATE,
  props<{ service: IService }>()
);

export const deleteServiceAction = createAction(
  EServicesActionTypes.DELETE,
  props<{ id: number }>()
);
////
export const getServiceActionSuccess = createAction(
  EServicesActionTypes.SUCCESS_GET_ONE,
  props<{ service: IService }>()
);

export const getServicesActionSuccess = createAction(
  EServicesActionTypes.SUCCESS_GET_MANY,
  props<{ services: IService[] }>()
);

// export const getActionFailure = createAction(
//   EServicesActionTypes.ERROR,
//   props<{ errors: string[] }>()
// );

export const deleteServiceActionSuccess = createAction(
  EServicesActionTypes.SUCCESS_DELETE,
  props<{ deleted: boolean }>()
);
