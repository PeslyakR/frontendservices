import { IPosition } from '../positions/Position.interface';

export interface IDepartment {
  id?: number;
  title: string;
  description?: string;
  status?: string;
  updated?: string;
  employees?: {
    id: number;
    fullName: string;
    address: string;
    position: string;
  }[];
  positions?: IPosition[];
}
