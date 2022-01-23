import { IPosition } from '../positions/Position.interface';
import { IRole } from '../roles/Role.interface';

export interface IEmployee {
  id?: number;
  fullName: string;
  address: string;
  position?: IPosition;
  positionId: number;
  beginWorking: Date;
  endWorking?: Date;
  status?: string;
  login?: string;
  password?: string;
  updated?: string;
  roles?: IRole[];
}
