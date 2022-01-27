import { createAction, props } from '@ngrx/store';

import { EDepartmentsActionTypes } from '../types/departments/DepartmentsActionTypes.enum';
import { IDepartment } from '../types/departments/Department.interface';
import { EBackendErrorActionTypes } from '../types/errors/BackendErrorsActionType.enum';

export const findDepsAction = createAction(EDepartmentsActionTypes.FINDALL);

export const findDepAction = createAction(
  EDepartmentsActionTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const deleteDepAction = createAction(
  EDepartmentsActionTypes.DELETE,
  props<{ id: number }>()
);

export const createDepAction = createAction(
  EDepartmentsActionTypes.CREATE,
  props<{ department: IDepartment }>()
);
export const updateDepAction = createAction(
  EDepartmentsActionTypes.UPDATE,
  props<{ department: IDepartment }>()
);

////////
export const getDepActionSuccess = createAction(
  EDepartmentsActionTypes.SUCCESS_GET_ONE,
  props<{ department: IDepartment }>()
);

export const getDepsActionSuccess = createAction(
  EDepartmentsActionTypes.SUCCESS_GET_MANY,
  props<{ departments: IDepartment[] }>()
);

// export const getDepActionFailure = createAction(
//   EBackendErrorActionTypes.ERROR,
//   props<{ errors: string[] }>()
// );

export const deleteDepartmentActionSuccess = createAction(
  EDepartmentsActionTypes.SUCCESS_DELETE,
  props<{ deleted: boolean }>()
);
