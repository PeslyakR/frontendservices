import { IEmployee } from './Employee.interface';

export interface IEmployeeState {
  employees: IEmployee[];
  activeEmployee?: IEmployee;
  validationErrors?: string[];
  deletedEmployee?: boolean;
}
