import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../types/employees/Employee.interface';
import { EEmployeesActionTypes } from '../types/employees/EmployeesActionTypes.enum';

export const findEmployeesAction = createAction(
  EEmployeesActionTypes.FIND_ALL,
  props<{ idDep: number }>()
);

export const findEmployeeAction = createAction(
  EEmployeesActionTypes.FIND_BY_ID,
  props<{ id: number }>()
);

export const createEmployeeAction = createAction(
  EEmployeesActionTypes.CREATE,
  props<{ employee: IEmployee }>()
);

export const updateEmployeeAction = createAction(
  EEmployeesActionTypes.UPDATE,
  props<{ employee: IEmployee }>()
);

export const deleteEmployeeAction = createAction(
  EEmployeesActionTypes.DELETE,
  props<{ id: number }>()
);

export const getEmployeeActionSuccess = createAction(
  EEmployeesActionTypes.SUCCESS_GET_ONE,
  props<{ employee: IEmployee }>()
);

export const getEmployeesActionSuccess = createAction(
  EEmployeesActionTypes.SUCCESS_GET_MANY,
  props<{ employees: IEmployee[] }>()
);

export const getEmployeeActionFailure = createAction(
  EEmployeesActionTypes.ERROR,
  props<{ errors: string[] }>()
);

export const deleteEmployeeActionSuccess = createAction(
  EEmployeesActionTypes.SUCCESS_DELETE,
  props<{ deleted: boolean }>()
);
