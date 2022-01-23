import { IBackendErrors } from 'src/app/store/sharedtypes/BackendErrors.interface';
import { IDepartment } from './Department.interface';

export interface IDepartmentsState {
  departments: IDepartment[];
  activeDepartment?: IDepartment;

  //////
  validationErrors?: string[];
  deletedDepartment?: boolean;
}
