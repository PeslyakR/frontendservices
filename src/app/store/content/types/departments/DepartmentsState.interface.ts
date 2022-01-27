import { IDepartment } from './Department.interface';

export interface IDepartmentsState {
  departments: IDepartment[];
  activeDepartment?: IDepartment;

  //////
  //validationErrors?: string[];
  deletedDepartment?: boolean;
}
