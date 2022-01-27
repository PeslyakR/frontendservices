import { IDepartment } from '../departments/Department.interface';

export interface IPosition {
  id?: number;
  title: string;
  description?: string;
  idDep?: number;
  dep?: IDepartment;
  updated?: Date;
}
