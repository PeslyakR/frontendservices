import { IPosition } from '../positions/Position.interface';
import { IRole } from '../roles/Role.interface';

export interface IEmployee {
  id?: number;
  fullName: string;
  address: string;
  beginWorking: Date;
  endWorking?: Date;
  position?: IPosition;
  positionId: number;
  status?: string;
  username?: string;
  idUser?: number;
  updated?: string;
  roles?: IRole[];
}
