import { IDepartmentsState } from './departments/DepartmentsState.interface';
import { IEmployeeState } from './employees/EmployeeState.interface';
import { IBackendErrorsState } from './errors/BackendErrorState.interface';
import { IPositionState } from './positions/PositionState.interface';
import { IRequestsState } from './requests/RequestsState.interface';
import { IRolesState } from './roles/RolesState.interface';
import { IServiceState } from './services/ServicesState.interface';

export interface IAppState {
  department: IDepartmentsState;
  service: IServiceState;
  role: IRolesState;
  request: IRequestsState;
  position: IPositionState;
  employee: IEmployeeState;
  errors: IBackendErrorsState;
}
